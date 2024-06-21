//code 1 where the count can be updated from somewhere else also
var count=0;
document.querySelector("#a").addEventListener('click',function(){
    console.log("button Clicked",++count)
})


//code 2 where i can stop my variable to updated from outside
function addEvent(){
    var count=0;
document.querySelector("#a").addEventListener('click',function(){
    console.log("button Clicked",++count)
})
 
}
 addEvent();

