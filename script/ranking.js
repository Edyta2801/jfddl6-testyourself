class Player {
    constructor(playerName, level, score) {
        this.playerName =  playerName 
        this.level = level 
        this.score = score 
    }
}

class Ranking {
    constructor() {
        this.tableHeaderArr = ["Gracz", "Poziom gry", "Ilość ruchów"]
        this.acctualScore=null
        this.theBestPlayersArray= []
        this.playersArray = []
        
    }
    render(tableData) {
        const div = document.querySelector(".section-incentive__ranking")
        const table = document.createElement('table')
        const thead = document.createElement('thead')
        const headerRow = document.createElement('tr')
        table.className = "section-incentive__table"

        this.tableHeaderArr.forEach((el) => {
            let th = document.createElement('th')
            th.appendChild(document.createTextNode(el))
            headerRow.appendChild(th)
        })
        thead.appendChild(headerRow)
        table.appendChild(thead)

        tableData.forEach((player) => {
            let tr = document.createElement("tr")
            for(let property in player) {
                let td = document.createElement('td')
                td.appendChild(document.createTextNode(player[property]))
                tr.appendChild(td)
            }
            table.appendChild(tr)
        })
        div.appendChild(table)
    }
    sortArrayByScore(){
        this.playersArray.sort((obj1,obj2)=>obj1.score-obj2.score).reverse()
    }
    sortArrayByLevel(){
        this.playersArray.sort((obj1,obj2)=>obj1.level-obj2.level).reverse()
    }
    addPlayer(player){
    this.playersArray.push(player)
    }
    limitArrayToTopTenPlayers(){
        let tempArray=this.playersArray
        if(this.playersArray.length>8){
            this.playersArray=tempArray.slice(0,8)
            return this.playersArray
        }
    }
    savePlayerName(){

    }

}
///////dane tylko do testowania
const ranking = new Ranking()

ranking.playersArray.push(new Player("roman",3,100))
ranking.playersArray.push(new Player("nm",2,55))
ranking.playersArray.push(new Player("bn",1,34))
ranking.playersArray.push(new Player("nmw",3,170))
// ranking.playersArray.push(new Player("roxwxman",1,2))
ranking.playersArray.push(new Player("ccbunm",3,44))
ranking.playersArray.push(new Player("feefroman",2,543))
ranking.playersArray.push(new Player("fefbunm",1,34))
ranking.playersArray.push(new Player("aecroman",1,5))
ranking.playersArray.push(new Player("rrbunm",3,99))
ranking.playersArray.push(new Player("runm",2,9))
console.log('after adding',ranking.playersArray)

ranking.sortArrayByScore()

console.log('sort by score',ranking.playersArray)

ranking.sortArrayByLevel()
console.log('sort by level',ranking.playersArray)
ranking.playersArray=ranking.limitArrayToTopTenPlayers()


ranking.render(ranking.playersArray)