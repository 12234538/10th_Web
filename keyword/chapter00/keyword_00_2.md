- border vs outline의 차이점 🍠
  - `outline` : 요소 에 그려지는 테두리로 레이아웃과 요소 크기에 영향X
  - `border` : 요소 안에 포함되는 테두리로 레이아웃과 요소 크기에 영향O

### transform 🍠

- translate: 요소를 X축 또는 Y축 방향으로 이동시키는 기능
  - `transform: translate(x, y);`
- scale: 요소의 크기를 확대 또는 축소
  - `transform: scale(x, y);`
  - `transform: scale(1.5);` : 요소 1.5배 확대
  - `transform: scale(2, 1);` : 가로 2배, 세로 1배
- rotate: 요소 회전
  - `transform: rotate(각도);` : degree 사용
  - `transform: rotate(45deg);` : 시계 방향 45도 회전
  - `transform: rotate(-45deg);` : 시계 방향 45도 회전
- skew: 요소 기울이기
  - `transform: skew(x각도, y각도);`
- matrix
  - `transform: matrix(a, b, c, d, tx, ty);`
    1. `a = scaleX`
    2. `b = skewY`
    3. `c = skewX`
    4. `d = scaleY`
    5. `tx = translateX`
    6. `ty = translateY`

### transition 🍠

- transition-property: 어떤 CSS 속성에 transition 효과를 적용할지 지정
  - `transition-property: 속성;`
  - `transition-property: background-color;` → 배경색 바꿈
- transition-duration: 애니메이션이 완료되는 데 걸리는 시간
  - `transition-duration: 시간;`
    - s → 초 / ms → 밀리초
  - `transition-duration: 1s;` → 1초 동안 변화
- transition-timing-function: 시작과 끝의 속도를 어떻게 할지 결정
  - `transition-timing-function: ease-in;`
  | ease | 기본값, 부드럽게 시작하고 끝 |
  | linear | 일정한 속도 |
  | ease-in | 천천히 시작 |
  | ease-out | 천천히 끝 |
  | ease-in-out | 천천히 시작 + 천천히 끝 |
- transition-delay: 애니메이션 시작 전 기다리는 시간
  - `transition-delay: 시간;`
    - `transition-delay: 1s;` → 1초 후 시작
- transition-behavior: 이산(discrete) 속성에 대한 전환 동작 제어
  - `transition-behavior: allow-discrete;`
    | normal | 기본 동작 |
    | allow-discrete | 이산 속성 transition 허용 |

### animation 🍠

- animation-name: 어떤 애니메이션 사용할지 지정
  - @keyframes로 만든 이름 연결
  - `animation-name: move;`
- animation-duration: 애니메이션이 한 번 실행되는 데 걸리는 시간
  - `animation-duration: 2s;`
- animation-delay: 애니메이션 시작 전에 기다리는 시간
  - `animation-delay: 1s;`
- animation-direction: 애니메이션 진행 방향 설정
  - `animation-direction: alternate;` → 왔다 갔다 반
  | normal            | 기본, 정방향         |
  | ----------------- | -------------------- |
  | reverse           | 역방향               |
  | alternate         | 정방향 → 역방향 반복 |
  | alternate-reverse | 역방향 → 정방향 반복 |
- animation-iteration-count: 애니메이션 반복 횟수
  - `animation-iteration-count: 3;` → 3번 반복
  - `animation-iteration-count: infinite;` → 영원히 반복
- animation-play-state: 애니메이션 실행 상태
  - `animation-play-state: paused;`
  - `.box:hover{
  anomation-play-state: paused;
}` → 마우스 올리면 정
  | running | 실행     |
  | ------- | -------- |
  | paused  | 일시정지 |
- animation-timing-function: 애니메이션 속도 변화 방식
  - `animation-timing-function: linear;`
  | ease        | 기본값         |
  | ----------- | -------------- |
  | linear      | 일정한 속도    |
  | ease-in     | 천천히 시작    |
  | ease-out    | 천천히 끝      |
  | ease-in-out | 시작과 끝 느림 |
- animation-fill-mode: 애니메이션 시작 전 / 종료 후 상태 유지 여부
  - `animation-fill-mode: forwards;` → 애니메이션 끝나도 마지막 상태 유지
  | none      | 기본값              |
  | --------- | ------------------- |
  | forwards  | 마지막 상태 유지    |
  | backwards | 시작 상태 적용      |
  | both      | 시작 + 끝 상태 유지 |
- @keyframes: 애니메이션의 동작을 정의하는 규칙
  ```html
  @keyframes 이름 { from {스타일} to {스타일} } 또는 @keyframes move{ 0%
  {transform: translateX(0);} 50% {transform: translateX(100px);} 100%
  {transform: translateX(200px);} } -> 시간에 따라 스타일 변화
  ```
- 축약형
  - `animation: name duration timing-function delay iteration-count direction fill-mode;`

CSS 방법론 BEM 🍠

- BEM: Block, Element, Modifier의 약자로 CSS 클래스 이름 짓는 규칙
- BEM 구조
  .block {
  }
  .block**element {
  }
  .block--modifier {
  }
  .block**element--modifier {
  }
  -BEM 사용 시 주의사항
  1. Element의 Element 만들기
  2. Modifier 단독 사용
  3. 의미 없는 이름 사용

1. Block: 독립적인 컴포넌트 -> 페이지 어디에서든 재사용 가능 -작명 규칙: 명확한 의미
   예: .header / .menu / .search-form -특징
   1. 독립성: 다른 블록에 의존 X
   2. 재사용성: 어디서든 사용 가능
   3. 이동 가능: 위치가 바뀌어도 동작
   4. 중첩 가능: 블록 안에 다른 블록 포함 가능
2. Element: Block안에서 의미 가지는 구성 요소 -작명 규칙: Block과 **(더블 언더스코어)로 연결
   예: .card**title / .menu**item -주의사항: Element의 Element 사용 불가
   예: .card**header\_\_title
3. Modifier: Block이나 Element의 모양, 상태와 동작 변경 -작명 규칙: --(더블 대시)로 연결
   예: .card--featured(Block--Modifier) / .card**button--disabled(Block**Element--Modifier) -활용 패턴
   1. Boolean Modifier(상태): 활성/비활성 같은 on/off 상태
      예: menu\_\_item--active
   2. Key-Value Modifier(속성-값): 특정 값을 가지는 수정자
