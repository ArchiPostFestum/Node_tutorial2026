import rss, {pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: '遅蒔文庫　|ブログ',
        description: 'Atroチュートリアルリベンジ',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>ja-jp</language>`,
    });
}