function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, { age: 30 });

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no vlaue.';
    if (element.length === 1) {
        descriptionText = 'Got 1 elements.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

// keyof
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

class DataStorage<T extends string | number | boolean > {
    private data: T[] = [];

    addItem(item:T) {
        this.data.push(item);
    }

    removeItem(item:T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// textStorage.addItem(maxObj);
// textStorage.addItem('Manu');
// // ...
// textStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();

// https://kimniki.tistory.com/m/75
// 제네릭 타입은 타입 안정성과 결합된 유연성을 제공합니다.
// 전달하는 값이나 클래스에서 사용하는 값을 유연하게 지정할 수 있다.
// 클래스나 제네릭 함수의 결과를 사용하여 작업에서 모든 타입을 사용할 수 있다.
// 해당 작업에서 타입스크립트는 우리가 전달하는 구체적인 타입이 호출되어야 한다는 것을 인식하기 때문이다
// 또는 우리는 클래스를 인스턴스화하면서 구체적인 타입을 설정하지만 구체적인 타입을 생성하면서 클래스나 함수를 해당 타입으로 제한하기보다
// 유연하게 어느 정도의 제약 조건만 지정할 수 있다
// 그러나 물론 이러한 제약 조건은 선택적이며 제네릭 클래스나 제네릭 함수를 제약 조건이 없도록 지정하거나 많은 제약 조건을 지정할 수도 있다