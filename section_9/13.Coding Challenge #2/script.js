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
    date: 'Nov 9th, 2023',
    odds:{
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    },
    scorer : function(...players){
        console.log(...this.srored,...players)
    }
}
//1
for(let [i, scorer] of game.srored.entries()){
    console.log(`Goat ${i+1}: ${scorer}`)
}
//2
let odds = Object.values(game?.odds) 
let ave = 0
for (let odd of odds){
    // console.log(odd)
    ave += odd
}
ave/=odds.length
console.log(ave)
//3

for (let [name, value] of Object.entries(game.odds)){
    const check = name === 'x' ? 'draw' : 'thắng của ' + game[name]
    console.log(`Tỉ lệ ${check} là ${value}`)
}