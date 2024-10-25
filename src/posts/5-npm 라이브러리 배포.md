---
title: rollup으로 npm 패키지 배포하기
description: openlayers를 사용하면서 작성했던 코드를 오픈소스로 배포해 보았습니다.
date: '2024-10-04 21:24'
categories:
  - JavaScript
  - npm
published: true
---

# 패키지를 만들어 배포하게 된 계기

평소에 [`openlayers`](https://github.com/openlayers/openlayers) 라이브러리를 쓸 일이 많았습니다.

그 과정에서 `ol`의 클래스를 상속받아 커스텀 컨트롤을 만들었던 적이 있는데, 이게 별건 아니지만 만들어 놓으면 저로서도 나중에 참고하기 좋고 `openlayers`를 처음 써보는 누군가에게는 도움이 될 수도 있지 않을까 하는 마음에 오픈소스로 만들어 배포해보자 하는 마음이 들었습니다.

npm 패키지를 만들어 배포하는 방법을 정리한 글은 많기에 배포를 위한 과정에 겪었던 별 거 아닌 문제점들을 어떻게 해결했는지 기록해보았습니다.

제가 만든 패키지인 `ol-measurement`는 [이 곳](https://www.npmjs.com/package/ol-measurement)에서 확인해보실 수 있습니다.

# 어떤 번들러를 선택해야 할까?

`JavaScript` 코드를 번들링하기 위한 툴에는 `webpack`, `rollup`, `vite` 등 여러가지가 있습니다.

각각의 번들러는 장단점이 있지만 경험이 없는 사람의 입장에서 이렇다 할 만큼 뚜렷하게 다가오는 장점을 가진 번들러가 없었습니다.

어차피 규모가 크지도 않고 파일 한두 개가 전부일 거라 그냥 아래와 같은 이유로 `rollup`을 선택해 봤습니다.

- webpack은 회사의 레거시 프로젝트에서 잠깐 사용해봤는데 다소 귀찮은 설정이 많았었다.
  - 물론 그 프로젝트가 다소 오래 되기도 했지만 말이다.
- `openlayers`가 `rollup`을 사용하여 빌드되었다.

# 패키지 버전 관리는 어떻게 하지?

여기서 말하는 `버전 관리는 어떻게 하지?`는 `시멘틱 버저닝`을 몰라서 하는 말이 아닙니다.

시멘틱 버저닝의 대략적인 규칙은 알고 있지만 `git`에서 버전에 대한 커밋 이력 관리를 어떻게 할지를 말합니다.

평소에 `git flow`를 이용하긴 하지만 회사에서나 개인적으로나 `release`를 엄격하게 관리하지 않았습니다.

그냥 메인으로 사용하는 브랜치에서 태그나 릴리즈를 생성하지 않고 바로 배포를 해버리는 일이 대부분이었죠.

그래서 이번을 계기로 `git flow`의 `release`를 사용해보게 되었습니다.

## git flow로 새로운 버전 release 하기

develop 브랜치로 이동하여 소스 최신화 하기

```sh
$ git checkout develop

$ git pull origin develop
```

새로운 release 시작

```sh
$ git flow release start vx.x.x
```

`package.json`에서 버전 수정 후 커밋

```json
{
  "version": "x.x.x"
}
```

`release` 마무리

```sh
$ git flow release publish vx.x.x

$ git flow release finish vx.x.x
```

`develop과` `main`에 푸쉬

```sh
$ git checkout develop

$ git push origin develop

$ git checkout main

$ git push origin main

$ git push --tags
```

# 이미지를 불러올 수 없었던 문제

`ol-measurement`의 코드 중, svg 파일을 `img`의 경로로 지정해주는 부분이 있었습니다.

```js
const $distanceButtonLabel = document.createElement("img");
$distanceButtonLabel.src = '../assets/polygon.svg;
```

이게 패키지 내부에서는 올바른 경로로 불러오는 게 맞습니다.

그런데 패키지를 배포해서 서버를 실행해보면 `dependency` 패키지의 내부의 `asset`은 빌드 결과물에 포함되지 않는게 문제였습니다.

```
http://localhost://8080/assets/polygon.svg
```

빌드 결과물에서는 이런 식으로 이미지를 불러오게 되기 때문에 패키지 내부의 `asset`에 접근할 수가 없는 거죠.

## rollup 플러그인: @rollup/plugin-image

그래서 구글링 결과 알게된 것이 [`이 플러그인`](https://www.npmjs.com/package/@rollup/plugin-image)입니다.

이 플러그인 사용하면 이미지 경로가 base64로 인코딩되어 번들링 결과물에 들어가게 됩니다.

그렇게 되면 패키지의 `asset`이 외부에서 빌드될 때 포함될 필요가 없습니다.

# type과 css 파일이 패키지에 포함되지 않았던 문제

앞선 이미지 경로 문제를 해결하던 중, `package.json`의 `files` 필드를 건드린 적이 있습니다.

`files` 필드의 용도는 다음과 같습니다.

> 선택 사항인 files 필드는 패키지가 종속성으로 설치될 때 포함될 항목을 설명하는 파일 패턴의 배열입니다.

처음에 이미지 문제가 발생했을 때는, 이미지가 패키지에 제대로 들어가있지 않아서 그런건가 하는 생각을 했습니다.

그래서 `files` 필드에 asset 폴더를 지정해 보았죠.

```json
{
  "main": "dist/index.js",
  "files": ["assets/**/*"]
}
```

이렇게 지정했더니 `assets` 폴더와 `dist/index.js`를 제외한 파일들은 패키지에 포함이 되지 않게 되었습니다.

스타일과 타입 파일들은 무시가 된 것이죠.

그래서 `files` 필드를 없애 주었더니 정상적으로 패키지에 포함될 수 있었습니다.

# peer dependency 버전 호환성 체크

제가 만든 패키지는 `ol`에 의존하는데, `ol`의 여러 버전들 중 어떤 버전들과 호환되는지를 알고 있어야 사용자들에게 안내해줄 수 있습니다.

그런데 수많은 `major` 버전을 갖고 있는 패키지와 호환성 체크를 어떻게 할 수 있을까요?

사실 이 부분이 제일 궁금했는데 정확한 해답을 찾지는 못했습니다.

우선 제 패키지의 경우엔 `ol`의 모든 버전들에 대해 일일히 직접 테스트해보고 난 뒤 작성을 하긴 했습니다.

```json
{
  "peerDependencies": {
    "ol": ">=9.0.0"
  }
}
```

이 부분에 대해서는 `ol-measurement` 패키지를 계속 관리하면서 함께 알아나갈 계획입니다.
