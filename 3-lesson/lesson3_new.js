// slice, splice. toSpliced(), reduce

// slice () - иммутабельным,

// 1) expected: ["a", "b"]

// let arr = ['a', 'b', 'c', 'd', 'e'];

// const sub = arr.slice(0, 2); //не включительно по второй индекс(второй параметр не обязательный)

// console.log('arr: ', arr);
// console.log('sub:  ', sub); //[ 'a', 'b' ]

// 2) с одним парметром в slice

// let arr = ['a', 'b', 'c', 'd', 'e'];

// const res = arr.slice(1);

// console.log('res: ', res); //[ 'b', 'c', 'd', 'e' ]

// 3)

// let arr = ['a', 'b', 'c', 'd', 'e'];

// const res = arr.slice(1, -1);
// const res1 = arr.slice(1, -2);

// console.log('result: ', res); //[ 'b', 'c', 'd' ]
// console.log('result2: ', res1); // [ 'b', 'c' ]

// первый отрицательный
// let arr = ['a', 'b', 'c', 'd', 'e'];

// const res = arr.slice(-2);

// const res1 = arr.slice(-1, 2);

// console.log('result: ', res);
// console.log('result2: ', res1);

// splice() - мутабельный

// // массив.splice(откуда удаляем, сколько удаляем, [вставить], [вставить]...);

// 1) удаление элементов

// let arr = ['a', 'b', 'c', 'd', 'e'];

// const deletedItems = arr.splice(1, 3);

// console.log('arr: ', arr); // [ 'a', 'e' ]
// console.log('deleted: ', deletedItems); // [ 'b', 'c', 'd' ]

// 2) не удаляем, а только добавляем элементы

// let arr = ['a', 'b', 'c', 'd', 'e'];

// const result = arr.splice(1, 0, '2', '3', 'test');

// console.log('arr: ', arr);

// 3) удаляем и добавляем

// let arr = ['a', 'b', 'c', 'd', 'e'];

// const result = arr.splice(1, 3, '2', '3', 'test');

// console.log('arr: ', arr); //  [ 'a', '2', '3', 'test', 'e' ]

// 4

// let arr = ['a', 'b', 'c', 'd', 'e'];

// arr.splice(-2, 1);

// console.log('arr: ', arr); // [ 'a', 'b', 'c', 'e' ]

// /toSpliced() - иммутабельно

// const months = ['Jan', 'Mar', 'Apr', 'May'];

// const months2 = months.toSpliced(1, 0, 'Feb');

// const months3 = months.toSpliced(1, 3, 'Feb');

// console.log('months: ', months);
// console.log('months2 added item:  ', months2);
// console.log('months3: ', months3);

// reduce()

// .reduce((acc, el) => {}, a[0])

// let a = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i];
// }

// console.log(sum);//15

//1
// let a = [3, 2, 3, 4, 5];

// const result = a.reduce((acc, el) => {
//   //   console.log('acc: ', acc);
//   //   console.log('el: ', el);
//   return acc + el;
// }, 0);

// console.log('result', result);

//2

// const fruits = [
//   { name: 'apple', quantity: 2 },
//   { name: 'banana', quantity: 3 },
//   { name: 'orange', quantity: 1 },
// ];

// const result = fruits.reduce((acc, fruit) => {
//   console.log('fruit: ', fruit);
//   return acc + fruit.quantity;
// }, 0);

// console.log('result: ', result);

//3

// const numbers = [3, 2, 8, 1, 6];

// const res = numbers.reduce((acc, currentNumber) => {
//   console.log('acc: ', acc);
//   console.log('currentNumber: ', currentNumber);

//   return currentNumber > acc ? currentNumber : acc;
// }, numbers[0]);

// console.log('res: ', res);

//4

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ]; // {totalNames: [...], totalAge: ..}

// const res = people.reduce(
//   (acc, person) => {
//     // console.log('person', person);
//     acc.totalNames.push(person.name);
//     acc.totalAge += person.age;
//     // console.log('acc: ', acc);
//     return acc;
//   },
//   { totalNames: [] }
// );

// console.log(res);

//5

// const peoples = [
//   { name: 'Vika', age: 25, budget: 4500 },
//   { name: 'Nikita', age: 45, budget: 35000 },
//   { name: 'Igor', age: 55, budget: 340 },
//   { name: 'Insaf', age: 65, budget: 50000 },
//   { name: 'Alyona', age: 75, budget: 20 },
// ]; // {totalAge: 0, totalBudget: 0}

// const result = peoples.reduce(
//   (acc, el) => {
//     acc.totalAge += el.age;
//     acc.totalBudget += el.budget;
//     return acc;
//   },
//   { totalAge: 0, totalBudget: 0 }
// );

// console.log(result);

// const peoples = [
//   { name: 'Vika', age: 25, budget: 4500 },
//   { name: 'Nikita', age: 45, budget: 35000 },
//   { name: 'Igor', age: 55, budget: 340 },
//   { name: 'Insaf', age: 65, budget: 50000 },
//   { name: 'Alyona', age: 75, budget: 20 },
// ]; // {totalNames: [""]}

//map
// const mappedInfo = peoples.map((person) => ({
//   name: person.name,
//   age: person.age,
// }));

// const result = {
//   totalNames: mappedInfo.map((person) => person.name),
//   totalAges: mappedInfo.reduce((acc, el) => acc + el.age, 0),
// };
// console.log(result);

//reduce
// const result = peoples.reduce(
//   (acc, el) => {
//     acc.totalNames.push(el.name);
//     return acc;
//   },
//   { totalNames: [] }
// );

// console.log('result', result);// { totalNames: [ 'Vika', 'Nikita', 'Igor', 'Insaf', 'Alyona' ] }

//

// const words = ['Hello', ' ', 'world', '!']; //"Hello world!"

// const result = words.reduce((acc, word) => {
//   return acc + word;
// }, '');

// console.log('result:', result); // Hello world!
