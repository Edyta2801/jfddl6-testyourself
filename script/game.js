class Card {
    constructor(id) {
        this.visible = false
        this.completed = false
        this.image = null //jakiś adres do pliku z obrazkiem
        this.id = id //przypisanie id chyba dopiero w funkcji generate array w obiekcie Game
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
        this.arrayOfCards = [new Card(1), new Card(2), new Card(3), new Card(4)] //array w której będą obiekty typu Card
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