var obj = {
    car0: "Audi",
    speed1: "30kmph",
    car1: "Wagonar",
    speed: "10kmph"
}

//console.log(obj.car0);

for(const key in obj)
{
    if(`${key}` == "car1")
    {
        break;
    }
    console.log(`${key} ,${obj[key]}`);
}