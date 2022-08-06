let arr=new Array();                     //Array declaration
let secSmallest=1000,secLargest=99;     //every three digit number is smaller than 1000 and every 3 digit no, is greater than 99
let smallest=1000;
let greatest=99;

for(let x=0;x<=9;x++)                       //getting the numbers
{
    let rand=Math.floor(Math.random()*1000);
    if(rand<100)
    {
        while(rand<100)
        {
            rand=Math.floor(Math.random()*1000);
        }
    }
    arr[x]=rand;
    if(arr[x]>=greatest)                    //getting the greatest number without sorting
    {
        greatest=arr[x];
    }
    if(arr[x]<=smallest)
    {
        smallest=arr[x];                    //getting the smallest number without sorting
    }
}

for(let x in arr)
{
    if(arr[x]<greatest&&arr[x]>=secLargest)                    //getting the second greatest number without sorting
    {
        secLargest=arr[x];
    }
    if(arr[x]>smallest&&arr[x]<=secSmallest)
    {
        secSmallest=arr[x];                    //getting the second smallest number without sorting
    }
}



for(let x in arr)                       //displaying all the numbers
{
    console.log(arr[x]);
}
console.log("smallest element is "+smallest);
console.log("largest element is "+greatest);
console.log("Second smallest element is "+secSmallest);
console.log("Second largest element is "+secLargest);