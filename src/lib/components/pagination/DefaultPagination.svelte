<script>
  /**
   * @type {number} totalPages
   */
  export let totalPages;

  /**
   * @type {number} maxVisiblePages
   */
  export let maxVisiblePages = 5;

  /**
   * @type {number} currentPage
   */
  export let currentPage = 1;

  /**
   * @type {(page: number | 'next' | 'prev' | 'first' | 'last') => void} handler
   */
  export let handler;

  /**
   * 현재 보여줘야 할 페이지 목록 반환
   * @param {number} total 모든 페이지 수
   * @param {number} max 한 번에 보여줄 페이지 수
   * @param {number} current 현재 페이지
   * @returns
   */
  function pageNumber(total, max, current) {
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

  const pages = pageNumber(totalPages, maxVisiblePages, currentPage);
</script>

<div class="flex items-center justify-center gap-1 text-slate-800 dark:text-slate-800">
  <button
    on:click={() => handler('first')}
    type="button"
    class="h-7 py-0 px-2 bg-slate-300 appearance-none border-none rounded text-inherit tracking-widest transition-colors duration-300 ease-in-out cursor-pointer hover:bg-slate-200"
    >start</button
  >
  <button
    on:click={() => handler('prev')}
    type="button"
    class="h-7 py-0 px-2 bg-slate-300 appearance-none border-none rounded text-inherit tracking-widest transition-colors duration-300 ease-in-out cursor-pointer hover:bg-slate-200"
    >prev</button
  >
  {#each pages as page}
    {#if page === currentPage}
      <button
        type="button"
        class="h-7 w-7 py-0 px-2 bg-slate-400
          appearance-none border-none rounded
          text-inherit
          tracking-widest transition-colors duration-300 ease-in-out
          cursor-pointer
        "
        on:click={() => handler(page)}
      >
        {page}
      </button>
    {:else}
      <button
        type="button"
        class="h-7 w-7 py-0 px-2 bg-slate-200
          appearance-none border-none rounded
          text-inherit
          tracking-widest transition-colors duration-300 ease-in-out
          cursor-pointer hover:bg-slate-300
        "
        on:click={() => handler(page)}
      >
        {page}
      </button>
    {/if}
  {/each}
  <button
    on:click={() => handler('next')}
    type="button"
    class="h-7 py-0 px-2 bg-slate-300 appearance-none border-none rounded text-inherit tracking-widest transition-colors duration-300 ease-in-out cursor-pointer hover:bg-slate-200"
    >next</button
  >
  <button
    on:click={() => handler('last')}
    type="button"
    class="h-7 py-0 px-2 bg-slate-300 appearance-none border-none rounded text-inherit tracking-widest transition-colors duration-300 ease-in-out cursor-pointer hover:bg-slate-200"
    >end</button
  >
</div>
