//примитивы
//string, number. boolean, undefined,null, symbol, bigInt

//ссылочные
//objects, array, function

//typeof

// const a = [];
// console.log(typeof a);

//особенности ссылочных типовов данных

//1) более сложная структура
//2) есть свойства и метода (методы примеры: pop(), unshift(), св-ва: length)
//3) ссылочный тип данных

// let arr = []

// for(let i =0; i < arr.length; i++)

// React, Node.js - работааем с данными иммутабельно

// const a = [1, 2, 4, 5];
// //1) сделать копию
// const b = [1, 2, 4, 5];
// //2) работаю с копией и вношу нудные мне изменения
// b.push(1);
// console.log(b);//[ 1, 2, 4, 5, 1 ]

// const [isStudent, setIsStudent] = useState([
//   { id: '1', name: 'test111' },
//   { id: '2', name: 'test2' },
// ]);

// setIsStudent()

//map, filter ->  return new []
// [...]

//мутабельно
// const users1 = {
//   // #1234
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
// };

// const user2 = users1; // #1234
// user2.name = 'Nika';

// console.log(users1 === user2); // true
// console.log('users1: ', users1);
// console.log('user2: ', user2);

//иммутабельно

//до появления spread оператора
// const users1 = {
//   // #1234 - иммитация ссылки
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
//   country: {
//     // #4567 - новая ссылка
//     id: 1,
//   },
// };

// const users2 = {
//   //#7654 -иммитация ссылки (браузер не видит)
//   id: users1.id,
//   name: users1.name,
//   isStudent: users1.isStudent,
//   country: users1.country, //тут наша ссылка с объекта user1 - #4567
// };

// console.log('users2: ', users2);
// console.log('isEqual: ', users1 === users2); // isEqual:  false
// console.log('key equal', users1.id === users2.id); // 1 === 1 -> true
// console.log('nested val: ', users1.country === users2.country); // nested val:  true

//spread

// const users1 = {
//   //#123
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
// };

// const users2 = { ...users1 }; //#456

// console.log('users2: ', users2);
// console.log('isEqual: ', users1 === users2);

// const superUser = {
//   id: 10,
//   name: 'Clementina DuBuque',
//   username: 'Moriah.Stanton',
//   email: 'Rey.Padberg@karina.biz',
//   address: {
//     street: 'Kattie Turnpike',
//     suite: 'Suite 198',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     geo: {
//       lat: '-38.2386',
//       lng: '57.2232',
//     },
//   },
//   phone: '024-648-3804',
//   website: 'ambrose.net',
//   company: {
//     name: 'Hoeger LLC',
//     catchPhrase: 'Centralized empowering task-force',
//     bs: 'target end-to-end models',
//   },
// };

// const newSuperUserCopy = { ...superUser };
// newSuperUserCopy.address.city = 'Warsaw';

// console.log('superUser: ', superUser.address);
// console.log('NewSuperUserCopy: ', newSuperUserCopy.address);

//Пути для решения проблемыы spread оператора

// const newSuperUserCopy = {
//   ...superUser,
//   address: { ...superUser.address, geo: { ...superUser.address.geo } },
// };
// newSuperUserCopy.address.city = 'Warsaw';

// console.log('superUser: ', superUser.address);
// console.log('NewSuperUserCopy: ', newSuperUserCopy.address);

// structuredClone()

// const superUser = {
//   id: 10,
//   name: 'Clementina DuBuque',
//   username: 'Moriah.Stanton',
//   email: 'Rey.Padberg@karina.biz',
//   address: {
//     street: 'Kattie Turnpike',
//     suite: 'Suite 198',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     geo: {
//       lat: '-38.2386',
//       lng: '57.2232',
//     },
//   },
//   phone: '024-648-3804',
//   website: 'ambrose.net',
//   company: {
//     name: 'Hoeger LLC',
//     catchPhrase: 'Centralized empowering task-force',
//     bs: 'target end-to-end models',
//   },
// };

// const newCopyUser = structuredClone(superUser);
// console.log('isEqual', newCopyUser === superUser);

// newCopyUser.address.geo.lat = 'new Test value';
// console.log('superUser: ', superUser.address.geo);
// console.log('copy using structuredClone: ', newCopyUser.address.geo);

// _______________
// деструктуризация

// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
// };

// const name = employee.firstName; // Ivan
// console.log('name', name);

//1) деструктуризация у объектов

// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
//   message: 'Hello world!',
// };

// // const name = employee.firstName;
// // const message = employee.message;
// // const middleName = employee.middleName

// const { firstName, message, middleName } = employee;
// console.log('country', country);

// console.log(count);
// console.log(message);
// console.log(middleName);

//2) мы можем устанавливать дефолтное значение

// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
//   message: 'Hello world!',
// };

// const { firstName, message, role = 'Admin' } = employee;

// console.log(role);//Admin

// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
//   message: 'Hello world!',
//   role: 'user',
// };

// const { firstName, message, role = 'Admin' } = employee;

// console.log(role); // user

// 3) ситуация когда зарезервировано название переменной

// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
//   message: 'Hello world!',
//   role: 'user',
// };

// const firstName = 'Natasha';

// const { firstName: name, message, role = 'Admin' } = employee;

// console.log(firstName); // Natasha
// console.log(name); // Ivan

//4) вложенные структуры

// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
//   message: 'Hello world!',
//   permission: {
//     canEdit: true,
//     canDelete: false,
//     role: 'user',
//     app: {
//       someApp: "Hello, it's my first app!",
//       secondApp: "it's my second app((",
//     },
//   },
// };

// //три уровня вложенности
// // const {
// //   firstName,
// //   permission: {
// //     canDelete,
// //     canEdit,
// //     app: { someApp, secondApp },
// //   },
// // } = employee;

// // const {
// //   permission: { app },
// // } = employee;

// // const secondApplication = app.someApp;

// console.log('CanDelete', canDelete);
// console.log('CanEdit', canEdit);

// 5) деструктуризация массивов

// const colors = ['red', 'blue', 'green', 'white', 'black'];

// const [redColor, blueColor] = colors;

// console.log(redColor); //red
// console.log(blueColor); //blue

//пропуск значений

// const colors = ['red', 'blue', 'green', 'white', 'black'];

// const [redColor, blueColor, , , blackColor] = colors;

// console.log(blackColor);// black

//дефолтные зачения

// const colors = ['red', 'blue', , 'white', 'black'];

// const [redColor, blueColor, noValue = 'No value'] = colors;

// console.log(noValue);

// вложенные массивы

// const colors = ['red', ['blue', 'purple'], 'green', 'white', 'black'];

// const [redValue, [blueColor, purpleColor]] = colors;

// console.log(blueColor); // blue
// console.log(purpleColor); // purple
