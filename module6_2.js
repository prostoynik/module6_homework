
let x = prompt('������� ����� �� 0 �� 1000');
x = +x;

if(typeof(x) == 'number' && x >= 0 && x <= 1000){ 
   
  if(x == 0 || x == 1) console.log('����� ������ ���� ������ 1')
  else if(prostoe(x)) console.log(x + ' �������')
  else console.log(x + ' �� �������');}

else{console.log('������ �� �����')}

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
