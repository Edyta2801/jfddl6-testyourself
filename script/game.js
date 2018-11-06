class Card {
    constructor(text) {
        this.visible = true
        this.completed = false
        this.image = null //jakiś adres do pliku z obrazkiem
        this.Id = null //przypisanie id chyba dopiero w funkcji generate array w obiekcie Game
    }

    toggleVisible() {
        if (this.visible === false) this.visible = true
        if (this.visible === true) this.visible = false
    }

    toggleCompleted() {
        if (this.completed === false) this.completed = true
        if (this.completed === true) this.completed = false
    }

    setId(id) {
        this.Id = id
    }

    setImageUrl(url) {
        this.image = url
    }
    isVisible() {
        return x = this.visible ? true : false
    }
    isCompleted() {
        return x = this.completed ? true : false
    }
    

}

class Game {
    constructor() {
        this.arrayOfCards = [new Card('A'), new Card('B'), new Card('A'), new Card('B')] //array w której będą obiekty typu Card
        //this.preDefinedArraySizes
        this.boardDimension = 2//2,4,6,8,10 max 2x2,4x4...
        this.moveCounter = 0
        this.timer = null
        this.cardId = 1 //card/cell id for the gameboard cells/cards

    }

    init() {

    }

    startGame() {

    }

    render() {
        //create gameboard container
        document.body.innerHTML = ""
        const gameBoard = document.createElement('div')
        gameBoard.classList.add('gameboard')
        document.body.appendChild(gameBoard)
        //create board depending on board dimension/level
        //rows (as many as dimension)
        let cardIndex = 0;
        while (cardIndex < this.arrayOfCards.length) {
            for (let r = 0; r < this.boardDimension; r++) {
                let row = document.createElement('div')
                row.classList.add('boardRow')
                gameBoard.appendChild(row)
                //single cards(as many as dimension) in rows
                for (let i = 0; i < this.boardDimension; i++) {
                    let singleCard = document.createElement('div')
                    
                    if (this.arrayOfCards[cardIndex].isCompleted) {
                        if(singleCard.classList.contains('card--visible')){
                            singleCard.classList.remove('card--visible')}
                        singleCard.classList.add('card--completed')

                    }else if (this.arrayOfCards[cardIndex].isVisible) {
                        if(singleCard.classList.contains('card--covered')){
                            singleCard.classList.remove('card--covered')}
                        /* singleCard.classList.remove('card--completed')//testing only*/
                        singleCard.classList.add('card--visible')

                    }else singleCard.classList.add('card--covered')
                    
                    singleCard.setAttribute('id', this.cardId)
                    row.appendChild(singleCard)
                    this.cardId++
                    cardIndex++
                }
            }
            
        }
    }





    clickCard() {

    }

    generateArrayOfCards() {
        // miało być generateBoard, ale po przemyśleniu wydaje mi się, że jednak lepiej po prostu array, jak coś to można zmienić
    }

    shuffleDecksInArray() {

    }

    setGameLevel(level) {//levels 2/4/6/8/10max
        this.boardDimension = level
    }

    // resetGame() {
    // robimy taką funkcję ?
    // }
}

const game1 = new Game()
game1.render()