let arr=[];
let i=0;
for(let x=1;x<=100;x++)
{
    if((x%10)==Math.floor(x/10))
    {
        arr[i]=x;
        i++;
    }
}

for(let m in arr)
{
    console.log(arr[m]);
}