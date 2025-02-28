let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGmBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //PlayerX, Player0

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText ="ABCD";
        if(turn0) {
            box.innerText = "O";
            turn0  = false;
        }else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disablebox = () => {
    for(let box of boxes){
        box.disabled = true ;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false ;
        box.innerText = "";
    }
};

const showWinner = () => {
    msg.innerText = `Kudos ! ... `;
    msgContainer.classList.remove("hide");
    disablebox();
};

const checkWinner = () => {
    for(pattern of winPattern) {
    //     console.log(pattern[0],pattern[1],pattern[2]);
    //     console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
    
    let postn1Val = boxes[pattern[0]].innerText;
    let postn2Val = boxes[pattern[1]].innerText; 
    let postn3Val = boxes[pattern[2]].innerText;

    if(postn1Val != "" && postn2Val != "" && postn3Val != ""){
        if(postn1Val === postn2Val && postn2Val === postn3Val) {
            console.log("winner",postn1Val);
            
            showWinner();

        }
    }
    }

    
};
newGmBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

