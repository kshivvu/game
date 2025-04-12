score = 0;
play = 1;
function result_(choice) {
    let compChoice;
  if (play == 1) {
    if(score<4)
    {
    let comp = Math.floor(Math.random() * 3);
     compChoice = comp == 0 ? "rock" : comp == 1 ? "paper" : "scissors";
    }else{
        compChoice=choice=='r'?"paper":choice=='p'?"scissors":"rock";
    }
    alert(`Computer choice is ${compChoice}`);
    let dict = {
      rock: "r",
      paper: "p",
      scissors: "s",
    };
    comp = dict[compChoice];
    result =
      comp === choice
        ? 0
        : comp === "r" && choice === "p"
        ? 1
        : comp === "p" && choice === "s"
        ? 1
        : comp === "s" && choice === "r"
        ? 1
        : -1;
    
    if(result==1)
    {
        score += result;
    }
    message =
      result === 0 ? "It was a Tie" : result === -1 ? "You Lose" : "You Won";
    document.getElementById(
      "score"
    ).innerText = `${message}. Your Score:${score}`;
    if (result === -1) {
      play = 0;
    }
  }
}
