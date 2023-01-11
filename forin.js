var obj = {
    car0: "Audi",
    speed1: "30kmph",
    car1: "Wagonar",
    speed: "10kmph"
}
const arr = [1,2,3,4];
//console.log(obj.car0);

for(const key in arr)
{
    console.log(`${key} ,${arr[key]}`);
}