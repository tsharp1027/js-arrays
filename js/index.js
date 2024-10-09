const spellBook = ['Expelliarmus', 'Accio', 'Expecto Patronum', 'wingardium Leviosa'];
let mannaPoints = 50;

const castSpell = () => {
//Don't allow the user to cast a spell if they have less than 5 manna points
if (mannaPoints < 5){
    const spellElement = document.getElementById('spell');
    spellElement.textContent = 'Not enough points to cast a spell!';
    return; //exit the function early
}    

// choose a random spell from the array
const randomIndex = Math.floor(Math.random()* spellBook.length);
const randomSpell = spellBook[randomIndex];

//show the user the spell on the screen
const spellElement = document.getElementById('spell');
const message = `You cast the ${randomSpell} spell`;
spellElement.textContent = message;

// subtract 5 manna points from the total
mannaPoints = mannaPoints - 5;

//don't allow manna points to go negative
mannaPoints = Math.max(0, mannaPoints);
//console.log('mannaPoints', mannaPoints);

// show the user the new manna points on the screen
const mannaElement = document.getElementById('manna-points');
mannaElement.textContent = mannaPoints;
}