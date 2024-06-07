let userScore=0;
let compScore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const genCompChoice=()=>{
    const option=['rock','paper','scissors'];
    const randomIdx=Math.floor(Math.random()*3);
    return option[randomIdx];
}
const drawGame=()=>{
    msg.innerText='Game Draw! Play Again';
    msg.style.backgroundColor='grey';


}
const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#comp-score');


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor='green';
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;

        msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor='red';


    }

};
const playgame=(userChoice)=>{
    //generate computer choice
    const compChoice=genCompChoice();
    if (userChoice===compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin=true;
        if (userChoice==='rock'){
            //scissors,paper
            userWin=compChoice==='paper'?false:true;
        }
    
        else if(userChoice==='paper'){
            //rock,scissors
            userWin=compChoice==='rock'?true:false;
            }
        else if (userChoice==='scissors'){
            userWin=compChoice==='rock'?false:true;
        } 
        showWinner(userWin,userChoice,compChoice);
   
    }

};
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);

    });
});