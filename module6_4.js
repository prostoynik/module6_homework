
let x = prompt('������� ������ �����'); 
let y = prompt('������� ������ �����');
x = +x;
y = +y;
if (typeof(x) == 'number' && x === x && typeof(y) == 'number' && y === y){
  
  if (x >= y) console.log ('������ ����� ������ ���� ������, ��� ������')
  else{
    const intervalId = setInterval(function (a, b) {
      console.log(x++);
      if(x > y) clearInterval(intervalId)
     }, 1000, x,  y); 
  } 
}