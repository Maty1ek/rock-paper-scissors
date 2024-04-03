// I write a game Rock, Scissors and Paper. I have to write code, where computer randomly choose one of that 3 choiсes. 
// Then user also write his choice? and my code compare 2 choises and output the winner. 
// Inputs we have: User`s choice
// Outputs we have: The choice of computer, The winner of round, The count of winnings and loses, The final winner


// let array = [
//     'Rock',
//     'Scissors',
//     'Paper'
// ]





// function playRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase()
//     computerSelection = computerSelection.toLowerCase()
//     switch(playerSelection) {
//         case computerSelection:
//             alert('draw')
//             break;
//         case 'rock':
//             if(computerSelection == 'scissors') {
//                 playerCount++
//                 alert(text(computerSelection, playerSelection, 'won'))
//             } else if(computerSelection == 'paper') {
//                 computerCount++
//                 alert(text(computerSelection, playerSelection, 'lose'))
//             }
//             break;
//         case 'scissors':
//             if(computerSelection == 'paper') {
//                 playerCount++
//                 alert(text(computerSelection, playerSelection, 'won'))
//             } else if(computerSelection == 'rock') {
//                 computerCount++
//                 alert(text(computerSelection, playerSelection, 'lose'))
//             }
//             break;
//         case 'paper':
//             if(computerSelection == 'rock') {
//                 playerCount++
//                 alert(text(computerSelection, playerSelection, 'won'))
//             } else if(computerSelection == 'scissors') {
//                 computerCount++
//                 alert(text(computerSelection, playerSelection, 'lose'))
//             }
//             break;
//         default:
//             alert('wrong choice')
//             break;
//     }
// }



// playGame(10)

const playBtn = document.getElementById("play_btn")
const firstPage = document.getElementById("firstPage")
const mainPage = document.getElementById('mainPage')
const lastPage = document.getElementById('lastPage')

const userSelections = document.querySelectorAll('.userSelections')
const userChoices = Array.from(userSelections)

const userChoiceIMG = document.getElementById('user_choice_img')
const compChoiceIMG = document.getElementById('comp_choice_img')

const roundRes = document.getElementById('round_res')
const compScore = document.getElementById('compScore')
const userScore = document.getElementById('userScore')
const userScoreLast = document.getElementById('userScoreLast')
const compScoreLast = document.getElementById('compScoreLast')

const finalRes = document.getElementById('finish_res')

let gameRound = 5

let count = 0
let computerCount = 0
let playerCount = 0
let text = (result) => {
    roundRes.innerHTML = result
}

let input = 'none'

let compChoice

let array = [
    'rock',
    'scissors',
    'paper'
]

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return array[choice]
}

for (let i = 0; i < userChoices.length; i++) {
    userChoices[i].addEventListener('click', () => ye(i))
}

function ye(i) {
    input = userChoices[i].id
    compChoice = getComputerChoice()
    userChoiceIMG.src = `img/${userChoices[i].id}.png`
    compChoiceIMG.src = `img/${compChoice}.png`
    playRound(input, compChoice)
    console.log(compChoice, computerCount, playerCount);
    compScore.innerHTML = computerCount
    userScore.innerHTML = playerCount
    if(input === compChoice) {
        count
    } else {
        count++
    }
    if (count == gameRound) {
        mainPage.setAttribute('style', 'display:none !important;')
        lastPage.setAttribute('style', 'display:flex !important;')
        count = 0
        if (playerCount > computerCount) {
            finalRes.innerHTML = "YOU WON!"
        } else if (playerCount == computerCount) {
            finalRes.innerHTML = "DRAW"
        } else {
            finalRes.innerHTML = "YOU LOST!"
        }
        roundRes.innerHTML = ''
        userScoreLast.innerHTML = playerCount
        compScoreLast.innerHTML = computerCount
        computerCount = 0
        playerCount = 0
        compScore.innerHTML = computerCount
        userScore.innerHTML = playerCount
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    switch (playerSelection) {
        case computerSelection:
            roundRes.innerHTML = 'draw'
            break;
        case 'rock':
            if (computerSelection == 'scissors') {
                playerCount++
                roundRes.innerHTML = 'won'
            } else if (computerSelection == 'paper') {
                computerCount++
                roundRes.innerHTML = 'lost'
            }
            break;
        case 'scissors':
            if (computerSelection == 'paper') {
                playerCount++
                roundRes.innerHTML = 'won'
            } else if (computerSelection == 'rock') {
                computerCount++
                roundRes.innerHTML = 'lost'
            }
            break;
        case 'paper':
            if (computerSelection == 'rock') {
                playerCount++
                roundRes.innerHTML = 'won'
            } else if (computerSelection == 'scissors') {
                computerCount++
                roundRes.innerHTML = 'lost'
            }
            break;
        default:
            alert('wrong choice')
            break;
    }
}

function closePage() {
    mainPage.setAttribute('style', 'display:flex !important;')
    firstPage.style.display = 'none'
    console.log('yes')
}

const playAgain = () => {
    lastPage.style.display = 'none'
    mainPage.setAttribute('style', 'display:flex !important;')
}

playBtn.addEventListener('click', closePage)
play_btn_last.addEventListener('click', playAgain)