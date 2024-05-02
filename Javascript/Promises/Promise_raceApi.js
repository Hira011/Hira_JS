//.race() and .any() APIS demo 
// all notes in copy



const p1= new Promise(function (resolve, reject)
{
    setTimeout(function abc()
    {
       resolve("p1 passed");
    }, 3000);
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
    }, 1000);
});


// Promise.race([p1,p2,p3])
// .then(function (resolve)
// {
//    console.log(resolve);
// })
// .catch(function(error)
// {
//     console.log(error.message);
// });

Promise.any([p1,p2,p3])
.then(function (resolve)
{
   console.log(resolve);
})
.catch(function(error)
{
    console.log(error.message);
});