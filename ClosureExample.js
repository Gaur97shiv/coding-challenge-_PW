function x(){
    for(var i=0;i<=5;i++){
        setTimeout(function (){
            console.log(i)
        },i*1000)
    }
    console.log("helo");
}
x();

//Timer and the Event Loop: JavaScript is single-threaded, meaning it can only do one thing at a time. 
//However, it can manage asynchronous tasks using the event loop. When setTimeout is called, 
//the browser sets up a timer in the Web APIs environment (part of the browser's runtime environment, outside of the JavaScript engine). 
//This timer counts down the specified delay. 


/* use of setTimeOut 

we avoid the blocking of main thread means that we do not want any task which take 10 min to execute to come and execute in call stack instead we can put that 
time taking task into the setTimeOut so the setTimeout will put that function inside the setTimeout somewhere else with the timer and wont block the main threD
and once the timer got expired then it will take help of callStack to execute it */
