var dayOfWeek = "Monday"
console.log(dayOfWeek)
var dayOfWeek = "Friday"
console.log(`I can’t wait for ${dayOfWeek}`)

let animalInput = prompt('What is your favorite animal?')
let colorInput =  prompt('What is your favorite color?')
console.log(`I’ve never seen a ${colorInput} ${animalInput}!`)

// favorite breakfast = breakfast burrito
// favorite lunch = bigmac
// favorite dinner = fetticine alfredo

let timeOfDay = 1800
let timeOfDayMeals;
if (timeOfDay < 1200) {
    timeOfDayMeals = "breakfast burrito"
}
else if (timeOfDay >= 1200 && timeOfDay <= 1700) {
    timeOfDayMeals = "bigmac"
}
else if (timeOfDay > 1700) {
    timeOfDayMeals = "fetticine alfredo"
}
console.log(`It's ${timeOfDay} and you like to eat ${timeOfDayMeals}.`)

var randomNumber = Math.floor(Math.random() * 10);
if (randomNumber <= 2) {
    console.log(`Beatles`)
}
else if (randomNumber >= 3 && randomNumber <= 5) {
    console.log(`Stones`)
}
else if (randomNumber >= 6 && randomNumber <= 8) {
    console.log(`Floyd`)
}
else if (randomNumber >= 9) {
    console.log(`Hendrix`)
}

for (let index = 0; index < 7; index++) {
    console.log(`JavaScript is cool!`)
}

for (let i = 0; i < 11; i++) {
    console.log(i);
}

for (let i = 0; i < 11; i++) {
    console.log(`hello`);
    console.log(`goodbye`);
}



function printMovieName(){
    let favoriteMovie = "Braveheart";
    console.log(favoriteMovie);
    return favoriteMovie;
}
printMovieName()

function favoriteBand(){
    let userInput = prompt("what is your favorite band?");
    return userInput
}
let band = favoriteBand()
console.log(band)

function concertDisplay(musicalAct){
    let myStreet = prompt("what street do you live on?");
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}!`)
}
concertDisplay("shindown")

let desktopItems = ['desk', 'lamp', 'computer screen']
console.log(desktopItems[1])
desktopItems.push('mic')

for(let i = 0; i < desktopItems.length; i++){
    console.log(desktopItems[i]);
  }



function guessGame() {
    var magicNumber = Math.random() * 101 | 0,
        guess,
        text = 'Guess a number:';
    do {
        guess = prompt(text);
        if (magicNumber - guess < 10) {
            text = "You're getting warmer!";
        } 
        else if (magicNumber > guess) {
            text = "You've guessed too low!";
        } 
        else if (magicNumber < guess) {
            text = "You've guessed too high!";
        }
    } while (guess != magicNumber);
    document.write("Good Job!");
}
guessGame();