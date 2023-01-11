display = (sum)=>{
  console.log(sum);   
}

function myfun(num1,num2,display) {
    let res = num1 + num2;
    display(res);
}

(myfun(5,5,display));