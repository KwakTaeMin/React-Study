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
- 리액트에서는 JSX 문법을 사용하기 위해 바벨 사용
```
 
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


