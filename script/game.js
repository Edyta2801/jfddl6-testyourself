class Card {
    constructor(id) {
        this.visible = true
        this.completed = false
        this.image ='' //jakiś adres do pliku z obrazkiem
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
        console.log('generated', this.arrayOfCards)

        this.shuffleDecksInArray()
        console.log('shuffled', this.arrayOfCards)

    }

    startGame() {

    }

    render() {
        document.body.innerHTML = ""

        const gameBoard = document.createElement('div')
        gameBoard.classList.add('gameboard')

        this.arrayOfCards.forEach((card, i) => {
            const singleCard = document.createElement('div')
            singleCard.classList.add('card')
            singleCard.classList.add(card.id)
            singleCard.style.flexBasis = 100 / this.boardDimension + '%'
            // @TODO click card funcntion
          
            singleCard.addEventListener('click', () => console.log(i, this.arrayOfCards[i]))

            if (card.completed === true) {
                singleCard.classList.add('card--completed')
            }

            if (card.visible === true) {
                singleCard.classList.add('card--visible')
                // console.log('singleCard',singleCard,'card.image',card.image)
                singleCard.style.backgroundImage=`url("${card.image}")`
                console.log("po dodaniu",singleCard)

            }

            gameBoard.appendChild(singleCard)
        })


        document.body.appendChild(gameBoard)

        window.addEventListener('resize', () => gameBoard.style.height = gameBoard.offsetWidth + 'px')
        gameBoard.style.height = gameBoard.offsetWidth + 'px'
    }

    clickCard() {

    }

    generateArrayOfCards() {
        let fullDim = (this.boardDimension * this.boardDimension) / 2

        for (let i = 0; i < fullDim; i++) {
            this.arrayOfCards[i] = new Card()

            this.arrayOfCards[i].image = `./images/gameCards/${i}.svg`
        }

        const tempArr = this.arrayOfCards.map(element => Object.assign(Object.create(Card.prototype), element));


        this.arrayOfCards = this.arrayOfCards.concat(tempArr)

        for (let i = 0; i < this.arrayOfCards.length / 2; i++) {
            this.arrayOfCards[i].setId('a' + i)
        }
        let k = 0
        for (let i = (this.arrayOfCards.length) / 2; i < this.arrayOfCards.length; i++ , k++) {
            this.arrayOfCards[i].setId('b' + k)
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
    attachEvent() {

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

