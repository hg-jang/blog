<script>
  /** @type {string[]} */
  export let categories;

  /** @type {string} */
  export let selectedCategory = '';

  /**
   *
   * @param {string} category
   */
  function handleCategory(category) {
    selectedCategory = category;
  }
</script>

<div class="mb-4">
  <ul class="flex flex-row flex-wrap gap-1 py-1">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <li
      class="py-1 p-2 text-xs rounded bg-slate-200 hover:bg-slate-300 cursor-pointer"
      on:click={() => handleCategory('')}
    >
      전체
    </li>
    {#each categories as category}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <li
        class="py-1 px-2 text-xs rounded bg-slate-200 hover:bg-slate-300 cursor-pointer"
        on:click={() => handleCategory(category)}
      >
        {category}
      </li>
    {/each}
  </ul>
</div>
