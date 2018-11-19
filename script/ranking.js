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
        this.playersArray = JSON.parse(window.localStorage.getItem("ranking")) || []
        this.render()
    }

    render() {
        const sortedByScore = this.sortArrayByScore(this.playersArray)
        const sortedByLevel = this.sortArrayByLevel(sortedByScore)
        const limitedBy10 = this.limitArrayToTopTenPlayers(sortedByLevel)

        const div = document.querySelector(".section-incentive__ranking")
        const table = document.createElement('table')
        const thead = document.createElement('thead')
        const headerRow = document.createElement('tr')

        div.innerHTML = ''

        table.className = "section-incentive__table"

        this.tableHeaderArr.forEach((el) => {
            let th = document.createElement('th')
            th.appendChild(document.createTextNode(el))
            headerRow.appendChild(th)
        })
        thead.appendChild(headerRow)
        table.appendChild(thead)

        limitedBy10.forEach((player) => {
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

    sortArrayByScore(array) {
        return array.concat().sort((obj1, obj2) => obj1.score - obj2.score).reverse()
    }

    sortArrayByLevel(array) {
        return array.concat().sort((obj1, obj2) => obj1.level - obj2.level).reverse()
    }

    limitArrayToTopTenPlayers(array) {
        return array.filter((e, i) => i < 10)
    }

    savePlayerName(name, level, score) {
        this.playersArray = this.playersArray.concat(
            new Player(name, level, score)
        )
        window.localStorage.setItem("ranking", JSON.stringify(this.playersArray))
        this.render()
    }

}