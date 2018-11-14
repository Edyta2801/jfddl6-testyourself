class Player {
    constructor(playerName, level, score) {
        this.playerName = playerName
        this.level = level
        this.score = score
    }
}

class Ranking {
    constructor() {
        this.tableHeaderArr = ["Gracz", "Poziom gry", "Ilość ruchów"]
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
            for (let property in player) {
                let td = document.createElement('td')
                td.appendChild(document.createTextNode(player[property]))
                tr.appendChild(td)
            }
            table.appendChild(tr)
        })
        div.appendChild(table)
    }

    sortArrayByScore() {
        this.playersArray.sort((obj1, obj2) => obj1.score - obj2.score).reverse()
    }

    sortArrayByLevel() {
        this.playersArray.sort((obj1, obj2) => obj1.level - obj2.level).reverse()
    }

    addPlayer(player) {
        this.playersArray.push(player)
    }

    limitArrayToTopTenPlayers() {
        this.playersArray = this.playersArray.filter((e, i) => i < 10)
    }

    savePlayerName(name, level, score) {
        ranking.playersArray = ranking.playersArray.concat(
            new Player(name, level, score)
        )
    }

}
///////dane tylko do testowania
const ranking = new Ranking()

ranking.savePlayerName("roman", 3, 100)
ranking.savePlayerName("nm", 2, 55)
ranking.savePlayerName("bn", 1, 34)
ranking.savePlayerName("nmw", 3, 170)
ranking.savePlayerName("roxwxman", 1, 2)
ranking.savePlayerName("roxwxman", 1, 2)
ranking.savePlayerName("roxwxman", 1, 2)
ranking.savePlayerName("ccbunm", 3, 44)
ranking.savePlayerName("feefroman", 2, 543)
ranking.savePlayerName("fefbunm", 1, 34)
ranking.savePlayerName("aecroman", 1, 5)
ranking.savePlayerName("rrbunm", 3, 99)
ranking.savePlayerName("runm", 2, 9)
console.log('after adding', ranking.playersArray)

ranking.sortArrayByScore()

console.log('sort by score', ranking.playersArray)

ranking.sortArrayByLevel()
console.log('sort by level', ranking.playersArray)
ranking.limitArrayToTopTenPlayers()
console.log('filter to 8', ranking.playersArray)


ranking.render(ranking.playersArray)