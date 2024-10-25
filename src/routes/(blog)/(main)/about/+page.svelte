<script>
  import { Tooltip } from 'flowbite-svelte';

  import { LINK } from '$lib/config/config';
  import Divider from '$lib/components/divider/Divider.svelte';
  import SectionTitle from './_components/SectionTitle.svelte';
  import SectionItemTitle from './_components/SectionItemTitle.svelte';
  import SectionItemSubTitle from './_components/SectionItemSubTitle.svelte';
  import SectionItemDescriptionList from './_components/SectionItemDescriptionList.svelte';

  function onClickEmail() {
    window.navigator.clipboard.writeText(LINK.email);
  }
</script>

<article class="text-[var(--text-light)] dark:text-[var(--text-dark)]">
  <!-- 소개 -->
  <h2 class="mb-2 text-4xl font-semibold tracking-wider">장현광</h2>
  <p class="text-muted">웹 개발자</p>
  <Divider extraClass="my-4" />
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <p class="mb-2">
    Email
    <span
      id="emailTooltip"
      class="text-sky-600 dark:text-sky-300 underline cursor-pointer"
      on:click={onClickEmail}>@wkdgusrhkd</span
    >
  </p>
  <p class="mb-8">
    Github <a href={LINK.github} target="_blank" class="text-sky-600 dark:text-sky-300 underline"
      >@hg-jang</a
    >
  </p>

  <Tooltip trigger="click" triggeredBy="#emailTooltip">Email copied!</Tooltip>

  <!-- 스킬 -->
  <section class="mb-8">
    <SectionTitle>Skills</SectionTitle>
    <Divider extraClass="my-1" />

    <SectionItemDescriptionList>
      <li>Frontend: JavaScript(TypeScript), React, Svelte, Tailwind</li>
      <li>Backend: Node.js, PostgreSQL, PostGIS</li>
      <li>Else: Docker</li>
    </SectionItemDescriptionList>
  </section>

  <!-- 경력 -->
  <section class="mb-8">
    <SectionTitle>Work experience</SectionTitle>
    <Divider extraClass="my-1" />

    <!-- 에스피에이치 -->
    <SectionItemTitle>SPH, 에스피에이치 - 웹 개발, 기술지원</SectionItemTitle>
    <SectionItemSubTitle>2022년 5월 ~ 현재</SectionItemSubTitle>

    <SectionItemDescriptionList>
      <li>Google Maps Platform 기술지원</li>
      <li>건설현장 관제 시스템 개발</li>
      <li>Angular, Openlayers, Spring, PostgreSQL, PostGIS, Docker</li>
    </SectionItemDescriptionList>
  </section>

  <!-- 프로젝트 -->
  <section class="mb-8">
    <SectionTitle>Project</SectionTitle>
    <Divider extraClass="my-1" />

    <!-- ol-measurement -->
    <SectionItemTitle>
      <a href={LINK.olMeasurement} target="_blank">ol-measurement</a>
    </SectionItemTitle>
    <SectionItemSubTitle>2024년 10월 ~</SectionItemSubTitle>

    <SectionItemDescriptionList>
      <li>측정 툴을 생성해주는 `ol`의 커스텀 컨트롤 라이브러리</li>
      <li>npm, rollup, JavaScript</li>
    </SectionItemDescriptionList>
  </section>

  <!-- 교육 -->
  <section class="mb-8">
    <SectionTitle>Education</SectionTitle>
    <Divider extraClass="my-1" />

    <!-- 대학교 -->
    <SectionItemTitle>금오공과대학교 기계시스템공학과 학사</SectionItemTitle>
    <SectionItemSubTitle>2016년 3월 ~ 2022년 2월</SectionItemSubTitle>

    <!-- 고등학교 -->
    <SectionItemTitle>경주고등학교</SectionItemTitle>
    <SectionItemSubTitle>2013년 3월 ~ 2016년 2월</SectionItemSubTitle>
  </section>

  <!-- 자격증 -->
  <section class="mb-8">
    <SectionTitle>Certificate</SectionTitle>
    <Divider extraClass="my-1" />

    <!-- GCP -->
    <SectionItemTitle>
      <a href={LINK.gcpCertificate} target="_blank">
        Google Cloud Platform Associate Cloud Engineer
      </a>
    </SectionItemTitle>
    <SectionItemSubTitle>2023년 6월 ~ 2026년 6월</SectionItemSubTitle>
  </section>
</article>
