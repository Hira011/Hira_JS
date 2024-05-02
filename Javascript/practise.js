// var x =5;



// function a()
// {
//      x =20;
// }
// a();
// console.log(x);

// function a()
// {

//     //console.log(b);

//      function c ()
//      {
//         console.log(b);
//      }
    
// }

// var b =10;
// a();

// {
//      var a =10;
// }

// console.log(a);

  // to check if the variables will change 
// var a =10;
// let b =5;
// const c=1;
// {
//      a=20;
//      //c=6;
//     // a++;
//      //b =6;
// }

// console.log(a);
//console.log(b);


//set time out and call back functions explained
setTimeout(function xyz(){
     console.log("hello");
},1000);

function x( y)
{
     console.log("bye");
    y();
}

function y()
{
     console.log("hi there");
}

x(function y()
{
     console.log("hi there");
});






