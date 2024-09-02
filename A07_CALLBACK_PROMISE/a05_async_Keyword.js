async function fun(){
    // throw ("Error Thow") 
    return "Hello";  //return promice
}

fun()
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})