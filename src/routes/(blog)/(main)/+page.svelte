<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';
  import { base } from '$app/paths';

  import { formatDate } from '$lib/utils/date';
  import CategoryNav from '$lib/components/common/CategoryNav.svelte';

  import { Pagination } from 'flowbite-svelte';

  export let data;

  /**
   * 페이지 당 포스트 개수
   */
  let postsPerPage = 20;
  /**
   * 전체 페이지 개수
   */
  let totalPages = Math.ceil(data.posts.length / postsPerPage);

  let selectedCategory = '';

  /**
   * 현재 보여줘야 할 페이지 목록 반환
   * @param {number} total 모든 페이지 수
   * @param {number} max 한 번에 보여줄 페이지 수
   * @param {number} current 현재 페이지
   * @returns
   */
  function pageNumber(total, max, current = 1) {
    if (max > total) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    const half = Math.floor(max / 2);
    let to = max;

    if (current + half >= total) {
      to = total;
    } else if (current > half) {
      to = current + half;
    }

    let from = to - max;

    return Array.from({ length: max }, (_, i) => i + 1 + from);
  }

  function previous() {
    if (currentPage === 1) {
      return;
    }
    goto(`${base}/?p=${currentPage - 1}`);
  }
  function next() {
    if (currentPage === totalPages) {
      return;
    }
    goto(`${base}/?p=${currentPage + 1}`);
  }

  $: currentPage = Number((browser && $page.url.searchParams.get('p')) || '1');
  $: pages = pageNumber(totalPages, 3, currentPage).map((page) => ({
    name: String(page),
    href: `${base}/?p=${page}`,
    active: false,
  }));

  $: {
    pages.forEach((page) => {
      let splitUrl = page.href.split('?');
      let queryString = splitUrl.slice(1).join('?');
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get('p');
      if (Number(hrefValue) === currentPage) {
        page.active = true;
      } else {
        page.active = false;
      }
    });

    pages = pages;
  }

  /**
   * 카테고리로 분류된 포스트 목록
   */
  $: posts =
    selectedCategory === ''
      ? data.posts
      : data.posts.filter((/** @type {{ categories: string | string[]; }} */ post) =>
          post.categories.includes(selectedCategory)
        );
  // $: posts = data.posts
  /**
   * 페이징 된 포스트 목록
   */
  $: pagnationedPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
</script>

<svelte:head>
  <title>파랑, 바다, 파도</title>

  <meta name="description" content="Hyeongwang's Personal blog. Record studies or daily life." />
  <meta name="keywords" content="web, js, daily, life, sql" />
  <meta name="author" content="Hyeongwang Jang, 장현광, 킹왕짱바다, hgJang, 바다" />

  <meta name="og:site_name" content="킹왕짱바다" />
  <meta name="og:title" content="블로그" />
  <meta name="og:description" content="바다의 블로그입니다. " />
  <meta name="og:type" content="website" />
  <meta name="og:image" content="{base}/images/wave.jpg" />
</svelte:head>

<CategoryNav categories={data.categories} bind:selectedCategory />

<!-- posts -->
<ul class="flex flex-col gap-y-3">
  {#each pagnationedPosts as post}
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
  {/each}
</ul>

<!-- pagination -->
{#if totalPages > 1}
  <div class="flex justify-center mt-16">
    <Pagination {pages} on:previous={previous} on:next={next} />
  </div>
{/if}
