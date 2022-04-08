let companies = [
  {
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2003,
    author: "vishal singh",
  },
  {
    name: "Company two",
    start: 1982,
    end: 2006,
    category: "Retail",
    author: "vicky kaushal",
  },
  {
    name: "Company three",
    category: "Auto",
    start: 1986,
    end: 2004,
    author: "vicky kaushal",
  },
  {
    name: "Company four",
    category: "Retail",
    start: 1988,
    end: 2010,
    author: "vicky kaushal",
  },
  { name: "Company five", category: "Technology", start: 1991, end: 2011 },
  { name: "Company six", category: "Finance", start: 1995, end: 2013 },
  { name: "Company seven", category: "Auto", start: 1999, end: 2006 },
  { name: "Company eight", category: "Retail", start: 1994, end: 2003 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < ages.length; i++) {
//   console.log(ages[i]);
// }
// companies.forEach((details) => {
//   console.log(details.name, details.category);
// });

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter((age) => {
//   if (age > 21) {
//     return true;
//   }
// });

const old = ages.push(21);
const canDrink = ages.filter((age) => age > 20);
console.log(canDrink);

const retailCompanies = companies.filter(function (company) {
  if (company.start > 1980 && company.end < 2005) {
    return true;
  }
});
console.log(retailCompanies);
const maptest = companies.map(function (company) {
  return `${company.name} [${company.start} -${company.end}]`;
});
console.log(maptest);

const agessquare = ages.map((age) => age * 2);
console.log(agessquare);
