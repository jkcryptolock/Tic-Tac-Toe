let round = 0, xWins = 0, oWins = 0;
let currentPlayer, values;

if (round === 0) {
    currentPlayer = 'X';
}

const play = document.querySelectorAll('.grid-item');

for (let i = 0; i < play.length; i++) {
    play[i].addEventListener('click', (event) => {
        if (!document.getElementById(event.target.id).textContent && !checkForWinner()) {
            if (currentPlayer === 'X') {
                playLogic('X');
            } else if (currentPlayer === 'O') {
                playLogic('O');
            }
        }
        document.getElementById('current').textContent = `Current Player: ${currentPlayer}`;
    });
};

const playLogic = (player) => {
    document.getElementById(event.target.id).textContent = player;
    if (checkForWinner()) {
        if (player === 'X') {
            xWins += 1;
            document.getElementById('wins').textContent = `Number of Wins: X: ${xWins} | O: ${oWins}`;
            setTimeout(() => alert(`X wins!`), 1000);
        } else if (player === 'O') {
            oWins += 1;
            document.getElementById('wins').textContent = `Number of Wins: X: ${xWins} | O: ${oWins}`;
            setTimeout(() => alert(`O wins!`), 1000);
        }
    } else if (checkForTie()){
        alert('There is no winner!');
    } else {
        if (player === 'X') {
            currentPlayer = 'O';
        } else if (player === 'O'){
            currentPlayer = 'X'
        }
    }
};

const checkForTie = () => {

    values = Array.from(play).map(node => node.textContent);
    if (values.every(value => value !== '')){
        return true;
    }

};

const checkForWinner = () => {

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
                         [topRight, midMid, bottomLeft]];
    
    for (let i = 0; i < winningCombos.length; i++) {
        let combo = winningCombos[i];
        if (combo.every(value => value === 'X') || combo.every(value => value === 'O')) {
            return true;
        }
    }

};

const clearBoard = () => {

    for (let i = 0; i < play.length; i++) {
        play[i].textContent = '';
    }

};

const btn = document.getElementById('new-game');

btn.addEventListener('click', (event) => {
    clearBoard();
});