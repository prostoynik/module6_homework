
let myArr = [1, 2, 3, 4, 5, 0, 'string'];
let itogi = [0, 0, 0];

myArr.forEach(function(item, index, array) {
  podschet(item); 
});

console.log('четных - ' + itogi[0]);
console.log('нечетных - ' + itogi[1]);
console.log('нулей - ' + itogi[2]);

function podschet(a){
if (a % 2 == 0 && typeof(a) == 'number' && a !=0) {
  itogi[0]++;
}
if (a % 2 != 0 && typeof(a) == 'number' && a !=0) {
  itogi[1]++;
}  
if (typeof(a) == 'number' && a ==0) {
  itogi[2]++;
}}  