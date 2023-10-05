import { json } from '@sveltejs/kit';

async function getCategories() {
  let categories = /** @type {string[]} */ ([]);

  const paths = import.meta.glob('/src/posts/*.md', { eager: true });

  for (const path in paths) {
    const file = /** @type {any} */ (paths[path]);
    const metadata = file.metadata;
    /** 각 포스트의 카테고리 목록 */
    const postCategories = /** @type {string[]} */ (metadata.categories);

    postCategories.map((category) => {
      if (!categories.includes(category)) {
        categories.push(category);
      }
    });
  }

  // 오름차순
  categories.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  return categories;
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const posts = await getCategories();
  return json(posts);
}
