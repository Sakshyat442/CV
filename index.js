let answer = Math.floor(Math.random() * 11)
let guesses = 0;
let submitBtn = document.getElementById("submitBtn")


submitBtn.onclick = function(){
    let guess = document.getElementById('guessField').value
    guesses += 1

    if(guess == answer){
        alert(`${guess} is the correct answer. You did total of ${guesses} guesses`)
    }else if(guess < answer){
        alert("Too Low!")
    }else{
        alert("Too High!")
    }
}