let arr=new Array();                     //Array declaration
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
}
arr=arr.sort();
for(let x in arr)
{
    console.log(arr[x]);
}
console.log("Second largest element is "+arr[8]);
console.log("second smallest element is "+arr[1]);