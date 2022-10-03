const button = document.getElementById("listToggle");
const list = document.getElementById("listState");
button.addEventListener("click", listToggle);

let state = 0;
list.style.display = "none";

function listToggle(){ 
    state++;
    console.log(state)
    if(state==0){
        list.style.display = "none";
    }

    if(state==1){
        list.style.display = "block";
    }

    if(state==2){
        state=0;
        list.style.display = "none";
    }
    
}