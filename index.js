const arrOfObjPeople = [
  { name: "Giorgio", age: 18, score: 100 },
  { name: "Mirko", age: 16, score: 50 },
  { name: "Silvio", age: 12, score: 1000 },
  { name: "Alberto", age: 62, score: 1 },
];

const numbers = [7, 55, 37, 14, 19, 30, 21, 60, 36];

//filter
const result = numbers.filter((value) => value >= 21);

const highestScore = arrOfObjPeople.filter((obj) => obj.score >= 100);

//find

const isMirko = arrOfObjPeople.find((obj) => obj.name === "Mirko0");

//map

// "Giorgio, 18"

const names = arrOfObjPeople.map((obj) => {
  return `${obj.name}, ${obj.age}`;
});

const container = document.getElementById("container");

const html = arrOfObjPeople
  //.filter((obj) => obj.score >= 100)
  .map(
    (obj) => ` <div>
        <h2>${obj.name}</h2>
        <h3>${obj.age}</h3>
        <h4>${obj.score}</h4>
    </div>`
  )
  .join("");

// const html = [];

arrOfObjPeople.forEach((obj) => {
  const temp = ` <div>
        <h2>${obj.name}</h2>
        <h3>${obj.age}</h3>
        <h4>${obj.score}</h4>
    </div>`;
  html.push(temp);
});

// const result = html.join("");

// const row = `<div class="row">${html}</div>`;

// container.innerHTML = row;

// .sort()

const letters = ["b", "P", "a", "d"];
letters.sort();

// letters.forEach((char) => {
//   console.log(char, char.charCodeAt(0));
// });

const nums = [5, 7, 3, 6];
//nums.sort();   // by default ASC

// nums.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   } else if (a > b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

//nums.sort((a, b) => (a < b ? 1 : -1));

/*

5-7 = -2 // a<b  so a goes AFTER b
7-3 = 5 // a>b so a goes AFTER b

*/

nums.sort((a, b) => a - b);
// console.log(nums[0]);
arrOfObjPeople.sort((a, b) => b.score - a.score);

//console.log(arrOfObjPeople);

//Sort from the longest to the shortest name

arrOfObjPeople.sort((a, b) => b.name.length - a.name.length);

// reduce

const numsToReduce = [6, 8, 3, 7];

// const sum = numsToReduce.reduce((acc, curr, i) => {
//   console.log("i: ", i);
//   console.log("acc: ", acc);
//   console.log("curr: ", curr);
//   console.log("-----------------------");

//   return acc + curr;
// }, 0);

const sum = numsToReduce.reduce((acc, curr) => acc + curr, 0);

console.log("final", sum);

// const arrOfObjPeople = [
//   { name: "Giorgio", age: 18, score: 100 },
//   { name: "Mirko", age: 16, score: 50 },
//   { name: "Silvio", age: 12, score: 1000 },
//   { name: "Alberto", age: 62, score: 1 },
// ];

const totalScore = arrOfObjPeople.reduce((acc, curr) => {
  return acc + curr.score;
}, 0);

console.log(totalScore);

const body = arrOfObjPeople.reduce(
  (acc, curr, i) => {
    console.log("i: ", i);
    console.log("acc: ", acc);
    console.log("curr: ", curr);
    console.log("-----------------------");
    return {
      names: acc.names.concat(curr.name),
      totalScore: acc.totalScore + curr.score,
    };
  },
  {
    names: [],
    totalScore: 0,
  }
);
// console.log(body);

// {
//     names:["Giorgio", "Mirko", "Silvio", "Alberto"],
//     totalScore: 1151

// }

//DEFAULT PARAMETERS

// const multiply = (a, b) => {
//   if (b) {
//     return a * b;
//   } else {
//     return a * 2;
//   }
// };

const multiply = (a, b = 2) => {
  return a * b;
};

const resultOfMult = multiply(3, 5);

const resultOfMult2 = multiply(3);

console.log(resultOfMult2);

// const fetchPics = (query = "flowers") => {
//   fetch("https://api.pexels.com/v1/search?query=" + query, {
//     headers: {
//       Authorization:
//         "Bearer 563492ad6f91700001000001cc9084643e8548af9214f6e07d9a0e77",
//     },
//   })
//     .then((resposne) => resposne.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// fetchPics("cars");

// Spread operator  ...

const sum2 = (...params) => {
  console.log(params);

  return params.reduce((acc, curr) => acc + curr, 0);
};

const sum3 = sum2(4, 6, 7, 2, 5, 5, 7);

//console.log(sum3);

// rest params

const withRestParams = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  console.log(rest);
};

withRestParams(5, 3, "Tetiana", 50);

// Destructuring

const student = {
  name: "Alberto",
  speciality: "student",

  location: { area: { country: "Spain" }, coordinates: ["2332", "2344"] },
};

// const spec = student.speciality;
const area = student.location.area;

const {
  name,
  speciality,
  surname = "test",
  location: { coordinates }, //nested destructuring

  location: { area: a }, // a renaming the distructured propertu
} = student;

console.log(a);

const arrToDestructure = ["green", "blue", "red"];

const [, , third] = arrToDestructure;

console.log(third);

//get all elements except for first one

const [first, ...rest] = arrToDestructure;

console.log(rest);

const arrOfObj = [
  {
    name: "Alberto",
    specialty: "sidekick",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
  {
    name: "John",
    specialty: "student",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
  {
    name: "Bill",
    specialty: "student",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
  {
    name: "Bill",
    specialty: "student",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
  {
    name: "Tom",
    specialty: "teacher",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
];

const [, second, ...rest] = arrOfObj;
const { name } = second;

console.log(name); //
console.log(second);
console.log(rest);

const arrToMerge1 = [5, 6, 7, 8];
const arrToMerge2 = [5, 6, 7, 8];
//const arrToMerge3 = arrToMerge1.concat(arrToMerge2);

const arrToMerge3 = [...arrToMerge2, "Diego", ...arrToMerge1, 4, 6, "Tetiana"];

console.log(arrToMerge3);

const student2 = {
  name: "John",
  specialty: "student",
  location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  password: "kjdfbkjdb",
};

const student3 = {
  name: "Tom",
  specialty: "user",
  planet: "Earth",
};

const student4 = { ...student3, ...student2, password: 0 };

console.log(student4);
