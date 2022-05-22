/**
 * IndexOf: you should be able to determine the location of an item in an array
 * Example: 
 * arr = [1,2,3,5,6]
 * calling the function like 
 * indexoff(arr, 3); should return the index 2
 */
function indexOf(arr, item) {
  index = findIndex(arr,item)
  return index ;
}

// Sum: you should be able to sum the items of an array
// Example: arr = [1,2,3]   =>  6
function sum(arr) {
  var sum = 0;
  for(var i in arr){
    sum += arr[i]
  
  }
  return ;
}

// Filter: Should filter out all instances of a value from an array
// Example: filtering 2 out of [1,2,3,5,6,2,4,2] should return [1,3,5,6,4]
function filterOut(arr, item) {

  var filtered = arr.filter(function(arr){
return arr != 2;

  });
  arr.filter(item == 2)

  
  return ;
}

// Append: you should be able to add an item to the end of an array
function append(arr, item) {
arr.push(arr,item);
  return ;
}

// Truncate: you should be able to remove the last item of an array
// hint: pop, slice, splice would all work. Pay attention to the return value in the docs
function truncate(arr) {
  var popped = arr.pop
  
  return poppped;
}

// Concat: you should be able to join together two arrays
function concat(arr1, arr2) {
  const result = arr1.contact(arr2);
  return result;
}

// Insert: you should be able to add an item at the specified index of an array
// hint: use splice and pay attention to the return value
function insert(arr, item, index) {
arr.splice(index,0,item);
  return ;
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