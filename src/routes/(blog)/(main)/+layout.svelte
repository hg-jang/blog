<script>
  import { fly } from 'svelte/transition';
  import { Toast } from 'flowbite-svelte';

  import { base } from '$app/paths';

  import { BLOG_NAME, GITHUB_NAME, BLOG_INTRODUCTION, LINK } from '$lib/config/config';
  import Footer from '$lib/components/common/Footer.svelte';
  import Nav from '$lib/components/common/Nav.svelte';

  let show = false;
  let counter = 0;

  function toastTrigger() {
    show = true;
    counter = 6;
    copyEmail();
    timeout();
  }

  // @ts-ignore
  function timeout() {
    if (--counter > 0) {
      return setTimeout(timeout, 1000);
    }
    show = false;
  }

  function copyEmail() {
    window.navigator.clipboard.writeText(LINK.email);
  }
</script>

<!-- Blog Home Header -->
<header class="p-8 text-[var(--text-light)] dark:text-[var(--text-dark)]">
  <h1
    class="mb-4 font-blackSans text-[var(--primary-blue)] dark:text-[var(--primary-blue-dark)] text-6xl"
  >
    <a href="{base}/">
      {BLOG_NAME}
    </a>
  </h1>
  <div class="flex flex-row gap-x-4">
    <img class="w-20 h-20 rounded-full object-cover" src="{base}/images/profile.jpg" alt="" />
    <div>
      <a href="{base}/" class="inline-block py-1 px-2 mb-1 bg-blue-100 text-inherit rounded-md">
        <span class="font-semibold gradient-evening-sunshine">@{GITHUB_NAME}</span>
      </a>
      <p class="mb-2 text-inherit">{BLOG_INTRODUCTION}</p>
      <div class="flex flex-row">
        <!-- Github icon -->
        <a href={LINK.github} target="_blank" class="blog-social-button">
          <img src="{base}/icons/github-mark-white.png" class="hidden dark:block" alt="github" />
          <img src="{base}/icons/github-mark.png" class="block dark:hidden" alt="github" />
        </a>

        <!-- Gmail icon -->
        <a
          on:click|preventDefault={toastTrigger}
          class="blog-social-button bg-[var(--bg-dark)] dark:bg-[var(--bg-light)]"
          href="{base}/"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
            ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              class="fill-[var(--text-dark)] dark:fill-[var(--text-light)]"
              d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
            /></svg
          >
        </a>
      </div>
    </div>
  </div>
</header>

<!-- Nav -->
<Nav />

<main class="p-8">
  <slot />
</main>

<Footer />

<!-- Gmail copied Alert Toast -->
<Toast
  bind:open={show}
  transition={fly}
  params={{ x: 200 }}
  contentClass="flex space-x-4 divide-x divide-gray-200 dark:divide-gray-700"
  position="top-right"
>
  <img src="{base}/icons/gmail.png" alt="" class="w-[25px]" />
  <div class="pl-4 text-sm font-normal">Gmail address copied!</div>
</Toast>

<style>
  .blog-social-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    margin: 0 0.5rem 0 0;
    border-radius: 50%;
  }
  .blog-social-button img {
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
  }
  .blog-social-button:hover {
    transform: scale(1.2);
  }
</style>
