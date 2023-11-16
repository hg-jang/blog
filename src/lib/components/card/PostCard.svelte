<script>
  import { base } from '$app/paths';
  import { formatDate } from '$lib/utils/date';

  /**
   * @type {import('$lib/types').Post}
   */
  export let post;
</script>

<li
  class="
				p-2 bg-white border border-solid border-[var(--border-light)] rounded cursor-pointer
				text-[var(--text-light)] dark:text-[var(--text-dark)]
				dark:bg-[var(--bg-dark)] dark:border-[var(--border-dark)] hover:scale-105
			"
>
  <a href="{base}/{post.slug}">
    <h3 class="text-xl font-medium">{post.title}</h3>
    <p class="mb-1 text-xs text-muted">{formatDate(post.date)}</p>
    <p class="text-base text-muted">{post.description}</p>
  </a>
</li>
