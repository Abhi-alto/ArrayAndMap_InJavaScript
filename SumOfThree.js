let sum=0;
let arr=[];
for(let i=0;i<=2;i++)
{
    arr[i]=Math.floor(Math.random()*100);
    sum=sum+arr[i];
}
if(sum==0)
{
    console.log("Sum = 0");
}
else
{
    console.log("Sum not equal to 0");
}