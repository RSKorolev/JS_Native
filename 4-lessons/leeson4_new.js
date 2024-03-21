// // статические свойства - определяем при создании объекта

// let fruit = {
//   color: 'Red',
//   taste: 'yummy',
// };

// console.log(fruit.color);
// console.log(fruit.taste);

//динамические(вычисляемые) свойства - либо зависят от условий, либо же вычисляются в процессе выполнения кода (Для определения
//динамического свойства используем квадратные скобки)

// const obj = {
//     [key] : value
// }

// function createObj(key, value) {
//   let newObj = {};
//   newObj[key] = value;

//   return newObj;
// }

// createObj('car', 'Audi'); // {car: "Audi"}

// console.log(createObj('car', 'Audi')); // { car: 'Audi' }
//////////_______________

// function createObj2(key, value) {
//   return {
//     [key]: value,
//   };
// }

// console.log(createObj2('plant', 'rose'));//{ plant: 'rose' }

//Динамические св-ва

//1)использование переменной

// let propertyName = 'age';

// const person = {
//   name: 'John', //статическое св-во
//   [propertyName]: 30, //динамическое св-во
// };

// console.log(person); //{ name: 'John', age: 30 }

//2)конкатенация

// let prefix = 'user_';

// const user = {
//   [prefix + 'id']: '12345-abbd4554-566565hh',
//   [prefix + 'name']: 'Alisa',
// };

// console.log(user);//{ user_id: '12345-abbd4554-566565hh', user_name: 'Alisa' }

//3)арифмкетические операции

// let index = 3;

// const obj = {
//   [index + 1]: 'four',
// };

// console.log(obj); //{ '4': 'four' }

//______________________

// const obj = {
//   ['age' + 2]: 32,
//   [2 + 2]: '4',
// };
// console.log(obj);

// операции с ключами

// function createObj(key, value) {
//   return {
//     [key.toUpperCase()]: value,
//   };
// }

// console.log(createObj('car', 'bmw'));// { '4': 'four' }

//_______________________

//1) создала переменную для каждого статуса

// const STATUS_BUSY = 'busy';
// const STATUS_READY = 'ready';

// //2) использование вычиляемых св-в объекта

// const STATUS_LABELS = {
//   [STATUS_BUSY]: 'Ожидает',
//   [STATUS_READY]: 'Готово',
// };

// //3) c БД приходил массив водителей

// const drivers = [
//   { name: 'Павел', status: 'ready' },
//   { name: 'Иван', status: 'busy' },
//   { name: 'Игорь', status: 'ready' },
// ];

// //4) приводила статусы в нужный ждля меня вид

// const driversStatuses = drivers.map((driver) => {
//   const { status } = driver;

//   //   console.log('status:', status);
//   //   console.log(STATUS_LABELS[status]);

// return STATUS_LABELS[status]; // STATUS_LABELS.country, STATUS_LABELS[status]
// });

// console.log('driversStatuses:', driversStatuses);

// Object.keys(), Object.values(), Object.entries()

//Object.keys()- возвращает массив ключей

// const user = {
//   name: 'John',
//   age: 32,
//   favoriteColor: 'black',
//   country: {
//     city: 'Toronto',
//     address: 'New Address',
//   },
// };

// let keys = Object.keys(user);

// console.log(keys); // [ 'name', 'age', 'favoriteColor' ]

//Object.values() - возвращает массив значений

// const user = {
//   name: 'John',
//   age: 32,
//   favoriteColor: 'black',
//   country: {
//     city: 'Toronto',
//     address: 'New Address',
//   },
// };

// const res = Object.values(user);
// console.log(res); //[ 'John', 32, 'black' ]

//Object.entries() - возвращает массив пар [[ключ, значение]]

// const user = {
//   name: 'John',
//   age: 32,
//   favoriteColor: 'black',
//   country: {
//     city: 'Toronto',
//     address: 'New Address',
//   },
// };

// const result = Object.entries(user);
// console.log('reslt:', result); //[[ 'name', 'John' ], [ 'age', 32 ], [ 'favoriteColor', 'black' ],  [ 'country', { city: 'Toronto', address: 'New Address' } ]]

// new Map - это коллекция ключ-значение, как и Object.  Ключи могут быть любого типа

//new Map - создаем нашу коллекцию

// let map = new Map([
//     ['1', 'string'],
//     [1, 'number'],
//   ]);

//   console.log(map);//Map(2) { '1' => 'string', 1 => 'number' }

//const mapCollection = new Map();

// //console.log('mapCollection: ', mapCollection);

// // set(key, value) - записываетт по ключу key значение value

// mapCollection.set(1, 'number');
// mapCollection.set('1', 'string');
// mapCollection.set(true, 'boolean');

// console.log('mapCollection', mapCollection); // Map(3) { 1 => 'number', '1' => 'string', true => 'boolean' }

// console.log(typeof mapCollection);// object

//get(key) - получаем значение из коллекции

// console.log(mapCollection.get(1));// number

//has(key) -проверяем есть ли клбюч в коллекции

// console.log(mapCollection.has('1'));

// delete(key) - удаляем элемент по конкретному ключу

// console.log('before deleting item: ', mapCollection);

// mapCollection.delete(1);

// console.log('mapCollection after deleting: ', mapCollection);

//clear() - очищает коллекцию

// mapCollection.clear();

// console.log(mapCollection);

//Exmaple 1

// let myArray = [
//   ['key1', 'value1'],
//   [2, 'value2'],
//   [{ city: 'Toronto' }, 'value3'],
// ];

// const map = new Map(myArray); // map = new Map([['key1', 'value']])

// console.log('get(): ', map.get({ city: 'Toronto' }));
// console.log(map);

////__________________

//new Set() - особый вид коллекции (множество значений без ключей), где кажое значение может появляться только один раз

//new Set() - создание множества значений

//add("value")

//let set = new Set();

// console.log(set);//Set(0) {}
// set.add('value2');
// set.add('value1');
// set.add('value2');
// set.add('value3');

// // console.log(set); // Set(3) { 'value1', 'value2', 'value3' }

// //has(value) - true or false

// // console.log(set.has('value2'));//true

// //delete(value) - удаляет значение из множества значений

// set.delete('value2');

// //clear()

// console.log(set);

//examples

// let numbers = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8]; //массив с дубликатами

// let uniqueNumbers = new Set(numbers);

// let uniqueNumbersArray = [...uniqueNumbers];

// console.log('множество значений: ', uniqueNumbers); //uniqueNumbers Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }
// console.log('array: ', uniqueNumbersArray); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
