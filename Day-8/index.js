const printMessage = (msg)=>{
    console.log(msg);
}
const wait = (msg,time)=>{
    return new Promise((resolve)=>{
    setTimeout(()=>{
        printMessage(msg);
},time)
})
}
const bookTicket = ()=>{
    printMessage("welcome")
    waitFun("login has been successful",2000);
    waitFun("seat has been successfullyl",5000);
    waitFun("payment has been successful",4000);
    waitFun("ticket booked successfully",2000);
    waitFun("thankyou",1000);
}