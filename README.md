# React-Study

## React란
```
- 자동으로 업데이트 되는 UI
- UI = render(state)
- render 함수는 순수 함수로 작성
  * 랜덤 함수 사용 (X)
  * 외부 상태 변경 (X)
- state는 불변 변수로 관리
- 가삼 DOM (Virtual DOM) 
```


## 바벨 사용해보기
```
- 자바스크립트 코드로 변환해주는 컴파일러
- 최신 자바스크립트 코드를 지원하지 않는 환경에서도 최신 문법 사용 가능
- 그 외 다양한 용도로 사용
   - 코드에서 주석 제거 
   - 코드를 압축
<<<<<<< HEAD
- 리액트에서는 JSX 문법을 사용하기 위해 바벨 사용
```

## 웹팩의 기본 개념 이해
```
- 파일 이름 기반으로 파일 내용 해시 값 추가 => 효율적으로 브라우져 캐싱
- 사용되지 않는 코드 제거
- 자바스크립트 압축
- JS에서 CSS ,JSON, 텍스트 파일등 일반 모듈 처럼 불러오기 
- 환경 변수 주입
- 모듈 시스템 (ESM, commonJS)를 사용하고 싶어서 / 모듈 시스템!
```

## React 구축을 위한 도구 create-react-app 
- 리액트에서는 JSX 문법을 사용하기 위해 바벨 사용
 
## Create-React-App 사용하기
```
- 쉬운 개발환경 구축
  > babel, webpack, ject(테스트), polyfill, HMR, CSS 후처리
- Facebook에서 제공
```

## Create-React-App 실습
```
//프로젝트 생성
npx create-react-app {APP_NAME}
```

## 
- Start : 개발 모드 실행 (Http) 
  - HTTPS=ture npm start // (Https로 실행됨)
- Build : 배포 버전 생성
  -  npm run build
  -  npx serve -s build (정적 파일 서비스 실행) 
- Test
  -  npm test
  -  test.js 파일로 관리하면 test 명령어를 통해 테스트 시작
- Eject
  -  npm eject

- PolyFill
  - caniuse.com 사이트를 통해 명령어 확인
  - core-js 폴더를 이용하여 참조
  - 지원하지않는 브라우져에 대해 사용할 수 있게 만들어주는 js 명령어를 core-js를 통하여 사용할 수 있게 만듬

- 환경 변수
  - process.env.{VARIABLE_NAME} 
  - ex) {VARIABLE_NAME}={VARIABLE_VALUE} npm start
  - .env.development(개발용) / .env.production(상용) 파일로 관리할 수도 있다.


## CSS 작성 방법 선택하기
- 일반적인 css
- css-module
- Sass
- css-in-js


## SPA
- pushState
- react-route-dom


## 리액트 특징
- UI 코드와 비즈니스 로직 코드가 분리 
  - JSX 부분 UI 코드
  - 직관적으로 파악 (UI는 UI만 / 비즈니스 로직은 비즈니스 로직만)
- 선언형 프로그래밍 
- 추상화 단계가 높다 
  - 비즈니스 로직 코드에 집중할 수 있다 

## State
  - React가 값이 변경되었다는 사실을 State로 알 수 있음 
## Props 
  - 속성 값
  - 부모 Element가 전달해 주는 값
  - React.memo({Element})를 이용하여 속성값이 변경될 때만 랜더링 
  - Props는 부모 Element에서 준 값을 변경할 수 없다.
  - Key가 있어야 VirtualDom에서 효율적으로 랜더링할 수 있다.
  - React.Fragement 사용 시 자동으로 Key 설정
    -  <> , </> 으로 대처 가능

  ## Virtual Dom
  - Virtual Dom에서 변경된 것을 찾고 실제 Dom에 반영한다.
  - 랜더 단계 -> 커밋 단계 
  - 렌더 단계에서는 변경된 요소를 찾는 과정 (가상돔을 이용)
  - 커밋 단계는 파악된 변경 사항을 실제 돔에 반영하는 과정  
  - 랜더링을 할 때 마다 가상돔을 생성 
  - 이전 가상돔과 비교하여 변경된 요소를 찾음 

  ## React Hook
  - 컴포넌트에 기능을 추가할 때 사용하는 함수
    - ex) 컴포넌트에 상태 값 추가, 자식 요소에 접근
    - 리액트 16.8 새로 추가
      - 그 전에는 클래스형 컴포넌트 사용
      - 클래스형 컴포넌트 보다 장점이 많으며 리액트 팀에서도 리액트 훅에 집중
  - useState : 상태값 추가 
  - useEffect : 부수 효과 처리 
    - API 서버 호출 
    - 이벤트 헨들러 등록
    - 의존성 배열 
      - 안에서 사용하는 지역 변수 , 지역 함수 등 값을 넣어줘야한다. 
      - 의존성 배열이 있는 경우 , 해당 의존성 안에 값이 변경될 때에만 호출 , [userId]
      - 의존성 배열이 없는 경우 매번 호출 , x
      - 의존성 배열이 빈값인 경우 한 번만 호출, []
      
  - React Hook을 사용 시 지켜야 할 규칙
    - 하나의 컴포넌트에서 훅을 호출 시 순서는 항상 같아야 한다.
      - if 사용 X
      - for문 사용 X
      - function 사용 X
    - 훅은 함수형 컴포넌트 또는 커스텀 훅 안에서 호출되어야 한다.
