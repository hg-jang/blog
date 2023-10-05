<script>
  import { LINK } from '$lib/config/config';
  import Divider from '$lib/elements/divider/Divider.svelte';
</script>

<article class="text-[var(--text-light)] dark:text-[var(--text-dark)]">
  <!-- 소개 -->
  <h2 class="mb-2 text-4xl font-semibold tracking-wider">장현광</h2>
  <p class="text-muted">웹 개발자</p>
  <Divider extraClass="my-4" />
  <p class="mb-2">Contact: wkdgusrhkd@gmail.com | 010-2534-2333</p>
  <p class="mb-8">Github: https://github.com/hg-jang</p>

  <!-- 스킬 -->
  <section class="mb-8">
    <h3 class="text-xl font-semibold">Skills</h3>
    <Divider extraClass="my-1" />
    <p class="mb-1">Frontend: JavaScript(TypeScript), React, Next, Svelte, Tailwind</p>
    <p class="mb-1">Backend: Node.js, PostgreSQL, PostGIS</p>
    <p>Else: Docker</p>
  </section>

  <!-- 경력 -->
  <section class="mb-8">
    <h3 class="text-xl font-semibold">Work experience</h3>
    <Divider extraClass="my-1" />

    <!-- 에스피에이치 -->
    <h4 class="mb-1 text-lg font-medium">SPH, 에스피에이치 - 웹 개발, 기술지원</h4>
    <p class="mb-1 text-sm text-muted">2022년 5월 ~ 현재</p>
    <ul class="list-disc ml-6">
      <li>Google Maps Platform 기술지원</li>
      <li>건설현장 관제 시스템 개발</li>
      <li>Angular, Openlayers, Spring, PostgreSQL, PostGIS, Docker</li>
    </ul>
  </section>

  <!-- 프로젝트 -->
  <section class="mb-8">
    <h3 class="mb-1 text-xl font-semibold">Project</h3>
    <Divider extraClass="my-1" />
  </section>

  <!-- 교육 -->
  <section class="mb-8">
    <h3 class="text-xl font-semibold">Education</h3>
    <Divider extraClass="my-1" />

    <!-- 대학교 -->
    <p>금오공과대학교 기계시스템공학과 학사</p>
    <p class="mb-1 text-sm text-muted">2016년 3월 ~ 2022년 2월</p>

    <!-- 고등학교 -->
    <p>경주고등학교</p>
    <p class="mb-1 text-sm text-muted">2013년 3월 ~ 2016년 2월</p>
  </section>

  <!-- 자격증 -->
  <section class="mb-8">
    <h3 class="text-xl font-semibold">Certificate</h3>
    <Divider extraClass="my-1" />

    <!-- GCP -->
    <p>
      <a href={LINK.gcpCertificate} target="_blank"
        >Google Cloud Platform Associate Cloud Engineer</a
      >
    </p>
    <p class="mb-1 text-sm text-muted">2023년 6월 ~ 2026년 6월</p>
  </section>
</article>
