// How to create promises (producer's end) and how to use them (on consumer's end)

const arr= ["hat", "kurti"," jeans"];

// so we want these 3 APIs or methods to be executed but if we execute them one after the another ..it 
// will be a synchronous operation.

//So instead we can use callbacks and do the above operations asynchronously
//but we can also enter in  a callback hell 



// createOrder(arr);

// paymentInfo(OrderDetails);

// ShowSummary();

///     


// createOrder(arr, function()
// {
// paymentInfo(OrderDetails);
// });

// So the following is an example of multiple callbacks .. i.e nested callbacks one inside another 
// Here we can achieve asynchronity
// There is an issue with this... 
// 1. callback hell ..// nested callbacks
// 2. inversion control ..we can lose control of the code



function createOrder(arr,abc)
{
    abc();
    console.log("hi");
}

function paymentInfo(OrderDetails,def)
{
    console.log(OrderDetails);
    def();
    
}

function ShowSummary()
{
    //blank fn.
}

OrderDetails= "123456";

createOrder(arr, function abc()
{
    
paymentInfo(OrderDetails,function xyz()
{
    console.log("hello");
    ShowSummary();
    
}
);
});

// The above written issues is resolved by promises.




