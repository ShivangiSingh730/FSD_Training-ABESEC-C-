console.log("start");
// const syncFun=( )=>{
//     for(let i=0;i<=9000000000;)}
const waitForSomeTime=(ms)=>{
    const start=Date.now();
    while(Date.now()-start < ms){
        // do nothing
    }
}
    const syncUsingTimer=()=>{
        waitForSomeTime(4000);
        console.log("Wait has been completed.");

    } 

const aysncUsingTimer=()=>{
    setTimeout(()=>
    {
        console.log("inside setTimeout")
    },4000)
}
console.log("start");
syncUsingTimer();
aysncUsingTimer();
console.log("end");