import { getRssString } from '@astrojs/rss';

import { SITE, METADATA, APP_BLOG } from '~/utils/config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const GET = async () => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts();

  const rss = await getRssString({
    title: SITE.name,
    description: METADATA?.description || '',
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.description,
      pubDate: post.publishDate,
    })),

    trailingSlash: SITE.trailingSlash,
    customData: `<language>es-es</language>`,
    stylesheet: '/rss/styles.xsl',
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
