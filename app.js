import data from "./data.js";

// let newProduct = [];

// data.forEach((item) => {
//   if (item.price < 100) {
//     newProduct.push(item);
//   }
// });
// console.log(newProduct);

// 5 baho - (85 - 100)
// 4 baho - (70 - 85)
// 3 baho – (60 - 70)

// 1-masala
// let students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// function getNamesByGrade(students, grade) {
//   return students
//     .map((student) => {
//       if (student.percent > 84) {
//         return { ...student, grade: 5 };
//       } else if (student.percent > 70 && student.percent < 85) {
//         return { ...student, grade: 4 };
//       } else {
//         return { ...student, grade: 3 };
//       }
//     })
//     .filter((student) => {
//       return student.grade == grade;
//     })
//     .map((student) => {
//       return student.name;
//     });
// }

// console.log(getNamesByGrade(students, 3));

// 2-masala;
// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];

// let counter = animals.reduce(
//   (count, animal) => {
//     if (count[animal]) {
//       count[animal] += 1;
//     } else {
//       count[animal] = 1;
//     }

//     return count;
//   },

//   {}
// );

// console.log(counter);

// 3-masala
// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.map((number) => {
//   return number ** 2;
// });
// console.log(result);

// 4-masala;
// let numbers = [1, -4, 12, 0, -3, 29, -150];
// let result = numbers
//   .filter((num) => {
//     return num > 0;
//   })
//   .reduce((acc, num) => {
//     return (acc += num);
//   }, 0);
// console.log(result);

// 5-masala
// let words = "George Raymond Richard Martin";
// let result = words
//   .split(" ")
//   .map((word) => {
//     return word[0];
//   })
//   .join("");

// console.log(result);

// 6-masala;
