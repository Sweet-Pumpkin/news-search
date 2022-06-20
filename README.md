## 뉴욕타임즈 기사 검색 사이트
> - 패스트캠퍼스 메가바이트 스쿨 프론트엔드 개발자 과정
> - React 미니 프로젝트
> - NYT API 사용해서 기사 검색 웹 만들기
> - [배포 웹 바로가기](https://elegant-medovik-ba7df8.netlify.app/)

<div align="center">
  <img src="./img/01title.gif" alt="title" />
</div>

---

## Version

![Generic badge](https://img.shields.io/badge/react-18.2.0-blue.svg)
![Generic badge](https://img.shields.io/badge/react_router_dom-6.3.0-blue.svg)
![Generic badge](https://img.shields.io/badge/react_redux-8.0.2-blue.svg)
![Generic badge](https://img.shields.io/badge/redux_persist-6.0.0-blue.svg)
![Generic badge](https://img.shields.io/badge/@reduxjs/toolkit-1.8.2-blue.svg)
![Generic badge](https://img.shields.io/badge/styled_components-5.3.5-blue.svg)
![Generic badge](https://img.shields.io/badge/react_loading-2.0.3-blue.svg)
![Generic badge](https://img.shields.io/badge/react_intersection_observer-9.3.0-blue.svg)
![Generic badge](https://img.shields.io/badge/uuid-8.3.2-blue.svg)

---

## Develop
### Routing
```
  - "/" url에서 기사 검색 페이지 렌더
  - "clip" url에서 내가 clip한 기사 페이지를 렌더
  - 그외 url은 "/"로 redirect
```

  - Route 사용해서 url 지정
  - Navigate 사용해서 다른 url은 "/"로 redirect

### Input
```
  - 마지막 타이핑 이후 0.5초 동안 추가 입력이 없고, input value가 있는 경우 검색 api 호출
  - 최대 5개까지 search history 저장되며, 브라우저가 종료되어도 지속될 것
  - search history가 존재하고, input에 focus중이면 search history가 노출 될 것
``` 

  ![](./img/02input.gif)

  - `setTimeout()` 사용해서 입력 후 0.5초 뒤 검색 api 호출
  - Redux로 search history 개수 & 중복 search history 상태 관리
  - Persist Redux로 search history 상태 저장

  ![](./img/03input.gif)

  - search history 클릭 시 search history value를 input에 전달
  - search history 삭제 기능 추가

### News list
```
  - "/", "/clip"은 기사 리스트를 렌더
  - 기사 리스트는 다음 내용을 포함하는 기사 카드를 렌더 할 것
    - 타이틀
    - 날짜
    - clip on/off 버튼
    - 클릭 시 해당 기사로 바로가기
  - infinite scroll 
    - 스크롤이 마지막에 닿았을 경우 다음 페이지로 렌더
    - 첫 페이지가 화면의 높이를 모두 채우지 못한 경우 다음 페이지로 렌더
```

  ![](./img/04newlist.gif)

  - `map()` 메서드로 검색 api에서 기사 타이틀, 기사 업로드 날짜, 기사 url 정보 각각 받기
  - a 태그로 클릭시 해당 기사로 이동
  - Redux로 clip 버튼 on/off 상태 관리하기

  ![](./img/05newlist.gif)

  - react-intersection-observer으로 infinity scroll 구현

### Clip
```
  - 기사 카드의 clip 버튼을 클릭해 해당 기사를 즐겨찾기한다.
  - clip된 기사들은 "/clip"에서 확인할 수 있다.
  - clip된 기사들은 브라우저를 재시작하여도 유지된다.
  - 기사를 unclip하면 더이상 "/clip"에서 확인할 수 없다.
```

  ![](./img/06clip.gif)

  - Redux로 clip 상태 관리하기 

### etc
```
  - create-react-app 사용
  - react-router-dom 사용
  - redux 사용
  - 스타일링 및 방식은 자유
```
---
