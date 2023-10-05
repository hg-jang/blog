import { json } from '@sveltejs/kit';

/**
 *
 * @returns
 */
async function getPosts() {
  /**
   * @type {import('$lib/types').Post[]}
   */
  let posts = [];

  const paths = import.meta.glob('/src/posts/*.md', { eager: true });

  for (const path in paths) {
    const file = /** @type {any} */ (paths[path]);
    const slug = path.split('/').at(-1)?.replace('.md', '');
    const metadata = file.metadata;
    const post = { ...metadata, slug };

    post.published && posts.push(post);

    posts = posts.sort(
      (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
    );
  }

  return posts;
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const posts = await getPosts();
  return json(posts);
}
