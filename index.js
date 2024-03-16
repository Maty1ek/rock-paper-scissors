// I write a game Rock, Scissors and Paper. I have to write code, where computer randomly choose one of that 3 choiсes. 
// Then user also write his choice? and my code compare 2 choises and output the winner. 
// Inputs we have: User`s choice
// Outputs we have: The choice of computer, The winner of round, The count of winnings and loses, The final winner


let array = [
    'Rock',
    'Scissors',
    'Paper'
]

let count = 0
let computerCount = 0
let playerCount = 0
let text = (compSel,playSel,result) => {
    return `Computer choice: ${compSel}, Player choice: ${playSel}, you ${result}, score: ${computerCount} / ${playerCount}`
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return array[choice]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    switch(playerSelection) {
        case computerSelection:
            alert('draw')
            break;
        case 'rock':
            if(computerSelection == 'scissors') {
                playerCount++
                alert(text(computerSelection, playerSelection, 'won'))
            } else if(computerSelection == 'paper') {
                computerCount++
                alert(text(computerSelection, playerSelection, 'lose'))
            }
            break;
        case 'scissors':
            if(computerSelection == 'paper') {
                playerCount++
                alert(text(computerSelection, playerSelection, 'won'))
            } else if(computerSelection == 'rock') {
                computerCount++
                alert(text(computerSelection, playerSelection, 'lose'))
            }
            break;
        case 'paper':
            if(computerSelection == 'rock') {
                playerCount++
                alert(text(computerSelection, playerSelection, 'won'))
            } else if(computerSelection == 'scissors') {
                computerCount++
                alert(text(computerSelection, playerSelection, 'lose'))
            }
            break;
        default:
            alert('wrong chce')
            break;
    }
}

function playGame(n) {
    for(let i = 0; i <= n; i++) {
        let input = prompt('Enter your choice: ')
        playRound(input, getComputerChoice())
    }
    if(playerCount > computerCount) {
        alert('YOU ARE WINNER!!')
    } else if(playerCount < computerCount) {
        alert('YOU ARE FCKIN LOOSER!!')
    } else {
        alert('TIE!!')
    }
}

playGame(10)