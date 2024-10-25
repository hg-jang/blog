<script>
  import { fly } from 'svelte/transition';
  import { Toast } from 'flowbite-svelte';

  import { base } from '$app/paths';

  import { BLOG_NAME, GITHUB_NAME, BLOG_INTRODUCTION, LINK } from '$lib/config/config';
  import Footer from '../_components/Footer.svelte';
  import Nav from '../_components/Nav.svelte';

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
      <p class="mb-2 text-inherit">
        망상하는 개발자입니다.
        <br />
        요즘엔 Nest에 관심이 많습니다.
      </p>
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
