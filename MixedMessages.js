const places = ['Mars',
    'Valhalla',
    'Wakanda',
    'Howgwarts',
    'Metropolis',
    'Springfield',
    'King\'s Landing',
    'Atlantis',
    'Hell']
const actions = [
    'getting hit by a vehicle',
    'finding a 50$ bill on the floor',
    'breaking a leg while running away from a disco',
    'rescuing and adopt a stray animal',
    'breaking a nail',
    'getting asked out on a date',
    'fighthing a duel',
    'worshiping a fake god',
    'eating spaghetti',
    'pranking an old lady'
]
const characters = [
    'SpongeBob',
    'Naruto',
    'Abraham Lincoln',
    'Peter Griffin',
    'Eminem',
    'Jonnhy Bravo',
    'Morty',
    'DeadPool',
    'Michael Scott',
    'Jimmy Carey'
]

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }

let Rplaces = [];
let Ractions = [];
let Rcharacters = [];

for (place in places) {
    let optionp = generateRandomNumber(places[place].length)

    Rplaces.push(places[place][optionp])
}

for (action in actions) {
    let optiona = generateRandomNumber(actions[action].length)

    Ractions.push(actions[action][optiona])
}

for (character in characters) {
    let optionc = generateRandomNumber(characters[character].length)

    Rcharacters.push(characters[character][optionc])
}



