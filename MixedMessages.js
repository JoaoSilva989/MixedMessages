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
    'rescuing and adopting a stray animal',
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

var places1 = places[Math.floor(Math.random()*places.length)];
var actions1 = actions[Math.floor(Math.random()*actions.length)];
var characters1 = characters[Math.floor(Math.random()*characters.length)];

console.log("You will be in " + places1 + " " + actions1 + " with " + characters1);
