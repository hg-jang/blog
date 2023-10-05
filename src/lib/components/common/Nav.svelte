<script>
  import { DarkMode } from 'flowbite-svelte';

  import { base } from '$app/paths';

  import { LINK, NAVS } from '$lib/config/config';

  import Wave from './Wave.svelte';
</script>

<nav class="sticky top-4 mx-6 shadow-lg">
  <div class="flex flex-row justify-between p-4 bg-slate-300 rounded">
    <ul
      class="flex flex-row items-center gap-x-1 max-w-[530px] font-oswald tracking-wide overflow-auto"
    >
      {#each NAVS as nav}
        {#if nav.active}
          <li class="text-[var(--text-light)] dark:hover:text-[var(--text-dark)]">
            <a
              href={nav.path}
              class="block px-2.5 leading-[40px] break-keep rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {nav.nav}
            </a>
          </li>
        {/if}
      {/each}
    </ul>

    <div>
      <a href={base + LINK.internal.wave}>
        <Wave />
      </a>
      <DarkMode
        class="text-[var(--text-light)] dark:text-[var(--text-light)] dark:hover:text-[var(--text-dark)]"
      />
    </div>
  </div>
</nav>
