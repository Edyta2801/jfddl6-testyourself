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
        this.activeCard=''
        this.activeCards=[]
        // this.gamePairs=arrayOfCards.length/2
        this.gameresult=0;
        this.init()
    }


    init() {
        this.generateArrayOfCards()
        console.log('generated', this.arrayOfCards)

        this.shuffleDecksInArray()
        console.log('shuffled', this.arrayOfCards)

        // singleCard.classList.remove('card--visible')
    
    }
    // hiddenCards(){
    
    // // const hidden=arrayOfCards.forEach(function(card){return card.visible===false})
    // // console.log(hidden);
    
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

                singleCard.style.backgroundImage=`url("${card.image}")`


            }

            gameBoard.appendChild(singleCard)
        })


        document.body.appendChild(gameBoard)

        window.addEventListener('resize', () => gameBoard.style.height = gameBoard.offsetWidth + 'px')
        gameBoard.style.height = gameBoard.offsetWidth + 'px'
    }

    clickCard() {
   
    this.activeCard.classList.remove("card--visible") 
        if(this.activeCard.length===0){
            activeCards[0]=this.activeCard
            console.log(1)
            return;
        }
        else{
            cards.forach(card=>{
                card.removEventListener("click", clisckard)
            })

        }
   
   
    };



    const clickCard = function () {

        activeCard = this; //w co zostało kliknięte
        //console.log(event.target) //o ile przekazane event to to samo co this
    
        //czy to kliknięcie w ten sam element (tylko drugi może dać true) Musi być przed ukryciem dodane
        if (activeCard == activeCards[0]) return;
    
        activeCard.classList.remove(""); //ukrycie karty, która została kliknięta
    
        //czy to 1 kliknięcie, czy tablica ma długość 0
        if (activeCards.length === 0) {
            console.log("1 element");
            activeCards[0] = activeCard; //przypisanie do pozycji numer 1 wybranej karty
            return;
    
        }
        //czy to 2 kliknięcie - else bo jeśli nie pierwsze, to drugie
        else {
            console.log("2 element");
            //na chwilę zdejmujemy możliwość kliknięcie 
            cards.forEach(card => card.removeEventListener("click", clickCard))
            //ustawienie drugiego kliknięcia w tablicy w indeksie 1
            activeCards[1] = activeCard;
    
            //Pół sekundy od odsłoniecia - decyzja czy dobrze czy źle
            setTimeout(function () {
                //sprawdzenie czy to te same karty - wygrana
                if (activeCards[0].className === activeCards[1].className) {
                    console.log("wygrane")
                    activeCards.forEach(card => card.classList.add("off"))
                    gameResult++;
                    cards = cards.filter(card => !card.classList.contains("off"));
                    //Sprawdzenie czy nastąpił koniec gry
                    if (gameResult == gameLength) {
                        const endTime = new Date().getTime();
                        const gameTime = (endTime - startTime) / 1000
                        alert(`Udało się! Twój wynik to: ${gameTime} sekund`)
                        location.reload();
                    }
                }
                //przegrana. ponowne ukrycie
                else {
                    console.log("przegrana")
                    activeCards.forEach(card => card.classList.add("hidden"))
                }
                //Reset do nowej gry
                activeCard = ""; //aktywna karta pusta
                activeCards.length = 0; //długość tablicy na zero
                cards.forEach(card => card.addEventListener("click", clickCard))//przywrócenie nasłuchiwania
    
            }, 500)
        }
    };
    
    //PART 2 - LOSOWANIE, POKAZANIE I UKRYCIE, NASŁUCHIWANIE NA KLIKA
    //Funkcja po starcie zainicjowana
    const init = function () {
        //losowanie klasy do każdego diva
        cards.forEach(card => {
            //pozycja z tablicy przechowującej kolory
            const position = Math.floor(Math.random() * cardColors.length); //1
            //dodanie klasy do danego div-a
            card.classList.add(cardColors[position]);
            //usunięcie wylosowanego elementu, krótsza tablica przy kolejnym losowaniu
            cardColors.splice(position, 1);
        })
        //Po 2 sekundach dodanie klasy hidden - ukrycie i dodanie nasłuchiwania na klik
        setTimeout(function () {
            cards.forEach(card => {
                card.classList.add("hidden")
                card.addEventListener("click", clickCard)
            })
        }, 2000)
    };





























    generateArrayOfCards() {
        let fullDim = (this.boardDimension * this.boardDimension) / 2

        for (let i = 0; i < fullDim; i++) {
            this.arrayOfCards[i] = new Card()
            this.arrayOfCards[i].image = `./images/gameCards/${i+1}.svg`
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
