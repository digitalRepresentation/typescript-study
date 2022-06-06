type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('Max', ' Schwarz');
result.split(' ');

const fetchedUserData = {
    id: 'ul',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};

console.log(fetchedUserData?.job?.title);

const userInput = '';

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformatin(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     if ('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges);
//     }
//     if ('startDate' in emp) {
//         console.log("startDate : " + emp.startDate);
//     }
// }

// printEmployeeInformatin({name: 'Manu', startDate: new Date()});

// class Car {
//     drive() {
//         console.log('Driving...');
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...');
//     }

//     loadCargo(amount: number) {
//         console.log('Loading cargo ...' + amount);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(3);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//     }
//     console.log('Moving at speed: ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// userInputElement.value = 'Hi there';

// interface ErrorContainer { // { email: 'Not a velid email', username: 'Must start with a character!' }
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with a capital character!'
// };

// 유니언 타입으로 문자열이나 숫자형으로 지니는데 타입가드는 유니언 타입을 돕는다.
// 유니온 타입이 지닌 유연성을 활용할 수 있게 해주며 런타임 시 코드가 정확하게 작동하게 해주기 때문이다 
// 두 세가지 다른 타입과 작동하는 함수를 사용하는 경우가  많으므로 이런 경우 유니온 타입이 적합하다
// 그런데 값으로 정확히 무슨 작업을 수행하는지는 여기와 같이 연결되거나 수학적으로 더해진 타입에 따라 달라진다
// typeof를 사용하는 타입가드인데 이와 다른 종류의 타입가드를 작성할 수도 있다

// 구별된 유니언이란 타입가드를 쉽게 구현할 수 있게 해주는 유니언 타입으로 작업을 수행할 때
// 사용할 수  있는 패턴으로 객체 타입으로 사용할 때도 사용할 수 있다.         