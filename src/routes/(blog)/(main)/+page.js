/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const postsRes = await fetch('api/posts');
  const categoriesRes = await fetch('api/categories');

  const posts = /** @type {import('$lib/types').Post[]} */ (await postsRes.json());
  const categories = /** @type {string[]} */ (await categoriesRes.json());

  return { posts, categories };
}
