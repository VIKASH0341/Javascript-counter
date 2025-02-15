const decreaseBtn=document.getElementById("decreasebtn");
const intt=document.getElementById("increasebtn");
const resetBtn=document.getElementById("resetbtn");
const lablee=document.getElementById("countlable");

let count=0;
intt.onclick = function(){
    count++;
    lablee.textContent=count;

}

decreaseBtn.onclick = function(){
    count--;
    lablee.textContent=count;

}

resetBtn.onclick = function(){
    count=0;
    lablee.textContent=count;

}