// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//   name: "Anton",
//   spec: "Engineer",
//   bal: "99",
//   epsent: "0",
//   showinfo: function () {
//     console.log(
//       "name " +
//         this.name +
//         " spec " +
//         this.spec +
//         " bal " +
//         this.bal +
//         " epsent " +
//         this.epsent
//     );
//   },
// };

// studentTwo = {
//   name: "Anna",
//   spec: "Dev",
//   bal: "88",
//   epsent: "5",
// };

// studentFree = {
//   name: "Vova",
//   spec: "Reserch",
//   bal: "90",
//   epsent: "4",
// };

// studentFor = {
//   name: "Lesya",
//   spec: "HR",
//   bal: "93",
//   epsent: "4",
// };

// student.showinfo();
// student.showinfo.bind(studentTwo)();
// student.showinfo.call(studentFree);
// student.showinfo.apply(studentFor);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const inf = {
//   showitems() {
//     console.log("infa:", this.items);
//   },
// };

// const html = {
//   items:
//     "HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки»)",
// };

// const css = {
//   items: "CSS (англ. Cascading Style Sheets, укр. Каскадні таблиці стилів)",
// };

// inf.showitems.bind(html)();

// document
//   .querySelector(`#htmll`)
//   .addEventListener(`click`, inf.showitems.bind(html));

// inf.showitems.bind(css)();

// document
//   .querySelector(`#csss`)
//   .addEventListener(`click`, inf.showitems.bind(css));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// function shop(fruit) {
//   const totalCost = Math.round(fruit.cost * fruit.quantity);
//   console.log(`${fruit.name}: ${totalCost} грн вартість`);
// }

// const sumFrut = {
//   name: "banana",
//   cost: 30,
//   quantity: 4.5,
// };

// const cherry = {
//   name: "cherry",
//   cost: 1,
//   quantity: 1.3,
// };

// const jrange = {
//   name: "jrange",
//   cost: 89,
//   quantity: 3.4,
// };

// shop(sumFrut);
// shop(cherry);
// shop(jrange);
