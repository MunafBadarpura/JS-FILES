function outer(){
    let a = 10;
    function inner(){
        console.log(a);  //We can access paranet valiables
    }
    inner();
}
outer();


function outer2(){
    let a = 10;
    function inner2(){
        console.log(a);  //We can access paranet valiables
    }
    return inner2;
}

let inner2Fun = outer2();
inner2Fun();
console.log(typeof inner2Fun);