let turn = 0, xWins = 0, oWins = 0;
let currentPlayer = 'X';


const play = document.querySelectorAll('.grid-item');

for (let i = 0; i < play.length; i++) {
    play[i].addEventListener('click', (event) => {
        if (turn === 0 || turn % 2 === 0) {
            currentPlayer = 'X';
            document.getElementById('current').textContent = `Current Player: O`
            document.getElementById(event.target.id).textContent = currentPlayer;
            turn += 1;
        } else {
            currentPlayer = 'O';
            document.getElementById('current').textContent = `Current Player: X`
            document.getElementById(event.target.id).textContent = currentPlayer;
            turn += 1;
        }

        if (checkForWinner()) {
            window.alert(`${currentPlayer} wins!`);
            if (currentPlayer === 'X') {
                xWins += 1;
            } else if (currentPlayer === 'O') {
                oWins += 1;
            }
            document.getElementById('wins').textContent = `Number of Wins: X: ${xWins} | O: ${oWins}`
            clearBoard();
        };

    })
}

const checkForWinner = () => {
    let winner = false;;

    let topLeft = document.getElementById('tleft').textContent;
    let topMid = document.getElementById('tmid').textContent;
    let topRight = document.getElementById('tright').textContent;
    let midLeft = document.getElementById('mleft').textContent;
    let midMid = document.getElementById('mmid').textContent;
    let midRight = document.getElementById('mright').textContent;
    let bottomLeft = document.getElementById('bleft').textContent;
    let bottomMid = document.getElementById('bmid').textContent;
    let bottomRight = document.getElementById('bright').textContent;

    let winningCombos = [[topLeft, topMid, topRight], 
                         [midLeft, midMid, midRight],
                         [bottomLeft, bottomMid, bottomRight],
                         [topLeft, midLeft, bottomLeft],
                         [topMid, midMid, bottomMid],
                         [topRight, midRight, bottomRight],
                         [topLeft, midMid, bottomRight],
                         [topRight, midMid, bottomRight]];
    
    for (let i = 0; i < winningCombos.length; i++) {
        let combo = winningCombos[i];
        if (combo.every(value => value === 'X') || combo.every(value => value === 'O')) {
            winner = true;
        }
    }

    return winner;

};

const btn = document.getElementById('new-game');

const clearBoard = () => {
    for (let i = 0; i < play.length; i++) {
        play[i].textContent = '';
    }
    turn = 0;
    currentPlayer = 'X';
    document.getElementById('current').textContent = `Current Player: X`
}

btn.addEventListener('click', (event) => {
    clearBoard();
    document.getElementById('current').textContent = `Current Player: X`
})