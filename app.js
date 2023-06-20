let cellArray = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameRunning = false;
const playerText = document.getElementById('playerText');

//2d array to define winning combinations
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//takes playerText variable and updates it to currentPlayer variables turn
function displayPlayerTurn() {
    playerText.innerText = `${currentPlayer}'s Turn`;
};

//on click this will check if the cell isn't an empty string or the game isn't running. If so, it won't 
//let you continue playing. Otherwise it will update the cell and check for a winner.
function onCellClick(cellIndex){

    if(cellArray[cellIndex] != "" || !gameRunning){
        return;
    }

    updateCell(cellIndex);
    checkForWinner();
};

//this will update the string in the cellArray clicked with the string letter of the current player
function updateCell(index){
    cellArray[index] = currentPlayer;
    document.getElementById(index).innerText = currentPlayer;
};

//takes current player and changes it, also desplays the player turn on screen
function changePlayer(){
    
    if(currentPlayer == 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }

    displayPlayerTurn();
};

//checking for a winner with a for loop that loops through the winning combinations array
//if the game is won it will break the loop and alert which player has won, alert a draw, or continue the game
function checkForWinner(){
    let gameWon = false;

    for(let i = 0; i < winCombos.length; i++){
        const condition = winCombos[i];
        const cellA = cellArray[condition[0]];
        const cellB = cellArray[condition[1]];
        const cellC = cellArray[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            gameWon = true;
            break;
        }
    }

    if(gameWon){
        playerText.innerText = `${currentPlayer} wins!`;
        gameRunning = false;
        window.alert(`${currentPlayer} wins!`);
    } else if(
        cellArray[0] != '' &&
        cellArray[1] != '' &&
        cellArray[2] != '' &&
        cellArray[3] != '' &&
        cellArray[4] != '' &&
        cellArray[5] != '' &&
        cellArray[6] != '' &&
        cellArray[7] != '' &&
        cellArray[8] != ''
    ) {
        playerText.innerText = `Draw!`;
        gameRunning = false;
        window.alert(`Draw!`);
    } else{
        changePlayer();
    }
};

//this resets the board on screen
function resetScreen() {
    for(i = 0; i < 9; i++) {
        document.getElementById(i).innerText = '';
    }
};

//this gives our reset button the functionality to reset the game
function restartGame(){
    currentPlayer = "X";
    cellArray = ["", "", "", "", "", "", "", "", ""];
    displayPlayerTurn();
    resetScreen();
    gameRunning = true;
};

//this function starts the game on load
function startGame(){
    displayPlayerTurn();
    gameRunning = true;
};

startGame();