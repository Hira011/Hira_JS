
//const cart=["kurta", "jeans", "shoes"];
// function createOrder(arr,abc)
// {
//     abc();
//     console.log("hi");
// }

// function paymentInfo(OrderDetails,def)
// {
//     console.log(OrderDetails);
//     def();
    
// }

// function ShowSummary()
// {
//     //blank fn.
// }

// OrderDetails= "123456";

// createOrder(arr, function abc()
// {
    
// paymentInfo(OrderDetails,function xyz()
// {
//     console.log("hello");
//     ShowSummary();
    
// }
// );
// });

// So the above code has issues which is resolved by promises


// Consumer side

// Every Asynchronous operation returns a promise as an object

const cart=["kurta", "jeans", "shoes"];

function createOrder(arr)
{
    console.log(arr);
}


function paymentInfo(od)
{
    console.log(od);
}
const promise1 = createOrder(cart);

promise1.then(function()
{
   paymentInfo("12345");
});
 
    

//Other Example is fetch

// const url ="https://www.google.com/"
// const promise2= fetch(url);

// promise2.then(function xyz(data)
// {
//     console.log(data);
// });

// doubt -- how is xyz being called ?