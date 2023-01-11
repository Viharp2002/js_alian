let a = 4;
let b = 0;

try{
    if(b == 0)
    {
        throw err;
    }
    console.log(a/b);
}
catch(err)
{
    console.log(err.name);
}
finally{
    console.log("Success");
}