// This is about 4 APIS .demos

// so we will create promise dummies

const p1= new Promise(function (resolve, reject)
{
    setTimeout(function abc()
    {
       resolve("p1 passed");
    }, 1000);
});

const p2= new Promise(function (resolve, reject)
{
    setTimeout(function def()
    {
       resolve("p2 passed");
    }, 2000);
});

const p3 = new Promise(function (resolve, reject)
{
    setTimeout(function xyz()
    {
        //resolve("p2 passed");
        const err= new Error("p3 has failed");
      reject(err);
    }, 3000);
});






Promise.all([p1,p2,p3])
.then(function (resolve)
{
   console.log(resolve);
})
.catch(function(error)
{
    console.log(error.message);
});



// we dont need to return any promise ..as soon as we hit the .all() it should return an array or 
// the failed one's value.
// We can also store the Promise.all in a const variable say p and then use the data of p to get the same 
// info i.e passing data in the call back function and printing it as shown below-

//const p=Promise.all([p1,p2,p3]);
// p.then(function (data)
// {
//    console.log(data);
// }
//);


// similarly we can write for promise for .allSettled 

Promise.allSettled([p1,p2,p3])
.then(function(resolve)
{
   console.log(resolve);
})
// .catch(function(error)
// {
//     console.log(error.message);
// });         // here catch is not really required as anyway this allSettled() gives an array even if 
              // we get 1 error and it doesnt go to the catch 



