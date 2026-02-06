function myFunction() {
    console.log("Starting a task......");

    // Simulate a long-running task (non-blocking) - useing setTimeout
   setTimeout(() => {
     let sum = 0;
    for( let  i = 0; i < 1000000000; i++) {
        sum += i;
    }

    console.log("Task Finished!");
    console.log("Result: ", sum);
   }, 0);       // The 0 dealy makes it Asynchronous
}

console.log("Before the function call");
myFunction();
console.log("After the function call");