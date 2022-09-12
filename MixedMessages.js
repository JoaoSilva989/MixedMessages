const places = ['Mars',
    'Valhalla',
    'Wakanda',
    'Howgwarts',
    'Metropolis',
    'Springfield',
    'King\'s Landing',
    'Atlantis',
    'Hell',
    'Gotham']
const actions = [
    'getting hit by a vehicle',
    'finding a 50$ bill on the floor',
    'breaking a leg while running away from a disco',
    'rescuing and adopting a stray animal',
    'breaking a nail',
    'getting asked out on a date',
    'fighthing a duel',
    'worshiping a fake god',
    'eating mom\'s spaghetti',
    'pranking an old lady',
    'fighting against homer'
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
    'Jimmy Carey',
    'Batman'
]

let mixedMessage = document.getElementById('mixedMessage');
let button = document.getElementById('messageButton');


function messageSelector() {

var places1 = places[Math.floor(Math.random()*places.length)];
var actions1 = actions[Math.floor(Math.random()*actions.length)];
var characters1 = characters[Math.floor(Math.random()*characters.length)];

return "You will be in " + places1 + " " + actions1 + " with " + characters1;

}

function imageSelector(message) {


    if (message.includes('Gotham') && message.includes('Batman')) {
        batmanImg.style.display = 'block';
        eminemImg.style.display = 'none';
        peterImg.style.display = 'none';
        return true;
    }
    else if (message.includes('eating mom\'s spaghetti') && message.includes('Eminem')) {
        eminemImg.style.display = 'block';
        peterImg.style.display = 'none';
        batmanImg.style.display = 'none';
        return true;
    }
    else if (message.includes('Springfield') && message.includes('fighting against homer') && message.includes('Peter Griffin')) {
        peterImg.style.display = 'block';
        eminemImg.style.display = 'none';
        batmanImg.style.display = 'none';
        return true;
    }
    else {
        batmanImg.style.display = 'none';
        peterImg.style.display = 'none';
        eminemImg.style.display = 'none';
        return false;
    }

}

async function showMessage() {

  // Uncomment to make function automatic until an image appears

    /*var count = 0;
    //var isImage = false;
    //while (isImage === false) {*/
        var message = messageSelector();
        mixedMessage.innerHTML = message;
        //isImage = imageSelector(message);
        batmanImg.innerHTML = imageSelector(message);
        button.style.cursor = 'default';
        /*count++;
        console.log(count + ' ' + message);
        await new Promise(resolve => setTimeout(resolve, 100));
    }*/
}

button.addEventListener('click', showMessage);
