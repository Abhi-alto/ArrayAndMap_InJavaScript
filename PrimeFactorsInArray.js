let num=Math.floor(Math.random()*100);
let x=0;
let arr=[];

for (let i = 2; i <= Math.floor(num / 2); i++)            //factors are only from 2 to the half of the number
{
    while (num % i == 0)              
    {
        arr[x]=i;
        x++;
        num = Math.floor(num / i);                          //remove that particular factor by updating the number value
    }
}
if(num>1)
{
    arr[x]=num;
}
console.log("Prime factorization of " + num + " =>");
for(let m in arr)                           //printing all prime factors
{
    console.log(arr[m]);
}
