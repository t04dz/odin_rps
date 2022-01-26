let cpuSelectText = document.getElementById("cpuSelectText")
let wolText = document.getElementById("winOrLose")
let playerPoints = 0
let cpuPoints = 0

function cpuPlay() {
  let cpuChoices = ["Rock", "Paper", "Scissors"]
  return cpuChoices[Math.floor(Math.random() * cpuChoices.length)]
}
function playRound(playerSelect) {
  let cpuSelect = cpuPlay()
  if (
    (playerSelect == "Rock" && cpuSelect == "Paper") ||
    (playerSelect == "Paper" && cpuSelect == "Scissors") ||
    (playerSelect == "Scissors" && cpuSelect == "Rock")
  ) {
    wolText.textContent = "You lose!"
    cpuPoints += 1
    document.getElementById("cpuPoints").textContent = "CPU points: " + cpuPoints
  } else if (playerSelect == cpuSelect) {
    wolText.textContent = "You tie!"
  } else {
    wolText.textContent = "You win!"
    playerPoints += 1
    document.getElementById("playerPoints").textContent = "Your points: " + playerPoints
  }
  function hide (elements) {  //hides each input button by iterating through each element of the selected type, in this case the "input" type as defined in the below if statements
    elements = elements.length ? elements : [elements]
    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display = 'none'
    }
    
  }
  if (playerPoints > 4){
    hide(document.querySelectorAll("input"))
    document.getElementById("btn2").style.display = 'inline'
  }
  if (cpuPoints > 4){
    hide(document.querySelectorAll("input"))
    document.getElementById("btn2").style.display = 'inline'
  }
  
  cpuSelectText.textContent = "Computer picks: " + cpuSelect
}

document.querySelectorAll("input").forEach((button) => { //listens for each input button to be clicked and then calls the playRound function
  button.addEventListener("click", function () {
    playRound(button.value)
  })
})

function resetGame(){
  document.getElementById("resetConfirm").textContent = "Resetting!"
  setTimeout(function(){
    document.location.reload()
  }, 1000)
  
}





