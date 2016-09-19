/**
 * E26
 * Created by Jonkiote on 9/18/2016.
 */
//console.log('Hello world!');
let myArray = [1,2,3,4,5,6,7,8];

function sumFor(list){
  let sum = 0;
  for(let i = 0; i<list.length;i++){
  sum += list[i];
  }
  return sum;
}
console.log(sumFor(myArray));

function sumWhile(list){
  let sum = 0;
  let i = 0;
  while(i<list.length){
    sum += list[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(myArray));

function sumRecursion(list) {
  if (list.length === 1) {
    return list[0];
  }
  else {
    return list.pop() + sumRecursion(list);
  }
}
console.log(sumRecursion(myArray));

function sumTheSimpleWay(list){
let sum =  _.reduce(list, function summer(memo, num){ return memo + num; }, 0);
  return sum;
}

console.log(sumTheSimpleWay(myArray));