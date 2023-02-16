// CHAPTER 5 - QUEEN COLONY

// 1. SETUP
// const queens = []

// 2. ANOINT A QUEEN 
const queens = []

const createQueen = (queenID, queenName) => {
    const queenObject = {
        id: queenID,
        name: queenName
    }

    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
console.log(typeof(queens))
createQueen(2, "Linda K")
createQueen(3, "Ashley V")
createQueen(4, "Becky T")

console.log(queens)

