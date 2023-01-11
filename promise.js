// async function func1(num1){
//     // return new Promise(function(resolve,reject)
//     {
//         if(num1 == 0)
//         {
//            // console.log("Resolved");
//             //resolve(num1);
//             return 1;
//         }
//         else{
//            // console.log("Rejected");
//             //reject("rejecetd");
//         }
//     // })
//     let cn = await 
// }
 


// func1(1).then(function(value){console.log("Promise done: " + value) }).catch(function(error){console.log("Sorry : " + error)})
// func1(0).then(function(value){console.log("Promise done: " + value) }).catch(function(error){console.log("Sorry : " + error)})
// func1(0).then(function(value){console.log("Promise done: " + value) }).catch(function(error){console.log("Sorry : " + error)})
// func1(0).then(function(value){console.log("Promise done: " + value) }).catch(function(error){console.log("Sorry : " + error)})
// func1(0).then(function(value){console.log("Promise done: " + value) }).catch(function(error){console.log("Sorry : " + error)})
// func1(0).then(function(value){console.log("Promise done: " + value) }).catch(function(error){console.log("Sorry : " + error)})
// func1(0).then(function(value){console.log("Promise done: " + value) }).catch(function(error){console.log("Sorry : " + error)})
// func1(0).then(function(value){console.log("Promise done: " + value) }).catch(function(error){console.log("Sorry : " + error)})
// func1(0).then(function(value){console.log("Promise done: " + value) }).catch(function(error){console.log("Sorry : " + error)})
// func1(0).then(function(value){console.log("Promise done: " + value) }).catch(function(error){console.log("Sorry : " + error)})
// func1(0).then(function(value){console.log("Promise done: " + value) }).catch(function(error){console.log("Sorry : " + error)})
// func1(0).then(function(value){console.log("Promise done: " + value) }).catch(function(error){console.log("Sorry : " + error)})
// func1(0).then(function(value){console.log("Promise done: " + value) }).catch(function(error){console.log("Sorry : " + error)}) 

// console.log("kk");
async function myDisplay(num1) {
    let myPromise = new Promise(function(resolve) {
        if(num1)
        {
      resolve(num1);
        }
    });
    let cc = await myPromise;
    console.log(cc);
    console.log("kk");
    console.log("a");
console.log("uu");
console.log("ii");
  }
// function fun(){
//     try{
//     let res = myDisplay(10);
//     return res;
//     }
//     catch(ee)
//     {
//         console.log(ee);
//     }
// }
console.log(myDisplay(1));
 