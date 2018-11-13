class Card {
    constructor(id) {
        this.visible = false
        this.completed = false
        this.image = '' //jakiś adres do pliku z obrazkiem
        this.id = null || id //przypisanie id chyba dopiero w funkcji generate array w obiekcie Game

    }

    toggleVisible() {
        this.visible = !this.visible
    }
    toggleCompleted() {
        this.completed = !this.completed
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
        this.arrayOfCards = []
        //this.preDefinedArraySizes
        this.boardDimension = 10// 2,4,6,8,10 max 2x2,4x4...
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
            singleCard.style.flexBasis = 100 / this.boardDimension + '%'

            singleCard.addEventListener('click', () => {
                this.clickCard(i)
            })
            if (card.completed === true) {
                singleCard.classList.add('card--completed')
                singleCard.style.backgroundImage = `url("${card.image}")`
            }

            if (card.visible === true) {
                singleCard.classList.add('card--visible')

                singleCard.style.backgroundImage = `url("${card.image}")`
            }
            gameBoard.appendChild(singleCard)
        })


        document.body.appendChild(gameBoard)

        window.addEventListener('resize', () => gameBoard.style.height = gameBoard.offsetWidth + 'px')
        gameBoard.style.height = gameBoard.offsetWidth + 'px'
    }




    clickCard(i) {
        const uncompletedCards = this.arrayOfCards.filter((card) => !card.completed)
        const visibleCards = uncompletedCards.filter((card) => card.visible)
        const numberOfVisibleCards = visibleCards.length

        if (numberOfVisibleCards === 0) {
            this.toggleVisible(i)
        }

        if (numberOfVisibleCards === 1) {
            this.toggleVisible(i)
            this.checkIfVisibleCardMatchedThenCompleteThem()
        }

        if (numberOfVisibleCards === 2) {
            this.hideAllVisibleCards()
            this.toggleVisible(i)
        }

        this.checkIfAllCompletedThenWin()
        
    }

    toggleVisible(i) {
        this.arrayOfCards[i].toggleVisible()
        this.render()
    }

    checkIfVisibleCardMatchedThenCompleteThem() {
        console.log('aaa', this.arrayOfCards)
        const uncompletedCards = this.arrayOfCards.filter((card) => !card.completed)
        const visibleCards = uncompletedCards.filter((card) => card.visible)
        console.log('unc', uncompletedCards)
        if (visibleCards[0].image === visibleCards[1].image) {
            visibleCards[0].completed = true
            visibleCards[1].completed = true
        }
        this.render()
    }

    hideAllVisibleCards() {
        const uncompletedCards = this.arrayOfCards.filter((card) => !card.completed)
        const visibleCards = uncompletedCards.filter((card) => card.visible)
        visibleCards.map(card => card.visible = false)
    }

    checkIfAllCompletedThenWin() {
        const uncompletedCards = this.arrayOfCards.filter((card) => !card.completed)
        if (uncompletedCards.length === 0) {
            this.win()
        }
    }

    win() {
        console.log('YOU WON!')
    }
    
    generateArrayOfCards() {
        let fullDim = (this.boardDimension * this.boardDimension) / 2

        for (let i = 0; i < fullDim; i++) {
            this.arrayOfCards[i] = new Card()
            this.arrayOfCards[i].image = `./images/gameCards/${i + 1}.svg`
        }
        const tempArr = this.arrayOfCards.map(element => Object.assign(Object.create(Card.prototype), element));
        this.arrayOfCards = this.arrayOfCards.concat(tempArr)
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

const game = new Game()
game.render()


