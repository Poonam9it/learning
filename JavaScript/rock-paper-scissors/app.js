let useScore = 1;
let computerScore = 1 ;


const choices  = document.querySelectorAll(".choice")



const genCompChoice = () =>{
    const options =["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}


const playGame = (userChoice) =>{
    let p = document.querySelector(".msg-para");
    console.log("User Choice =  " + userChoice);

    const CompChoice = genCompChoice();
    console.log("Computer Choice =  " + CompChoice);
    

    if(userChoice === CompChoice){
       console.log("Draw Match ..........");
       p.innerHTML = "It was Draw"
       p.style.color="black"
       p.style.backgroundColor = "red"
 
        }else if((userChoice==="rock" && CompChoice === "scissor") || (userChoice==="scissor" && CompChoice === "paper") ||(userChoice==="paper" && CompChoice === "rock")){
           
           let userScoreP = document.querySelector("#user-score");
            userScoreP.innerHTML = useScore ++;
            p.innerHTML = `You Won ! ${userChoice} beats ${CompChoice}.`
            p.style.color="black"
            p.style.backgroundColor = "green"
        
            console.log("User is the winner ....");

        }else{
            let computerScoreP = document.querySelector("#comp-score");
            computerScoreP.innerHTML = computerScore ++;
            console.log("Computer is the winner ....");
            p.innerHTML = `You lost. ${CompChoice} beats ${userChoice}.`
            p.style.color="white"
            p.style.backgroundColor = "blue"
        }
}


choices.forEach((choice) => {

    console.log(choice);

    choice.addEventListener("click",()=>{

        let userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })

})
    

