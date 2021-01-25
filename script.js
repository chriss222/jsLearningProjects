let timesScored;

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ]
    ],
    score: '7:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Lewandowski', 'Hummels', 'Lewandowski'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

    printGoals: function(...players) {
        // Parcurgem vectorul:
        for(let i = 0; i < players.length; i++) {
            // Verificam daca vreunul din jucatori a marcat:
            if(game.scored.includes(players[i])) {
                timesScored = 0; // resetam de cate ori a dat un jucator gol
                // Parcurgem vectorul cu jucatori marcatori:
                for(let j = 0; j < game.scored.length; j++) {
                    // Verificam daca unul dintre jucatorii introdusi se regaseste in vectorul cu jucatori marcatori:
                    if(players[i] === game.scored[j]) {
                        // Daca se regaseste aratam de cate ori a dat gol:
                        timesScored += 1;
                    }     
                }
            // Printam de cate ori a dat jucatorul respectiv gol:
                if(timesScored > 1){
                    console.log(`${players[i]} scored ${timesScored} times.`)
                }   else console.log(`${players[i]} scored ${timesScored} time.`);
            }
            // Daca un jucator introdus nu se regaseste printre cei marcatori doar il printam:
            else console.log(players[i]);;
        }
    }
};

const players1 = [];
const players2 = [];
const [gk, ...fieldPlayers] = [...game.players[0]];
const allPlayers = [...game.players[0], ...game.players[1]];
const players1Final = [...game.players[0], 'Thaigo', 'Coutinho', 'Perisic'];

console.log(gk);
console.log(fieldPlayers);
console.log(allPlayers);

game.printGoals('Lewandowski', 'Thiago', 'Gnarby', 'Hummels');
