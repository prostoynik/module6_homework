
let x = prompt('‚ведите первое число'); 
let y = prompt('‚ведите второе число');
x = +x;
y = +y;
if (typeof(x) == 'number' && x === x && typeof(y) == 'number' && y === y){
  
  if (x >= y) console.log ('Џервое число должно быть меньше, чем второе')
  else{
    const intervalId = setInterval(function (a, b) {
      console.log(x++);
      if(x > y) clearInterval(intervalId)
     }, 1000, x,  y); 
  } 
}