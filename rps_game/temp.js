function comp(){
    let i = Math.floor(Math.random() * 3);
    let j;
    if(i == 0){
        j = "rock";
    }
    else if(i == 1){
        j = "paper";
    }
    else{
        j = "scissor";
    }
    return j;
}

function human(){
    let k = prompt("Rock, paper or scissor");
    return k.toLowerCase();
}



let humanScore = 0;
let compScore = 0;

function play(co, hu){
        if (co === hu) {
            console.log(`Draw! Both chose ${hu}`);
            
    }

        if (
            (hu === "rock" && co === "scissor") ||
            (hu === "paper" && co === "rock") ||
            (hu === "scissor" && co === "paper")
        ) {
            console.log(`You win! ${hu} beats ${co}`);
            humanScore++;
        } else {
            console.log(`You lose! ${co} beats ${hu}`);
            compScore++;
        }
    }

for(let l = 0; l<5; l += 1){
    let hu = human();
    let co = comp();
    play(co,hu)
    console.log(humanScore, compScore)    
    
}
