const cart=["kurta", "jeans", "shoes"];


function isValidate()
{
     return true;
    //return false;
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
            orderid= 123465;
            resolve(orderid);

         }

    });

    return promise;
    
}

function makepayment(Orderdetails)
{
    const promise = new Promise(function xyz(resolve,reject)
    {
        
            
           if(Orderdetails!=0)
            resolve("Success");

         

    });

    return promise;
    
}

// pr.then(function (data){
//     console.log(data);


// });


// Now we will extend it to other functions like payment etc

// Q doubts in chaining as to how the parameters are being passed and how the functions inside. then 
//are being called specially from makepaymentonwards
const pr = createOrder(cart);
pr.then(function xyz(order)  // So if the pr (i.e the object returned from createOrder) is resolved..
                           // then whatever we pass inside resolve() that is taken and passed as a 
                        // parameter inside this callback function xyz()
{
   //console.log(order);  
   return order;
})

.then(function(OrderDetails)
{           // doubt here ..how to print up things over here ?
    
   makepayment(orderDetails);
   
})

.catch(function abc(err) // this is for handling error in graceful way i.e over the entire chain if we 
                         // get an error we can print its msg on UI.
{
  console.log(err.message);
})
