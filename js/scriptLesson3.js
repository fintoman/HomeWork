// ********* 1 *****
// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let frutsNew = fruts.map((fruts) => fruts.name);

// console.log(frutsNew);

// ********* 2 *****
// for (let i = 1; i < 11; i++) {
//   if (i % 2 === 1) continue;
//   console.log(i);
// }

// ********* 3 *****
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }

// let i = 0;
// while (i < 5) {
//   i++;
//   console.log(`цифра ${i}!`);
// }

// ********* 4 *****

//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let m;

// while (true) {
//   m = prompt("Введіть число більше 100");
//   if (m === null || m === "") {
//     alert("Ви відмінили введення або ввели порожній рядок.");
//     break;
//   }
//   m = +m;
//   if (m > 100) {
//     alert(`Ви ввели число: ${m}`);
//     break;
//   } else {
//     alert("Введіть число більше 100");
//   }
// }

// -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// let aa = girls.map((item) => item.age);
// let ages = aa.reduce((summ, item) => summ + item) / girls.length;
// console.log(ages);
