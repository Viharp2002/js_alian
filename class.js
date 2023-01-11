class car{
    constructor(name,speed)
    {
        this.name = name;
        this.speed = speed;
    }
    age()
    {
        return (this.speed - 100); 
    }
}
let car1 = new car("Wagonar",130);
let car2 = new car("Alto",120);

console.log(car1.age());
console.log(car2.age());