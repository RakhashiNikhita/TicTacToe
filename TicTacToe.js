let boxes=document.querySelectorAll(".box");
let message=document.querySelector("p");
let resetgame=document.querySelector("#resetgame");
let newgame=document.querySelector("#newgame");

let turnO=true;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const enable=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}

const disable=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
    return true;
}

const newG=()=>{
    enable();
    turnO=true;
    boxes.forEach((box)=>{
        box.innerText="";
    })
    message.innerText="";
}

function winner(){
    winpatterns.forEach((pattern)=>{
        if(boxes[pattern[0]].innerText!=="" && boxes[pattern[1]].innerText!=="" && boxes[pattern[2]].innerText!==""){
            if(boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText){
                message.innerText="Winner is "+ boxes[pattern[0]].innerText;
                disable();
            }
        }
    })
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        winner();
    })
})

newgame.addEventListener("click",newG);