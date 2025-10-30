const waitFortime = (sec)=>{
    setTimeout(()=>{
        console.log("wait has been completed");

    },sec)
    const start =nDate.now();
    while(Date.now() - start < 5000);
}
const syncFun = ()=>{
    waitForTime(5000);
    console.log("Sync function executed after 5 seconds");
}
console.log("before the ivocation of sync function");
syncFun();
 