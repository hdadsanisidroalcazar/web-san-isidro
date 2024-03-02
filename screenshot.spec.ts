import * as fs from 'fs'
import * as cheerio from 'cheerio'
import { test } from '@playwright/test'
import { argosScreenshot } from '@argos-ci/playwright'

// Constants:
const siteUrl = 'http://localhost:4321'
const sitemapPath = './.vercel/output/static/sitemap-0.xml'
const stylesheetPath = './screenshot.css'
const stylesheet = fs.readFileSync(stylesheetPath).toString()

const extractSitemapPathnames = (sitemapPath: string): string[] => {
	const sitemap = fs.readFileSync(sitemapPath).toString()
	const $ = cheerio.load(sitemap, { xmlMode: true })
	const urls: string[] = []
	$('loc').each(function handleLoc() {
		urls.push($(this).text())
	})
	return urls.map((url) => new URL(url).pathname)
}

const pathnameToArgosName = ({
	browserName,
	isMobile,
	pathname
}: {
	browserName: string
	isMobile: boolean
	pathname: string
}): string => {
	return `${browserName}/${isMobile ? 'mobile' : 'desktop'}/${
		pathname.replace(/^\/|\/$/g, '') || 'index'
	}`
}

const screenshotPathname = (pathname: string) => {
	test(`pathname ${pathname}`, async ({ page, browserName, isMobile }) => {
		const url = siteUrl + pathname
		await page.goto(url)
		await page.waitForLoadState('networkidle') // Wait redirect pages
		await page.addStyleTag({ content: stylesheet })
		await argosScreenshot(page, pathnameToArgosName({ browserName, pathname, isMobile }))
	})
}

test.describe('Site screenshots', () => {
	const pathnames = extractSitemapPathnames(sitemapPath)
	console.log('Pathnames to screenshot:', pathnames)
	pathnames.forEach(screenshotPathname)
})
