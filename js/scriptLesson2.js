//**********1 */
// Якщо змінна більше нуля - виведіть true, менше - false
// let x = 1;
// let x = 0;
// let x = -3;
// if (x > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//******2 */
//Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true

//let y = "test";
//let y = "qwerty";
// let y = "true";
// if (y === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// ***********3***
// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13

// let z = 1;
//let z = 10;
//let z = 13;

// if (z > 10) {
//   console.log(z - 5);
// } else if (z < 10)
// {
//   console.log(z + 5);
// }

// *********4*****
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const month = prompt("Введіть порядковий номер місяцю від 1 до 12");
// if (month > 0 && month < 2) {
//   alert("Січень");
// } else if (month > 1 && month < 3) {
//   alert("Лютий");
// } else if (month > 2 && month < 4) {
//   alert("Березень");
// } else if (month > 3 && month < 5) {
//   alert("Квітень");
// } else if (month > 4 && month < 6) {
//   alert("Травень");
// } else if (month > 5 && month < 7) {
//   alert("Червень");
// } else if (month > 6 && month < 8) {
//   alert("Липень");
// } else if (month > 7 && month < 9) {
//   alert("Серпень");
// } else if (month > 8 && month < 10) {
//   alert("Вересень");
// } else if (month > 9 && month < 11) {
//   alert("Жовтень");
// } else if (month > 10 && month < 12) {
//   alert("Листопад");
// } else if (month > 11 && month < 13) {
//   alert("Грудень");
// } else {
//   alert("Введіть правильну цифру");
// }

// *****5***
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let n = prompt("Введіть трехзначне число");
// if (n >= 100 && n < 1000) {
//   let sum = 0;

//   while (n > 0) {
//     let ld = n % 10;
//     sum += ld;
//     n = Math.floor(n / 10);
//   }
//   alert(sum);
// } else {
//   alert("УПС ЩОСЬ ПІШЛО НЕ ТАК!!!");
// }

// Другий варіант але тут частину рішення нагуглив
//
//  const n = prompt ("Введіть трехзначне число")
//  if ( n > 99 && n < 1000) {

//     function fSumAllDigits(n) {
//     return [...n.toString()].reduce((acc, el) => acc + parseInt(el), 0);
//     }
//     alert (fSumAllDigits(n))
//     }
//     else {
//         alert("УПС ЩОСЬ ПІШЛО НЕ ТАК!!!")
//             }
