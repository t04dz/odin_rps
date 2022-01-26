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
  cpuSelectText.textContent = "Computer picks: " + cpuSelect
}

document.querySelectorAll("input").forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value)
  })
})
