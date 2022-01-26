let cpuSelectText = document.getElementById("cpuSelectText")
let wolText = document.getElementById("winOrLose")

function cpuPlay(){
    let cpuChoices = ["Rock", "Paper", "Scissors"]
    return cpuChoices [Math.floor(Math.random() * cpuChoices.length)]
    
}
function playRound(playerSelect){
    let cpuSelect = cpuPlay()
        if ((playerSelect == "Rock" && cpuSelect == "Paper") ||
            (playerSelect == "Paper" && cpuSelect == "Scissors") ||
            (playerSelect == "Scissors" && cpuSelect == "Rock")){
                wolText.textContent = "You lose!"
            }
    cpuSelectText.textContent = "Computer picks: " + cpuSelect 
    
    
}



document.querySelectorAll('input').forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})