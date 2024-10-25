export const BLOG_NAME = '파랑, 바다, 파도';

export const GITHUB_NAME = 'hgjang';

export const BLOG_INTRODUCTION = '파랑, 바다, 파도...';

export const BLOG_URL = 'https://king-bada.dev';

export const LINK = {
  github: 'https://github.com/hg-jang',
  email: 'wkdgusrhkd@gmail.com',
  gcpCertificate:
    'https://google.accredible.com/6d9c66ef-3808-4f33-8c46-51402f2adce4?key=5f9b0e333cd2621db82ff534d3defc7dd7b341586425e165f5138294858bfa01',
  olMeasurement: 'https://www.npmjs.com/package/ol-measurement',

  internal: {
    blog: '/',
    wave: '/wave',
    about: '/about',
  },
};

export const NAVS = [
  {
    nav: '블로그',
    path: LINK.internal.blog,
    active: true,
  },
  {
    nav: '소개',
    path: LINK.internal.about,
    active: true,
  },
];

export const UTTERANCE = {
  repo: 'hg-jang/comment-box',
  theme: 'github-dark',
  issueTerm: 'pathname',
};
