
let x = prompt('������� ������ �����'); 
let y = prompt('������� ������ �����');
x = +x;
y = +y;
if (typeof(x) == 'number' && x === x && typeof(y) == 'number' && y === y){

  const res = (x, y) => {
    step = 1;
    for(i = 1; i<= y; i++){
      step = step*x;
    }
    return step;   
  };
    
 console.log(res(x, y));
 }
else console.log('������ ������� �����������');
