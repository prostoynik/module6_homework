
let num = prompt('‚ведите первое число');
num = +num;
if (typeof(num) == 'number' && num === num) {
  result = first(num);
  console.log(result)
}

function first(a){
let nem = prompt('‚ведите второе число');
nem = +nem;
if (typeof(nem) == 'number' && nem === nem)
  return second(a, nem)
}

function second(a, b){
  return a + b;
}