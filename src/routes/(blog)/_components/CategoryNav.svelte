<script lang="ts">
  import CategoryNavItem from './CategoryNavItem.svelte';

  export let categories: string[] = [];

  export let selectedCategory = '';

  function handleCategory(category: string) {
    selectedCategory = category;
  }
</script>

<div class="mb-4">
  <ul class="flex flex-row flex-wrap gap-x-2">
    <CategoryNavItem category="전체" on:click={() => handleCategory('')} />
    {#each categories as category}
      <CategoryNavItem {category} on:click={() => handleCategory(category)} />
    {/each}
  </ul>
</div>
