// noUnusedLocals appId는 전역 변수기 때문에 경고가 안나온다.
let appId = 'abc';
const button = document.querySelector('button');

// noImplicitReturns
function add(n1: number, n2: number) {
    if(n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}

//noUnusedParameters
function clickHandler(message: string, age: number) {
    // noUnusedLocals
    // let userName = 'Max';
    console.log(`Clicked!${message}`);
    console.log(age);
}

if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'test', 1));
}