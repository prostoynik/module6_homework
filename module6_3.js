
let num = prompt('������� ������ �����');
num = +num;
if (typeof(num) == 'number' && num === num) {
  result = first(num);
  console.log(result)
}

function first(a){
let nem = prompt('������� ������ �����');
nem = +nem;
if (typeof(nem) == 'number' && nem === nem)
  return second(a, nem)
}

function second(a, b){
  return a + b;
}