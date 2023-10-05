<script>
  import { Kbd } from 'flowbite-svelte';
</script>

<footer class="px-8 py-12 text-[var(--text-light)] dark:text-[var(--text-dark)]">
  <p>
    &copy;2023, Built by <Kbd
      class="px-2 py-1.5 text-[var(--primary-blue)] dark:text-[var(--primary-blue-dark)]"
      >king-bada</Kbd
    > with
    <a
      class="tool dark:text-[var(--primary-blue-dark)]"
      href="https://kit.svelte.dev/"
      target="_blank">sveltekit</a
    >,
    <a
      class="tool dark:text-[var(--primary-blue-dark)]"
      href="https://tailwindcss.com/"
      target="_blank">tailwindcss</a
    >,
    <a
      class="tool dark:text-[var(--primary-blue-dark)]"
      href="https://flowbite-svelte.com/"
      target="_blank">flowbite-svelte</a
    >.
  </p>
</footer>

<style>
  .tool {
    color: var(--primary-blue);
    text-decoration: underline;
  }
</style>
