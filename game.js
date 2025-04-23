let us =0;
let cs = 0;

const choices = document.querySelectorAll(".c");
const msg = document.querySelector("#p");
const uscore = document.querySelector("#ms");
const cscore = document.querySelector("#cs");

const gencompchoice =() =>{
    const o = ["rock" , "paper","sissor"];
   const index =  Math.floor(Math.random() * 3);
    return o[index];
}

const drawGame = () =>{
    console.log("match draw");
    msg.innerHTML = "match draw";
}

const showWinner = (userWin,userchoice,compchoice) =>{
    if(userWin){
        us ++;
        uscore.innerHTML = us;
        console.log("you win");
        msg.innerHTML =` you win your ${userchoice} beats ${compchoice}`;
        
        
    }
    else{
        cs++;
        cscore.innerHTML = cs;
        
        console.log("you lose");
        msg.innerHTML = "you lose";
        msg.innerHTML =` you lose  ${compchoice} beats your ${userchoice}`;

    }
}

const playgame = ((userchoice) => {
    console.log(userchoice, "your choice");
    const compchoice = gencompchoice();
    console.log(compchoice, "computer choice");

   
    if (userchoice === compchoice) {
        //Draw Game
        drawGame();
      } else {
        let userWin = true;
        if (userchoice === "rock") {
          //scissors, paper
          userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
          //rock, scissors
          userWin = compchoice === "sissor" ? false : true;
        } else {
          //rock, paper
          userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
      }
    


});

choices.forEach( (c) => {
    c.addEventListener("click",() => {
        const userchoice = c.getAttribute("id");
        playgame(userchoice);
    });
});