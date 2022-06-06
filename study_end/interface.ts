// type AddFn = (a: number, b:number) => number;
interface AddFn {
    (a: number, b:number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    // outputName = 'test';
    age = 30;
    if (n?) {
        this.name = n;
    }
    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        if (this.name) {
            
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi!');
        }
    }
}

let user1: Greetable;

user1 = new Person();
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);

// 객체의 타입을 확인하는 데 사용할 수 있다.
// 객체의 구조를 정의할 수 있게 해준다.

// 타입을 써도 에러 없이 컴파일이 된다 type Person {}
// 인터페이스와 사용자 정의 타입은 완전히 같지 않다
// 가장 큰 차이점 하나는 인터페이스는 객체의 구조를 설명하기 위해서만 사용한다는 것이다
// 위 경우에도 타입을 사용할 수 있지만 자용자 정의 타입 대신 유니온 타입 등을 저장할 수도 있다.
// 무언가를 인터페이스로 정의하는 경우, 분명 객체의 구조를 정의하는 데 쓰일 것이다.
// 실제로 객체 유형을 정의할 때 사용자 정의 타입보다 인터페이스를 더 자주 볼 수 있다.
// 작업 중 인터페이스를 자주 사용하는 이유는 클래스가 인터페이스를 이행하고 준수해야 하는 약속처럼 사용할 수 있기 때문

// 인터페이스를 어떤 상수나 변수의 타입으로 사용하여 인터페이스 타입을 기반으로 하는
// 다른 타입의 다른 클래스를 저장할 수 있다. 이를 구현하기 떄문

// 인터페이스에서는 public, private를 사용할 수 없지만 readonly를 추가하여 인터페이스를 기반으로 구축하는
// 모든 객체의 속성이 한 번만 설정되어야 하며 이후에는 읽기 전용으로 설정하여 객체가 초기화되면 변경할 수 없도록 할 수 있습니다.
// 인터페이스 대신 타입을 사용하는 경우도 마찬가지다.

// 인터페이스를 나누는 이유는 어떤 애플리케이션 작업을 수행하면서 어떤 객체에는
// name을 입력하고 greed 메소드를 제외하는 한편 다른 객체에는 greet와 name을 입력하고자 한다면 이렇게 나눌 수 있다.

// 인터페이스는 클래스와는 달리 타입스크립트에만 있는 타입스크립트 전용 기능으로 명확하게 구조화되고
// 매우 명시적인 코드를 작성하는 데 도움을 주어 클래스가 특정 기능이나 객체를 갖게 해주고 특정 구조를 갖도록 해줍니다
// 함수타입으로도 가능하다.
