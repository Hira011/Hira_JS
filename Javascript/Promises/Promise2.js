// This will be about promises on the producer side

// So the promise will have 2 things 1.resolve and 2.reject

const cart=["kurta", "jeans", "shoes"];


function isValidate()
{
    // return true;
    return false;
}

function createOrder(cart)
{
    const promise = new Promise(function xyz(resolve,reject)
    {
         if(isValidate()==false)
         {
            //console.log("hello")
            const err = new Error("not found");
            reject(err);
         }

         else{
            
            //console.log(isValidate());
            orderid= "123465";
            resolve(orderid);

         }

    });

    return promise;
    
}
const pr = createOrder(cart);
// pr.then(function (data){
//     console.log(data);


// });

pr.then(function xyz(order)
{
   console.log(order);
})
.catch(function abc(err)
{
  console.log(err.message);
})
