
function Area(rad)
{
    return Math.PI(rad*rad);
}

function Circum(rad)
{
    return 2*Math.PI*(rad);
}

function Diameter(rad)
{
    return 2*rad;
}


const arr= [3,10,5,6,2];

//const output=arr.map(Diameter);

// so basically arr.map works on array and on each of its elements . According to the function passed as parameter
// i.e diameter ..it performs that on each element of the arr and puts in a new arr which is output


const output=arr.map(function Diameter(rad)
{
    return 2*rad;
});
console.log(output);






