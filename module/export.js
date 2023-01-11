// const name = "Vihar";
// const age = 20;

// export {name,age};

// const myfun = ()=> {
//      const name = "vihar";
//      const age = 12;
//      return "Name is " + name + " and age is " + age;
// }
// export default myfun; 

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
export {car};