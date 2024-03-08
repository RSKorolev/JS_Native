//push, pop, shift, unshift - мутабельные === изменяют(мутируют) исходный массив

//push():

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];

// const result = names.push('Monika');

// console.log('names: ', names); //[ 'Alex', 'Bob', 'Ivan', 'Sasha', 'Monika' ]
// console.log('new length: ', result); // 5

//несколько элементов
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];

// const result = names.push('Monika', 'Test Name');

// console.log('names: ', names); //[ 'Alex', 'Bob', 'Ivan', 'Sasha', 'Monika', 'Monika', 'Test Name' ]
// console.log('new length: ', result); //6

//pop():

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.pop();

// console.log('names: ', names); // [ 'Alex', 'Bob', 'Ivan' ]
// console.log('deleted item: ', result); // Sasha

//shift():

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.shift();

// console.log('names: ', names); // [ 'Bob', 'Ivan', 'Sasha'];
// console.log('deleted item: ', result); // Alex

//нюанс

// const names = [];
// const res = names.shift();

// console.log(res);//undefined

//unshift():

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.unshift('Viktar');

// console.log('names: ', names); // ["Viktar", 'Alex', 'Bob', 'Ivan', 'Sasha']
// console.log('new length: ', result); // 5

//несколько элементов передаем в unshift
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.unshift('Nina', 'Viktar');

// console.log('names: ', names); // ["Nina", "Viktar", 'Alex', 'Bob', 'Ivan', 'Sasha']
// console.log('new length: ', result); // 6

//reverse() - меняет порядок элемент в массиве на обратный.  Мутирует исходный массив

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// console.log('до; ', names);

// const res = names.reverse();

// console.log('names: ', names); // [ 'Sasha', 'Ivan', 'Bob', 'Alex' ]
// console.log('res: ', res); // [ 'Sasha', 'Ivan', 'Bob', 'Alex' ]

//split() - метод для работы со строками

//1) разделим строку по разделителю "-"

// const str = 'ab-cd-ef';
// const res = str.split('-');

// console.log('str: ', str);// ab-cd-ef
// console.log('res: ', res);// [ 'ab', 'cd', 'ef' ]

//2) второй параметр в split

// const str = 'ab-cd-ef';
// const res = str.split('-', 2);

// console.log('str: ', str); // ab-cd-ef
// console.log('res: ', res); // [ 'ab', 'cd' ]

//3) split('')

// const str = 'ab-cd-ef';
// const res = str.split('');

// console.log('str: ', str); // ab-cd-ef
// console.log('res: ', res); // ['a', 'b', '-', 'c', 'd', '-', 'e', 'f']

//4) split() - ничего не передаем

// const str = 'ab-cd-ef';
// const res = str.split();

// console.log('str: ', str); // ab-cd-ef
// console.log('res: ', res); // ['ab-cd-ef']

//join() - метод массива

//1) разделитель передаем в join("-")

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joiResult = names.join('-');

// console.log('names: ', names); //  [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('join result: ', joiResult); // Alex-Bob-Ivan-Sasha -> это у нас строка

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joiResult = names.join(', ');

// console.log('names: ', names); //  [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('join result: ', joiResult); // Alex, Bob, Ivan, Sasha

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joiResult = names.join(' ');

// console.log('names: ', names); //  [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('join result: ', joiResult); // Alex Bob Ivan Sasha

//2) join() -  ничего не передаем

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joiResult = names.join();

// console.log('names: ', names); //  [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('join result: ', joiResult); // Alex,Bob,Ivan,Sasha

// 3) join('') - пустая строка

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joiResult = names.join('');

// console.log('names: ', names); //  [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('join result: ', joiResult); // AlexBobIvanSasha

// const numberPhone = '123-456-768';

// const step1 = numberPhone.split('');
// console.log('step1: ', step1);

// const step2 = step1.reverse();
// console.log('step2: ', step2);

// const step3 = step2.join('');
// console.log(step3);

// concat() - не мутирует исходный массив:

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];

// const res = arr1.concat(arr2, arr3);

// console.log(res);// [ 1, 2, 3, 4, 5, 6 ]

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];

// const res = arr1.concat(arr2, arr3, 7, 8, 9);

// console.log(res); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//вложенные массивы

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const nestedArr = [[5, 6], [7, 8], [[9, 10]]];

// const res = arr1.concat(arr2, nestedArr);

// const testExample = res.flat();
// const rmSecondNested = res.flat(2);
// const rmAllNested = res.flat(Infinity);

// console.log('result with nested arrays: ', res); // [ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8 ], [ [ 9, 10 ] ] ]
// console.log('удаляем один уровень вложенности ', testExample); //  1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ] ]
// console.log('указали двойковой, что два уровня вложенности убираем', rmSecondNested);
// console.log('убрали все уровни вложенности', rmAllNested); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//indexOf():

//1)найдем позицию тройки indexOf(3)

// const numbers = [1, 2, 3, 3, 4, 3, 5, 6, 7];
// const res = numbers.indexOf(3);//передаем элемент

// console.log('position: ', res);// 2 - позиция элемента в массиве
//___________________________________

// const numbers = [1, 2, 3, 3, 4, 3, 5, 6, 7];
// const res = numbers.indexOf(1); //передаем элемент

// console.log('position: ', res); // 0 - позиция элемента в массиве
//____________________________

// const numbers = ['one', 'two', 'three', 'four'];
// const res = numbers.indexOf('two'); //передаем элемент

// console.log('position: ', res); // 1 - позиция элемента в массиве
//__________________

// const numbers = ['one', 'two', 'three', 'four'];
// const res = numbers.indexOf('t'); //передаем элемент

// console.log('position: ', res); // -1 - позиция элемента в массиве

//2) нет элемента в массиве

// const numbers = [1, 2, 3, 3, 4, 3, 5, 6, 7];
// const res = numbers.indexOf(8);

// console.log('position: ', res); // -1

// 3)указанная позиция

// const numbers = [1, 2, 3, 3, 4, 3, 5, 6, 7];
// const res = numbers.indexOf(3, 3);

// console.log('position: ', res); //3

// const numbers = [1, 2, 3, 3, 4, 3, 5, 6, 7];
// const res = numbers.indexOf(3, 4);

// console.log('position: ', res); // 5

//______________

// const numbers = ['one', 'two', 'three', 'two', 'four'];
// const res = numbers.indexOf('two', 2); //передаем элемент

// console.log('position: ', res); // 3 - позиция элемента в массиве

//lastIndexOf() - ищем с конца массива

//1)найдем позицию слова

// const numbers = ['one', 'two', 'three', 'two', 'four'];
// const res = numbers.lastIndexOf('two');

// console.log(res);// 3

//2) пытаемся найти элемент которого нет

// const numbers = ['one', 'two', 'three', 'two', 'four'];
// const res = numbers.lastIndexOf('t');

// console.log(res); // -1

//3) передаем второй параметр

// const numbers = ['one', 'two', 'two', 'three', 'two', 'four'];
// const res = numbers.lastIndexOf('two', -1);

// console.log(res); //4

//______________
// const numbers = ['one', 'two', 'two', 'three', 'five', 'two', 'four'];
// const res = numbers.lastIndexOf('two', 4);

// console.log(res); // 2

//___________

// const numbers = ['one', 'two', 'two', 'three', 'five', 'two', 'four'];
// const res = numbers.indexOf('two', -2);

// console.log(res);

//find ():

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const res = words.find(function (word) {
//   return word.length > 6;
// });

// console.log(res); // exuberant

// findIndex():

// const arr = [1, 2, 3, 5];

// const res = arr.findIndex((el) => el % 2 == 0);
// console.log('index: ', res); //1

//findLastIndex()

// const arr = [1, 2, 3, 5, 2];

// const res = arr.findLastIndex((el) => el % 2 == 0);
// console.log('index: ', res); //4

//includes() - работает с примитивами

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const res = words.includes('exuberant');

// console.log('есть ли в массиве:', res); // true

// filter() - не мутирует исходный массив

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const res = words.filter((word) => word.length > 6);
// console.log('res: ', res); //  [ 'exuberant', 'destruction', 'present' ]

// sort()

//1) сортирует из коробки, без доп параметров

// const names = ['Alex', 'alex', 'Donald', 'Виктор'];
// const res = names.sort();

// console.log('res: ', res);// [ 'Alex', 'Donald', 'alex', 'Виктор' ]

// 2) работает мутабельно

// const names = ['Alex', 'alex', 'Donald', 'Виктор'];
// names.sort();

// console.log('names: ', names);// [ 'Alex', 'Donald', 'alex', 'Виктор' ]

// const numbers = [1000, 4, 5000, 6000, -50];

// function compareFunction(a, b) {
//   //по возрастанию
//   if (a > b) {
//     return 1; // меняем порядок
//   } else {
//     return -1; //не меняем
//   }
// }

// console.log(numbers.sort(compareFunction));// [ -50, 4, 1000, 5000, 6000 ]

// console.log(numbers.sort((a, b) => a - b));//[ -50, 4, 1000, 5000, 6000 ]
// console.log(numbers.sort((a, b) => b - a)); // [ 6000, 5000, 1000, 4, -50 ]

// const users = [
//   {
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex',
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'alex',
//     isStudent: true,
//   },
// ];
//
// console.log(users.sort((a, b) => a.name.localeCompare(b.name)));// с нижнего в верзний регистр
// console.log(users.sort((a, b) => b.name.localeCompare(a.name))); // с верзнего в  нижний регистр

// toSorted() - иммутабельно

// const months = ['Mar', 'Jan', 'Feb', 'Dec'];
// const sortedArray = months.toSorted();

// console.log('months', months);
// console.log('sortedArr', sortedArray);

// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log('sortedValues', sortedValues);
// console.log('values', values);

/////////_______________________

const users1 = [
  {
    id: 1,
    name: 'Bob',
    isStudent: true,
  },
  {
    id: 2,
    name: 'Alex',
    isStudent: true,
  },
  {
    id: 3,
    name: 'Ann',
    isStudent: true,
  },
  {
    id: 4,
    name: 'Donald',
    isStudent: false,
  },
];

// ["Bob", "alex", "ann", "donld"]
// const result = users1.map((el) => el.name);
// console.log('result', result);// [ 'Bob', 'Alex', 'Ann', 'Donald' ]

function newMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

const userNamesArr = newMap(users1, (user) => user.name);
console.log('map polifill: ', userNamesArr); // [ 'Bob', 'Alex', 'Ann', 'Donald' ]
