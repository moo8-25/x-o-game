var bt = document.getElementById("bt")
var squares = document.getElementsByClassName("square")
var ins = document.getElementById("instruction")
var currentTurn = "X"
var isFinished = false
let matrix = [
    "0", "1", "2",
    "3", "4", "5",
    "6", "7", "8",
]

for (const e of squares) {
    e.addEventListener("click", () => {
        if (isFinished)
            return
        var val = e.getAttribute("value")
        if (matrix[val] == "X" || matrix[val] == "O")
            return
        var element = document.querySelector(`.square[value="${val}"]`)
        element.innerHTML = currentTurn
        matrix[val] = currentTurn
        CheckWinner()
        if (currentTurn == "X") {
            currentTurn = "O"
        }
        else
            currentTurn = "X"
        ins.innerHTML = `${currentTurn} turn`
    })
}

bt.addEventListener("click", () => {
    for (const element of squares) {
        var val = element.getAttribute("value")
        var sq = document.querySelector(`.square[value="${val}"]`)
        sq.innerHTML = ""
    }
    matrix = [
        "0", "1", "2",
        "3", "4", "5",
        "6", "7", "8",
    ]
    isFinished = false
    currentTurn = "X"
    ins.innerHTML = `${currentTurn} turn`
})


function CheckWinner() {

    if (
        //rows
        (matrix[0] == matrix[1] && matrix[1] == matrix[2]) ||
        (matrix[3] == matrix[4] && matrix[4] == matrix[5]) ||
        (matrix[6] == matrix[7] && matrix[7] == matrix[8]) ||
        //coloumns
        (matrix[0] == matrix[3] && matrix[3] == matrix[6]) ||
        (matrix[1] == matrix[4] && matrix[4] == matrix[7]) ||
        (matrix[2] == matrix[5] && matrix[5] == matrix[8]) ||
        //Diagonal
        (matrix[0] == matrix[4] && matrix[4] == matrix[8]) ||
        (matrix[2] == matrix[4] && matrix[4] == matrix[6])
    ) {
        var winner = currentTurn == "O" ? "O" : "X"
        isFinished = true
        alertify.alert(`${winner} Won!!`)
    }

    var isDraw = true
    for (const element of matrix) {
        if (element != "X" && element != "O")
            isDraw = false
    }
    if (isDraw) {
        isFinished = true
        alertify.alert("Draw")
    }
}