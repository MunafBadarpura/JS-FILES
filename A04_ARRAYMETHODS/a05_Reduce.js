let arr = [1,2,3,4];

let finalArr = arr.reduce((res, ele) => res+ele);

console.log(finalArr);

//Exlaination
// arr.reduce(res, ele) = (0, 1) => 1
// arr.reduce(res, ele) = (1, 2) => 3
// arr.reduce(res, ele) = (3, 3) => 6
// arr.reduce(res, ele) = (6, 4) => 10
// So The ANS Is "10"


let array = [5,2,7,8,9,1];

let maxVal = -1;
let maxNum = array.reduce((max, ele) => {
    if(ele>maxVal) maxVal = ele;
    return maxVal;
})

console.log(maxNum);