// ----1----
// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

// function Calculator() {
//   this.one = 0;
//   this.two = 0;

//   this.read = function () {
//     this.one = +prompt("Введіть перше значення", 0);
//     this.two = +prompt("Введіть друге значення", 0);
//   };

//   this.sum = function () {
//     return this.one + this.two;
//   };
//   this.mul = function () {
//     return this.one * this.two;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// console.log("Сума = " + calculator.sum());
// console.log("Добуток = " + calculator.mul());
