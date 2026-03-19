- null과 undefined의 차이점에 대해 직접 작성해주세요 🍠
  - null: 값이 존재하지 않는 것
  - undefined: 변수를 초기화하지 않았을 때 자동으로 할당되는 값으로 값이 없는 것이 아닌, 값이 아직 할당되지 않은 것

함수에서의 TypeScript 🍠

- 함수 선언식의 특징에 대해 정리해주세요!
  - 매개 변수와 반환 값 모두 `:데이터 타입` 으로 타입을 명시해줘야 해요.
  - 함수를 적을 때 function이라는 말이 필요해요!
- 화살표 함수의 특징에 대해 정리해주세요!
  - 매개 변수와 반환 값 모두 `:데이터 타입` 으로 타입을 명시해줘야 해요.
  - function을 적지 않고 변수 선언하고 바로 화살표 함수로 리턴값을 할당할 수 있어요

- 타입 스크립트에만 존재하는 타입 🍠
  - any 🍠
    //any: 모든 타입 허용
    let value: any;
    value = 123;
    value = "string";
    value = true;
    value = 10n;
    value = null;
    //타입 스크립트의 장점이 줄어들어 남용X
  - unknown 🍠
    - `typeof` , `instanceof`, `isArray()` 등을 통해 검증이 필요해요
      //unknown: 모든 타입 허용하지만, 사용 전 타입 검증 필요
      //타입 검증
      let data: unknown;
      data = "안녕하세요";
      data = 123;
    if(typeof data === "string") {
    console.log(data);
    }
    else if(typeof data === "number") {
    console.log(data);
    }
    //객체 검증
    let obj: unknown;
    obj = new Date();
    if(obj instanceof Date) {
    console.log(obj.getDate());
    }
    ```

    ```
  - void 🍠
    //void: 반환 값 없음 -> C++에서의 void와 같은 역할이에요!
    function sum(x: number, y: number): void {
    console.log(x + y);
    }

  - never 🍠
    //never: 절대 값을 반환하지 않는 함수
    //예외 처리하는 함수
    function throwError(message: string): never {
    throw new Error(message);
    }
    //무한 루프 함수
    function infiniteLoop(): never {
    while (true) {
    console.log("running...");
    }
    }
