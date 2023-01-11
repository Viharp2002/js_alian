let map = new Map();
map.set("name","vihar");
map.set("name1","Saumya");
map.set("name2","Rohan");
map.set("name3","Diya");

for(let [key,value] of map){
    console.log("Name of "+key+" is "+value);
}