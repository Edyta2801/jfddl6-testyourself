class Card {
    constructor(id) {
        this.visible = false
        this.completed = false
        this.id = null || id //przypisanie id chyba dopiero w funkcji generate array w obiekcie Game
    }

    makeVisible() {
        this.visible = true
    }

    makeInvisible() {
        this.visible = false
    }

    makeCompleted() {
        this.completed = true
    }

    // setId(id) {
    //     this.id = id
    // }

    // setImageUrl(url) {
    //     this.image = url
    // }

}

class Game {
    constructor() {
        this.arrayOfCards = []
        //this.preDefinedArraySizes
        this.boardDimension = 2// 2,4,6,8,10 max 2x2,4x4...
        this.moveCounter = 0

        this.cardId = 1 //card/cell id for the gameboard cells/cards
        this.resetButton = document.querySelector(".button__reset")
        // this.isWon=false
        this.gameLevel = 1

        this.ranking = new Ranking()
        this.init()
    }

    init() {
        console.log(this.gameLevel)
        this.generateArrayOfCards()
        this.shuffleDecksInArray()
    }

    startGame() {

    }

    render() {

        const board = document.querySelector(".section-incentive__game-board")
        board.innerHTML = ''
        this.resetButton.addEventListener('click', this.resetGame)
        const gameBoard = document.createElement('div')
        gameBoard.classList.add('gameboard')
        const moveCounterDiv = document.querySelector(".game-score__counter")
        const levelDiv=document.querySelector(".game-score__level")
        moveCounterDiv.innerHTML = this.moveCounter
        levelDiv.innerHTML=this.gameLevel

        this.arrayOfCards.forEach((card, i) => {
            const singleCard = document.createElement('div')
            singleCard.classList.add('card')
            singleCard.style.flexBasis = 100 / this.boardDimension + '%'

            singleCard.addEventListener('click', () => {
                this.clickCard(i)
            })
            if (card.completed === true) {
                singleCard.classList.add('card--completed')
                singleCard.style.backgroundImage = `url("./images/gameCards/${card.id}.svg")`
            }

            if (card.visible === true) {
                singleCard.classList.add('card--visible')
                singleCard.style.backgroundImage = `url("./images/gameCards/${card.id}.svg")`
            }
            gameBoard.appendChild(singleCard)
        })


        board.appendChild(gameBoard)

        window.addEventListener('resize', () => gameBoard.style.height = gameBoard.offsetWidth + 'px')
        gameBoard.style.height = gameBoard.offsetWidth + 'px'
    }

    clickCard(i) {
        const uncompletedCards = this.arrayOfCards.filter((card) => !card.completed)
        const visibleCards = uncompletedCards.filter((card) => card.visible)
        const numberOfVisibleCards = visibleCards.length

        if (uncompletedCards.length != 0 && this.arrayOfCards[i].completed != true) {
            this.moveCounter++
        }

        if (numberOfVisibleCards === 0) {
            this.makeCardVisible(i)
        }

        if (numberOfVisibleCards === 1) {
            this.makeCardVisible(i)
            this.checkIfVisibleCardMatchedThenCompleteThem()
        }

        if (numberOfVisibleCards === 2) {
            this.hideAllVisibleCards()
            this.makeCardVisible(i)
        }

        this.checkIfAllCompletedThenWin()

    }

    makeCardVisible(i) {
        this.arrayOfCards[i].makeVisible()
        this.render()
    }

    checkIfVisibleCardMatchedThenCompleteThem() {

        const uncompletedCards = this.arrayOfCards.filter((card) => !card.completed)
        const visibleCards = uncompletedCards.filter((card) => card.visible)

        if (
            visibleCards.length === 2 &&
            visibleCards[0].id === visibleCards[1].id
        ) {
            visibleCards[0].makeCompleted()
            visibleCards[1].makeCompleted()
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
        const promptBox = document.querySelector(".prompt-form-container")
        const promptBoxInput = document.querySelector(".prompt-form__input-text")
        const promptBoxButton = document.querySelector(".prompt-form__button")

        promptBox.style.display = "initial"
        this.gameLevel++
        promptBoxButton.addEventListener(
            'click',
            () => {
                this.ranking.savePlayerName(promptBoxInput.value, this.gameLevel, this.moveCounter)

                promptBox.style.display = "none"
                
                console.log(this.gameLevel)
                this.setGameLevel(this.gameLevel)
                this.levelUp()
            }
        )

        console.log('YOU WON!')
    }

    generateArrayOfCards() {
        let fullDim = (this.boardDimension * this.boardDimension) / 2

        this.arrayOfCards = []
        for (let i = 0; i < fullDim; i++) {
            this.arrayOfCards[i] = new Card(i + 1)
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
        this.boardDimension = (level*2)
    }

    levelUp() {
        this.moveCounter=0
        this.generateArrayOfCards()
        this.shuffleDecksInArray()
        this.render()
    }
    resetGame(){
        window.location=''
    }

}

const game = new Game()
game.render()