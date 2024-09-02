try{
    let x = undefined;
    console.log(x[0]);
    console.log("This Statement Is After Error But this Not run");
}catch{
    console.log("Catch Statement Is Executed ");
}finally{
    console.log("Finally Statement Is Executed ");
}

//error finding
// try{
//     let x = undefined;
//     console.log(x[0]);
//     console.log("This Statement Is After Error But this Not run");
// }catch (err){
//     console.log("Catch Statement Is Executed ",err);
// }finally{
//     console.log("Finally Statement Is Executed ");
// }