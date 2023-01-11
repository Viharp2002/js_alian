const arr = new Array("A","B","c","d","e");

//for
//forEach
//for..of
//while
//do...while

arr.forEach(element => {
    console.log(element);
});

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

for(element of arr)
{
    console.log(element)
}

let i=0;
while(i<arr.length)
{
    console.log(arr[i]);
    i++;
}

let j=0;
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length);
