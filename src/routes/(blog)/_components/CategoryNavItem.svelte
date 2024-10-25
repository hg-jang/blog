<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch('click');
  }

  export let category: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li
  class="text-sm text-[var(--text-light)] dark:text-[var(--text-dark)] cursor-pointer"
  on:click={onClick}
>
  #{category}
</li>
