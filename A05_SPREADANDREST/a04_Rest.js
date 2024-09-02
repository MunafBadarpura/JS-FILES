//REST

function fun(...args){
    for(let i=0;i<args.length;i++){
        console.log("You Gave Us : ", args[i]);
    }
}

let arr = [1,2,3,4];
fun(...arr);

////////////////////////////

function fun2(...numbers){
    console.log(...numbers);
}

fun2(1,2,3,4);


///////////////////////

let total = 0;
function fun3(...num){
    for(let i=0;i<num.length;i++){
        total+=num[i];
    }
}

// fun3(1,2,3,4,5);
// let ee = [1,2,3,4,5];
// fun3(...ee)
console.log(total);