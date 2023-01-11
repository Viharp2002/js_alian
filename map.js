// var map = new Map();

// map.set("MANGO",20);
// map.set("ORANGE",40);
// map.set("GRAPS",60);
// map.set("BANANA",80);
// console.log(map.get("MANGO"));

// map.forEach(function(element){
//    console.log(element)
// })

// map.delete("GRAPS");
// map.forEach(function(element){
//     console.log(element)
//  })

const maps = [1,2,3,4,5];

const myfunc1 = (maps)=>{
    return (maps*2);
 }

var newArr = maps.map(myfunc1);
console.log(newArr)
