/*

Question 1

Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.

*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const itemsDouble = itemsObject.map((element) => ({
  quantity: element.quantity * 2,
  element: element.price * 2,
}));

const itemsFilter = itemsObject.filter((element) => {
  return element.quantity > 2 && element.price > 300;
});

const initialValue = 0;
const itemsReduce = itemsObject.reduce((accumulator, element) => {
  return accumulator + element.quantity * element.price;
}, initialValue);

console.log(itemsDouble);
console.log(itemsFilter);
console.log(itemsReduce);

/*
  
  Question 2
  
  Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
  
  */

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

const process = string
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9\s]/g, " ")
  .replace(/\s+/g, " ");

console.log(process);
console.log(expectedReturnString === process);

/*

  
  Question 3
  
  Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
  
  */

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

function mergeArrays(a, b) {
  const result = [];
  a.forEach((element) => {
    result.push({ uuid: element.uuid, role: null, name: element.name });
  });

  b.forEach((element) => {
    const index = result.findIndex((ele) => {
      return element.uuid == ele.uuid;
    });
    if (index != -1) {
      result[index].role = element.role;
    } else {
      result.push({ uuid: element.uuid, role: element.role, name: null });
    }
  });

  result.sort(function (a, b) {
    return a.uuid - b.uuid;
  });
  return result;
}

console.log(mergeArrays(first, second));
