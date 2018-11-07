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


}

class Game {
    constructor() {

        this.arrayOfCards = [new Card('A'), new Card('B'), new Card('A'), new Card('B')] //array w której będą obiekty typu Card
        //Add more cards to have more on the board


        //this.preDefinedArraySizes
        this.boardDimension = 4//2,4,6,8,10 max 2x2,4x4...
        this.moveCounter = 0
        this.timer = null
        this.cardId = 1 //card/cell id for the gameboard cells/cards
        this.shuffledArrayOfCards=[]
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

        /*for testing only
        this.arrayOfCards[0].id=5;
        this.arrayOfCards[1].id=4;
        this.arrayOfCards[2].id=3;
        this.arrayOfCards[3].id=2;
        this.shuffledArrayOfCards=this.shuffleDecksInArray(this.arrayOfCards)
        console.log(this.shuffledArrayOfCards)
        */


        while (cardIndex < this.arrayOfCards.length) {
            for (let r = 0; r < this.boardDimension; r++) {
                let row = document.createElement('div')
                row.classList.add('boardRow')
                gameBoard.appendChild(row)
                //single cards(as many as dimension) in rows
                for (let i = 0; i < this.boardDimension; i++) {
                    let singleCard = document.createElement('div')
                    //is card completed?
                    if (this.arrayOfCards[cardIndex].completed == true) {
                        if (singleCard.classList.contains('card--visible')) {
                            singleCard.classList.remove('card--visible')
                        }
                        singleCard.classList.add('card--completed')
                        //is card visible?
                    } else if (this.arrayOfCards[cardIndex].visible == true) {
                        if (singleCard.classList.contains('card--covered')) {
                            singleCard.classList.remove('card--covered')
                        }
                        /* singleCard.classList.remove('card--completed')//testing only*/
                        singleCard.classList.add('card--visible')
                        //set card covered
                    } else singleCard.classList.add('card--covered')

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



    shuffleDecksInArray(array) {
            let inputArray = array

            for (let i = inputArray.length - 1; i >= 0; i--) {

                let randomIndex = Math.floor(Math.random() * (i + 1));
                let itemAtIndex = inputArray[randomIndex];

                inputArray[randomIndex] = inputArray[i];
                inputArray[i] = itemAtIndex;
            }
            return inputArray


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

