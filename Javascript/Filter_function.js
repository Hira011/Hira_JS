const arr= [10,21,30,54,9];

// suppose we wish to select all the odd ones and put them in an array and return 

function eve(ele)
{
    if(ele%2==0)
     return ele;


}

function odd(ele)
{

    if(ele%2!=0)
     return ele;

}

//const output = arr.filter(eve);
//const output = arr.filter(odd);

// we can also use it in this fashion..this will help us to not iterate the array agina and again.
const output = arr.filter(function eve(ele)
{
    if(ele%2==0)
     return ele;
});
console.log(output);