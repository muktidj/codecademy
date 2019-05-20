const team = {
    /*Populate the empty array that corresponds to the _players key in your team object with three actual players. 
    They should be in the following format*/
    _players: [
        {
            firstName: "Mario",
            lastName: "Balotelli",
            age: 25
        },
        {
            firstName: "Riccardo",
            lastName: "Montolivo",
            age: 29
        },
        {
            firstName: "Christian",
            lastName: "Abbiati",
            age: 36
        },
    ],
    /* Populate the empty array that corresponds to the _games key in your object with three actual games. They should be in the following format: */
    _games: [
        {
            opponent: 'Persija',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Persita',
            teamPoints: 90,
            opponentPoints: 100
        },
        {
            opponent: 'Persib',
            teamPoints: 12,
            opponentPoints: 33
        }
    ],
    /* Create getter methods for your _players and _games keys. You do not need to create setter methods, because we don't want anyone to change the values saved to these keys. */
    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },
    
    /*We want to add a new player to your team. Add a method addPlayer to your team object. This method should take in three parameters: firstName, lastName, and age. It should create a player object, and add them to the team's players array. */

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this._players.push(player);
    },
    /*
The scorekeeper has some new information for us! Add a similar method for recording game results called addGame that:

takes in an opponent's name,
your team's points,
the opponent's points,
creates a game object,
adds the game object to your team's games array. */

    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            points: teamPoints,
            opponentPoints: opponentPoints
        };
        this._games.push(game);
    },
        
};

/*
Below your team object, invoke your addPlayer method on the following players: Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76.

Print out the team's players to check they were all properly added. */
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

/*
Invoke your addGame method on three games and print the team's updated games array. */
team.addGame('Ac Milan', 2, 1);
team.addGame('As Roma', 11, 10);
team.addGame('As Monaco', 99, 109);

console.log(team.players);
console.log(team.games);