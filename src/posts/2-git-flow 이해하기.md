---
title: git-flow 이해하기
description: git-flow 이해하고 사용해보기
date: '2023-07-30 13:12:00'
categories: 
  - git
published: false
---
# git-flow

## 설치
```sh
$ brew install git-flow-avh
```

## git-flow 시작하기
```sh
$ git flow init
```

## git-flow commands
```sh
# feature 관리
# feature 브랜치 생성
$ git flow feature start <feature name>

# 원격 저장소에 푸쉬
$ git flow feature publish <feature name>

# 다른 사람이 게시한 기능 가져오기
$ git flow feature pull origin <feature name>

# release 관리
# release 브랜치 생성 - develop을 기반으로 release/version 생성
$ git flow release start <version>

# release 푸쉬
$ git flow release publish <version>

# 
$ git push --tags
```

## Feature 개발
```sh
$ git pull --rebase origin develop
```
feature 브랜치를 생성하기 전에 원격 develop 브랜치에서 최신 코드를 받아온다.
로컬 브랜치는 항상 원격 브랜치와 일치시켜준다.

