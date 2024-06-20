function x(){
    let a=7;
    function y(){
        console.log(a);
    }
    return y;
}
 var z=x(); //here x will assign function y and referance of variable a +?which is known as closure
 //console.log(z); //[Function: y]
 z();


 // function when returned like aboe they remember the lexical scope where it came from