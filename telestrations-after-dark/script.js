let wordsDatabase = [
    'apple',
    'love',
    'banana',
    'minion',
    'synchrophasotron',
    'sponge',
    'lemongrass',
    'big bad frankenstein'
];
let wordsSelection = [];

function shuffle(database) {
    let currentIndex = database.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [database[currentIndex], database[randomIndex]] = [
        database[randomIndex], database[currentIndex]];
    }
    return database;
}

function generateNewWords() {
    shuffle(wordsDatabase);
    // console.log(wordsDatabase);

    wordsSelection = wordsDatabase.slice(0, 6);
    // console.log(wordsSelection);

    $('.word-1').text(wordsSelection[0]);
    $('.word-2').text(wordsSelection[1]);
    $('.word-3').text(wordsSelection[2]);
    $('.word-4').text(wordsSelection[3]);
    $('.word-5').text(wordsSelection[4]);
    $('.word-6').text(wordsSelection[5]);
}
generateNewWords();

$('.card').on('click', function() {

    $('.flipping-card').toggleClass('flip-card');

    setTimeout(function(){
        generateNewWords();
    }, 150)
    

});

