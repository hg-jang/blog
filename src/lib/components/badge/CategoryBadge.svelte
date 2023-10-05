<script>
  /**
   * @type {string} text
   */
  export let text;

  /**
   * @type {any} handler
   */
  export let handler;
</script>

<button
  on:click={() => handler(text)}
  type="button"
  class="
    flex flex-row items-center justify-between
    p-1 text-sm font-medium border rounded
    bg-gray-700 text-gray-400 border-gray-500 dark:bg-gray-700 dark:text-gray-400
    hover:bg-gray-600
  "
>
  {#if text === 'js'}
    <div class="badge-icon-box mr-1 bg-yellow-300 rounded">
      <svg
        class="badge-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
      >
        <path
          d="M274-360q-15 0-24.5-9.5T240-394v-66h48v52h84v-192h48v206q0 15-9.5 24.5T386-360H274Zm240 0q-15 0-24.5-9.5T480-394v-46h48v32h104v-53H514q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T514-600h132q15 0 24.5 9.5T680-566v46h-48v-32H528v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T646-360H514Z"
        />
      </svg>
    </div>
    <span> JavaScript </span>
  {:else if ['SQL', 'DB', 'sql', 'db'].includes(text)}
    <div class="badge-icon-box mr-1 bg-gray-500 rounded">
      <svg
        class="badge-icon fill-green-400"
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
      >
        <path
          d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-488q86 0 176.5-26.5T773-694q-27-32-117.5-59T480-780q-88 0-177 26t-117 60q28 35 116 60.5T480-608Zm-1 214q42 0 84-4.5t80.5-13.5q38.5-9 73.5-22t63-29v-155q-29 16-64 29t-74 22q-39 9-80 14t-83 5q-42 0-84-5t-80.5-14q-38.5-9-73-22T180-618v155q27 16 61 29t72.5 22q38.5 9 80.5 13.5t85 4.5Zm1 214q48 0 99-8.5t93.5-22.5q42.5-14 72-31t35.5-35v-125q-28 16-63 28.5T643.5-352q-38.5 9-80 13.5T479-334q-43 0-85-4.5T313.5-352q-38.5-9-72.5-21.5T180-402v126q5 17 34 34.5t72 31q43 13.5 94 22t100 8.5Z"
        />
      </svg>
    </div>
    <span>
      {text}
    </span>
  {:else if text === 'svelte'}
    <div class="badge-icon-box mr-1 p-0.5 bg-gray-500 rounded">
      <img class="badge-icon" src="icons/svelte-svgrepo-com.svg" alt="" />
    </div>
    <span> svelte </span>
  {:else if text === 'react'}
    <div class="badge-icon-box mr-1 p-0.5 bg-gray-500 rounded">
      <img src="icons/react-svgrepo-com.svg" alt="" class="badge-icon" />
    </div>
    <span> react </span>
  {:else if text === 'python'}
    <div class="badge-icon-box mr-1 p-0.5 bg-gray-500 rounded">
      <img src="icons/python-svgrepo-com.svg" alt="" class="badge-icon" />
    </div>
    <span> python </span>
  {:else if text === 'docker'}
    <div class="badge-icon-box mr-1 p-0.5 bg-gray-500 rounded">
      <img src="icons/docker-svgrepo-com.svg" alt="" class="badge-icon" />
    </div>
    <span> docker </span>
  {:else if text === 'gcp'}
    <div class="badge-icon-box mr-1 p-0.5 bg-gray-500 rounded">
      <img src="icons/gcp-svgrepo-com.svg" alt="" class="badge-icon" />
    </div>
    <span> gcp </span>
  {:else if text === '일상'}
    <div class="badge-icon-box mr-1 bg-gray-500 rounded">
      <svg
        class="badge-icon fill-amber-950"
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
      >
        <path
          d="M160-120v-60h639v60H160Zm151-120q-63 0-107-43.5T160-390v-450h660q24.75 0 42.375 17.625T880-780v160q0 24.75-17.625 42.375T820-560h-96v170q0 63-44 106.5T573-240H311Zm0-60h261.978Q609-300 636.5-327.5T664-390v-390H220v390q0 35 28 62.5t63 27.5Zm413-320h96v-160h-96v160Zm-282 80Z"
        />
      </svg>
    </div>
    <span> 일상 </span>
  {:else if text === '영화'}
    <div class="badge-icon-box mr-1 bg-gray-500 rounded">
      <svg
        class="badge-icon fill-white"
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
      >
        <path
          d="m140-800 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h112q24 0 42 18t18 42v520q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18Zm0 212v368h680v-368H140Zm0 0v368-368Z"
        />
      </svg>
    </div>
    <span> 영화 </span>
  {:else if text === '책'}
    <div class="badge-icon-box mr-1 bg-gray-500 rounded">
      <svg
        class="badge-icon fill-sky-300"
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
      >
        <path
          d="M560-574v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-610q-38 0-73 9.5T560-574Zm0 220v-49q33-13.5 67.5-20.25T700-430q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-390q-38 0-73 9t-67 27Zm0-110v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-500q-38 0-73 9.5T560-464ZM248-300q53.566 0 104.283 12.5T452-250v-427q-45-30-97.619-46.5Q301.763-740 248-740q-38 0-74.5 9.5T100-707v434q31-14 70.5-20.5T248-300Zm264 50q50-25 98-37.5T712-300q38 0 78.5 6t69.5 16v-429q-34-17-71.822-25-37.823-8-76.178-8-54 0-104.5 16.5T512-677v427Zm-30 90q-51-38-111-58.5T248-239q-36.537 0-71.768 9Q141-221 106-208q-23.1 11-44.55-3Q40-225 40-251v-463q0-15 7-27.5T68-761q42-20 87.395-29.5Q200.789-800 248-800q63 0 122.5 17T482-731q51-35 109.5-52T712-800q46.868 0 91.934 9.5Q849-781 891-761q14 7 21.5 19.5T920-714v463q0 27.894-22.5 42.447Q875-194 853-208q-34-14-69.232-22.5Q748.537-239 712-239q-63 0-121 21t-109 58ZM276-489Z"
        />
      </svg>
    </div>
    <span> 책 </span>
  {:else}
    <span>
      {text}
    </span>
  {/if}
</button>

<style>
  .badge-icon-box {
    width: 20px;
    height: 20px;
  }
  .badge-icon {
    width: 100%;
    height: 100%;
  }
</style>
