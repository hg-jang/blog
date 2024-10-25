<script>
  import { base } from '$app/paths';

  import { formatDate } from '$lib/utils/date.js';
  import Nav from '$lib/components/common/Nav.svelte';
  import Divider from '$lib/components/divider/Divider.svelte';
  import PostTitle from '../_components/PostTitle.svelte';
  import PostDate from '../_components/PostDate.svelte';
  import PostCategory from '../_components/PostCategory.svelte';

  export let data;
</script>

<svelte:head>
  <title>파랑, 바다, 파도</title>

  <meta name="description" content="Hyeongwang's Personal blog. Record studies or daily life." />
  <meta name="keywords" content={data.meta.categories.toString()} />
  <meta name="author" content="Hyeongwang Jang, 장현광, 킹왕짱바다, hgJang, 바다" />

  <meta name="og:site_name" content="킹왕짱바다" />
  <meta name="og:title" content={data.meta.title} />
  <meta name="og:description" content={data.meta.description} />
  <meta name="og:type" content="website" />
  <meta name="og:image" content="{base}/images/wave.jpg" />
</svelte:head>

<header class="p-8 text-[var(--text-light)] dark:text-[var(--text-dark)]">
  <PostTitle>{data.meta.title}</PostTitle>
  <PostDate>{formatDate(data.meta.date)}</PostDate>
  <div class="flex flex-wrap gap-x-2">
    {#each data.meta.categories as category}
      <PostCategory {category} />
    {/each}
  </div>
</header>

<Nav />

<main class="p-8">
  <article
    class="
      prose prose-base max-w-none text-[var(--text-light)] dark:text-[var(--text-dark)]
      prose-headings:text-[var(--text-light)] dark:prose-headings:text-[var(--text-dark)]
      dark:prose-blockquote:text-[#e5e7eb] dark:prose-a:text-[var(--text-dark)]
      dark:prose-code:text-[#ebdbb2]
    "
  >
    <svelte:component this={data.content} />
  </article>
</main>

<Divider extraClass="mx-8" />
