/*var fun=`To perform specific task`;

function msg(name , project){
    if(project === "React Js"){
        console.log(`Dear ${name} , your project is succesfully completed`)

    }else{
        console.log(`der ${name } , deadlin is soon teem meet up the requirements`)
    }
}

msg("Gaurav "," React Js");

//*functional expression-a function passed as a value to a variable(first class /first citizen function)
var count=4;
var like=function likecount(){
    if(count<=5){
        count++;

    }
    
    console.log(count)
}
like()

// *Arrow function
var sum =(a,b) =>{
    return a+b;
}

sum(5,5)

// * immediate invoke functional expression

// !one time usage of the function

(function otp(){
    console.log("45361")
})
();*/


// !nested function

// function accountholder(){
//     var acch_name="pooja"
//     var balnce = 90000;
//     console.log(acch_name);
//     console.log(balnce);

//     function fixeddeposit(){
//         var deposit=15000;
//         console.log(deposit);
//         console.log(`${balnce+deposit}`)
//         // ^parent function data is used by closure object,unidirectional flow
//         // ^child function will, have closure object address
//     }


//     return fixeddeposit(); //  ~checks the function callin line 59 and then gets executed
// }
// accountholder()(); //*Js curring


// !Higher order function- performs generic /multiple task,it accepts a function in its parameter
//!hof calls the call back function
// ^call back function- afunction which is passed as argument to other function 


// function claculate(a,b,task){
//    var res = task(a,b);
//    return res;

// }
//  let add=claculate(4,5,(a,b)=>{ return a+b});
// let subt =claculate(4,5,(a,b)=>{ return a-b});
// console.log(add);
// console.log(subt);


//!generator function

// function* eid(){
//     for(i=100;i<=115;i++){
//         yield i;
//     }

// }
// var clarivateid =eid();
// var e1="gaurav";
// console.log(e1)
// console.log(clarivateid.next().value);
// var e2="smrithi"
// console.log(e2)
// console.log(clarivateid.next().value);











