const bookTicket = ()=>{
    printMessage("welcome")
setTimeout(()=>{
    printMessage("login has been successful");
    setTimeout(()=>{
    printMessage("seat has been successfullyl");
    setTimeout(()=>{
    printMessage("payment has been successful");
    setTimeout(()=>{
    printMessage("ticket booked successfully");
    printMessage("thankyou");
    },2000)
},4000)
},3000)
},2000)
}