const message = document.getElementById("message");

let secretNumber = Math.floor(Math.random()*100)+1;
let count = 0;

function checkguess(){
    const userinput = document.getElementById("guess-input").value;
    ++count;

    if(isNaN(userinput)){
        console.log("Enter a valid number between 1 to 100") 
    }

    if(userinput > secretNumber){
        message.textContent ="too high!  Enter a smaller number"
    }

    else if(userinput < secretNumber){
        message.textContent ="Too low! Enter a bigger number"
    }

    else{ 
        message.textContent ="Congrats, You got the number in  "  +  count  +   "  attempts"
    }
}

function resetgame(){
    secretNumber = Math.floor(Math.random()*100)+1;
    message.textContent = "";
    document.getElementById("guess-input").value ="";
    count=0;

}