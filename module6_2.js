
let x = prompt('Введите число от 0 до 1000');
x = +x;

if(typeof(x) == 'number' && x >= 0 && x <= 1000){ 
   
  if(x == 0 || x == 1) console.log('Число должно быть больше 1')
  else if(prostoe(x)) console.log(x + ' простое')
  else console.log(x + ' не простое');}

else{console.log('Данные не верны')}

function prostoe(num){
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}
