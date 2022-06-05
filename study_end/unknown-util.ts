let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}

// unknown을 사용할 때는 추가적인 타입 검사가 필요하다.
// unknown이 any보다 나은 이유는 할 수 없는 작업을 알 수 있도록
// 타입 검사를 수행할 수 있기 때문이다.
// userInput 타입이 어떤 타입인지 알 수 있으면 유니온 타입을 적는 게 더 좋다.

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occurred!', 500);