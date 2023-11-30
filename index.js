const inputBox=document.getElementById("input-box");
const listcontainer =document.getElementById("list-container");

let tasks = [];

function addtask(){
    if(inputBox.value===''){
        alert("you must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML= inputBox.value;
        let span=document.createElement("span");
        span.innerHTML="X";
        li.appendChild(span);
        listcontainer.appendChild(li);
        inputBox.value="";
    }
   /* saveData();*/
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});
/*function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showdata(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showdata();*/