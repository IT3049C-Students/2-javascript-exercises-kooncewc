/**
 * IndexOf: you should be able to determine the location of an item in an array
 * Example: 
 * arr = [1,2,3,5,6]
 * calling the function like 
 * indexoff(arr, 3); should return the index 2
 */
function indexOf(arr, item) {
  if (arr == null) return -1;
  length = arr.length;
  i = 0;
  while (i < length){
    if(arr[i] == item) 
    return i;
    else i=i+1;
  }

  return -1;
}

// Sum: you should be able to sum the items of an array
// Example: arr = [1,2,3]   =>  6
function sum(arr) {
  sums = 0;
for (let i =0; i < arr.length; i += 1){
sums += arr[i]

}
return sums;
  
}

// Filter: Should filter out all instances of a value from an array
// Example: filtering 2 out of [1,2,3,5,6,2,4,2] should return [1,3,5,6,4]
function filterOut(arr, item) {

  var i = arr.length

  while(i--)
  {
if (arr[i] === item){
arr.splice(arr.indexOf(item),1);

    }

  }
  return arr;
}
// Append: you should be able to add an item to the end of an array
function append(arr, item) {
arr.splice(arr.length,0, item);
  return arr;
}

// Truncate: you should be able to remove the last item of an array
// hint: pop, slice, splice would all work. Pay attention to the return value in the docs
function truncate(arr) {
arr.splice(arr.length - 1);
  
  return arr;
}

// Concat: you should be able to join together two arrays
function concat(arr1, arr2) {
  const result = arr1.concat(arr2);
  return result;
}

// Insert: you should be able to add an item at the specified index of an array
// hint: use splice and pay attention to the return value
function insert(arr, item, index) {
arr.splice(index,0,item);
  return arr;
}

// Square: you should be able to square each number in an array
// hint: use .map
// Example: [1,2,4,5] => [1,4,16,25]
function square(arr) {
  const res = arr.map(x => x ** 2);
  return res;
}

module.exports = {
  indexOf,
  sum,
  filterOut,
  append,
  truncate,
  concat,
  insert,
  square
};