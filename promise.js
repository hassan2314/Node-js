let a=10;
let b=0;
let lateData=new Promise((res,rej)=>{
    setTimeout(() => {
        res(40);
    }, 2000);
})
lateData.then((b)=>{

    console.log(a+b);
})
