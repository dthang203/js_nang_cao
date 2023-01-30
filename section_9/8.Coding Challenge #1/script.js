const game ={
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'play1',
            'play2',
            'play3',
            'play4',
            'play5',
            'play6',
            'play7',
            'play8',
            'play9',
            'play10',
            'play11',
        ],
        [
            'abc1',
            'abc2',
            'abc3',
            'abc4',
            'abc5',
            'abc6',
            'abc7',
            'abc8',
            'abc9',
            'abc10',
            'abc11',
        ],
    ],
    score: '4.0',
    srored:['abc10','abc7','play1','play2','play3'],
    date: 'Jan 30th, 2023',
    odds:{
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    },
    scorer : function(...players){
        console.log(...this.srored,...players)
    }
}

//get player 1 and player 2 or each team
const [player1,player2] = game.players
console.log(player1,player2)

//2
const[gk1, ...fieldPlayers1] = player1
const[gk2, ...fieldPlayers2] = player1

//3
const allPlayers = [...player1,...player2]
console.log(allPlayers)
//4
const playersFinal = [...player1,'Thiago','Coutinho','Perisic']
//5
const {team1, x: draw,team2} = game.odds
console.log(team1, draw, team2)
//6
game.scorer('hang')
//7
team1 > team2 && console.log('Team 1 win')