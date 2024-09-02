let friend = document.querySelector("#friend");
let h5 = document.querySelector("h5");
let check = 0;


friend.addEventListener("click", function(){
    if(check==0){
        h5.innerText = "Friends";
        h5.style.color = "green";
        friend.innerText = "Remove";
        friend.style.backgroundColor = "gray";
        check = 1;
    }
    else{
        h5.innerText = "Stanger";
        h5.style.color = "red";
        friend.innerText = "Add Friend";
        friend.style.backgroundColor = "cadetblue";
        check = 0;
    }
});
