import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Form } from '~/types';
import { trimSlash, FORM_PERMALINK_PATTERN } from './permalinks';

const generatePermalink = async ({ id }: { id: string }) => {
  const permalink = FORM_PERMALINK_PATTERN.replace('%id%', id);

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};

const getNormalizedPost = async (form: CollectionEntry<'form'>): Promise<Form> => {
  const { id, data } = form;
  const { Content } = await form.render();

  return {
    id: id,
    permalink: await generatePermalink({ id }),
    Content: Content,
    ...data,
  };
};

const load = async function (): Promise<Array<Form>> {
  const forms = await getCollection('form');
  const normalizedForms = forms.map(async (form) => await getNormalizedPost(form));

  const results = await Promise.all(normalizedForms);

  return results;
};

let _forms: Array<Form>;

/** */
export const fetchForms = async (): Promise<Array<Form>> => {
  if (!_forms) {
    _forms = await load();
  }

  return _forms;
};

/** */
export const getStaticPathsFormPage = async () => {
  return (await fetchForms()).flatMap((form) => ({
    params: {
      form: form.permalink,
    },
    props: { form },
  }));
};
