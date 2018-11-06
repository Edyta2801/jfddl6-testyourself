class Card {
    constructor(text) {
        this.visible = false
        this.completed = false
        // this.image = //jakiś adres do pliku z obrazkiem
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

}

class Game {
    constructor() {
        this.arrayOfCards = [new Card('A'), new Card('B'), new Card('A'), new Card('B')] //array w której będą obiekty typu Card
        //this.preDefinedArraySizes
        this.moveCounter = 0
        this.timer = null
    }

    init() {

    }

    startGame() {

    }

    render() {

    }

    clickCard() {

    }

    generateArrayOfCards() {
        // miało być generateBoard, ale po przemyśleniu wydaje mi się, że jednak lepiej po prostu array, jak coś to można zmienić
    }

    shuffleDecksInArray() {

    }

    chooseLevel() {

    }

    // resetGame() {
    // robimy taką funkcję ?
    // }
}