// you can write js here
console.log('exo-5');

$(document).ready(() => {
    playGame()
});

function playGame() {
    $('img').on('click', (event) => {
        var choice = $(event.currentTarget).parents('.panel').find('.panel-heading').text()
        var computerChoice = getComputerChoice();
        $('#getcomputerChoice').text(computerChoice)
        $('#userChoice').text(choice)
        var winner = determineWinner(computerChoice, choice);
        colorChoice(winner)
        $('#resultat').text(winner)
        console.log(winner);
    });
}

function colorChoice(winner) {
    if (winner === 'Lose') {
        $('#resultat').css({ 'color': 'red' });
    } else {
        $('#resultat').css('color', 'green');
    }
}

function getComputerChoice() {
    var nombre = Math.floor(Math.random() * 3);
    if (nombre === 0) {
        return 'rock';
    } else if (nombre === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function determineWinner(getComputerChoice, getUserChoise) {
    if (getComputerChoice === getUserChoise) {
        return 'Tied';
    }
    if (getUserChoise === 'rock') {
        if (getComputerChoice === 'paper')
            return 'Lose';
        return 'Won';
    }
    if (getUserChoise === 'scissors') {
        if (getComputerChoice === 'paper')
            return 'Won';
        return 'Lose';
    }
    //getUserChoise=paper
    if (getComputerChoice === 'scissors')
        return 'Lose';
    return 'Won';
}






