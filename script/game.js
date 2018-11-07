class Card {
    constructor(id) {
        this.visible = false
        this.completed = false
        this.image = null //jakiś adres do pliku z obrazkiem
        this.id = null || id //przypisanie id chyba dopiero w funkcji generate array w obiekcie Game
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
        this.id = id
    }

    setImageUrl(url) {
        this.image = url
    }


}

class Game {
    constructor() {
        this.arrayOfCards = [] //[new Card(1), new Card(2), new Card(3), new Card(4)] //array w której będą obiekty typu Card
        //this.preDefinedArraySizes
        this.boardDimension = 4// 2,4,6,8,10 max 2x2,4x4...
        this.moveCounter = 0
        this.timer = null
        this.cardId = 1 //card/cell id for the gameboard cells/cards

        this.init()
    }


    init() {
        this.generateArrayOfCards()
        console.log('generated',this.arrayOfCards)

        this.shuffleDecksInArray()
        console.log('shuffled',this.arrayOfCards)
        // this.shuffleDecksInArray()
        // console.log(this.arrayOfCards)
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
                    //set id for each cell same as card id
                    this.cardId=this.arrayOfCards[cardIndex].id
                    singleCard.setAttribute('id', this.cardId)
                    row.appendChild(singleCard)
                    // this.cardId++
                    cardIndex++
                }
            }
        }
    }





    clickCard() {



    }

    generateArrayOfCards() {
        let fullDim = (this.boardDimension * this.boardDimension) / 2

        for (let i = 0; i < fullDim; i++) {
            this.arrayOfCards[i] = new Card()
            
            // tutaj linia dodająca url do każdej karty
        }

        const tempArr = this.arrayOfCards.map(element => Object.assign(Object.create(Card.prototype), element));


        this.arrayOfCards = this.arrayOfCards.concat(tempArr)

        // this.arrayOfCards.forEach((element, i) => {   //oryginalne karola
        //     element.setId(i + 1)
        // })
        
        for (let i = 0; i < this.arrayOfCards.length/2; i++) {
            this.arrayOfCards[i].setId('a'+i)   
        }
        let k=0
        for ( let i = (this.arrayOfCards.length)/2; i < this.arrayOfCards.length; i++,k++) {
            this.arrayOfCards[i].setId('b'+k)   
        }   
    }



    shuffleDecksInArray() {

        let inputArray = this.arrayOfCards.map(element => Object.assign(Object.create(Card.prototype), element));

        for (let i = inputArray.length - 1; i >= 0; i--) {

            let randomIndex = Math.floor(Math.random() * (i + 1));
            let itemAtIndex = inputArray[randomIndex];

            inputArray[randomIndex] = inputArray[i];
            inputArray[i] = itemAtIndex;
        }

        this.arrayOfCards = inputArray.map(element => Object.assign(Object.create(Card.prototype), element));

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

