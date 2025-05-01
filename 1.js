let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true //playerX,playerY
let moveCount = 0;
let gameOver = false;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
    [3,4,5],
];

const resetGame = () => {
    turnO = true;
    moveCount = 0;
    gameOver = false;
    enableBoxes();
    msgContainer.classList.add("hide");
};



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O"
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        // turnO = !turnO;
        moveCount++;
        checkWinner();

        
    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText  = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `🎉 Congratulations, Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();
    gameOver = true;
};
const showDraw = () => {
    msg.innerText = `🤝 It's a Draw!`;
    msgContainer.classList.remove("hide");
  };

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;



        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return;
            }
        }
    }
    //draw condition
    if (moveCount === 9 && !gameOver) {
        showDraw();
      }
    
};


newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame)