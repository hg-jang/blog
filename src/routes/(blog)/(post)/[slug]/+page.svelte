<script>
  import { Badge } from 'flowbite-svelte';

  import { base } from '$app/paths';

  import { formatDate } from '$lib/utils/date.js';
  import Nav from '$lib/components/common/Nav.svelte';
  import Divider from '$lib/elements/divider/Divider.svelte';

  /**
   * @returns {any}
   */
  function randomColor() {
    const colors = [
      'dark',
      'red',
      'green',
      'yellow',
      'indigo',
      'purple',
      'pink',
      'none',
      'blue',
      'primary',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

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
  <h1 class="mb-4 font-blackSans text-inherit text-6xl">{data.meta.title}</h1>
  <p class="mb-1 text-sm text-muted">{formatDate(data.meta.date)}</p>
  <div>
    {#each data.meta.categories as category}
      <Badge border color={randomColor()} class="mr-1">{category}</Badge>
    {/each}
  </div>
</header>

<Nav />

<main class="p-8">
  <article
    class="
      prose prose-base max-w-none text-[var(--text-light)] dark:text-[var(--text-dark)]
      prose-headings:text-[var(--text-light)] dark:prose-headings:text-[var(--text-dark)]
    "
  >
    <svelte:component this={data.content} />
  </article>
</main>

<Divider extraClass="mx-8" />
