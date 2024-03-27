let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
    const gencompscore=()=>{    
    const options=["rock","paper","scissors"];
const randidx=Math.floor(Math.random()*3);
return options[randidx];
}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw";
};
const showwinner=(userWin,userchoice,compChoice)=>{
if(userWin){
    userscore++;
    userScorePara.innerText=userscore;
    msg.innerText=`you win your ${userchoice} beats ${compChoice}`;
   msg.style.backgroundcolor="green";
}else{
    compscore++;
    compScorePara.innerText=compscore;
    msg.innerText=`you lost  ${compChoice} beats your ${userchoice}`;
    msg.style.backgroundcolor="red";
}
};

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compChoice=gencompscore();
    console.log("comp choice=",compChoice);
    if(userchoice===compChoice){
drawgame();
    }else{
        let userWin=true;
if(userchoice==="rock"){
userWin=compChoice==="paper"?false:true;

}else if(userchoice==="paper"){
    userWin=compChoice==="scissors"?false:true;
}else{
    userWin=compChoice==="rock"?false:true;
}
showwinner(userWin,userchoice,compChoice); 
}
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        
const userchoice=choice.getAttribute("id");
playgame(userchoice);
    });
});