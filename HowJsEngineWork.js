/*setTimeout(function(){
    console.log("hello" );
  }, 1000);
*/

/*
1 >> Setting the Timer:
When you call setTimeout, the JavaScript runtime registers the callback function (function(){ console.log("hello"); }) and 
sets a timer for 1000 milliseconds.

2>> Web APIs and Timer:
The callback function is handed over to the Web API (or the browser's timer API). The timer starts counting down for 1000 milliseconds.

3>>Event Loop:
While the timer is counting down, the JavaScript engine can continue executing other code. The event loop is responsible for continuously checking if the call stack is empty 
and if there are any callback functions ready to be executed in the task queue (also known as the callback queue).

4>> Timer Completion:
After 1000 milliseconds, the timer expires. The Web API then moves the callback function to the task queue.

5>> Checking the Call Stack:
The event loop constantly checks if the call stack is empty. If it is empty (i.e., no other synchronous code is being executed), 
the event loop will pick up the first task from the task queue.

6>>Executing the Callback:
The callback function is taken from the task queue and pushed onto the call stack. The JavaScript engine then executes the callback function.

7>>





*/

  
