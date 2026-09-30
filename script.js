window.addEventListener("load", function () {
    console.log("The page has loaded");
});

document.querySelector('#box1').addEventListener('click', async function () {

    // Changes the background color of box1
    document.querySelector('#box1').style.backgroundColor = "#FF4422";

    // Sends a request to the PokéAPI to get Cinderace's data
    // "await" waits for the API to send back a response
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/cinderace");

    // Converts the response from JSON into a JavaScript object
    let data = await response.json();

    // Replaces the number "1" with an image
    // data.sprites.front_default contains the URL of Cinderace's sprite
    document.querySelector("#box1").innerHTML =
        '<img src="' + data.sprites.front_default + '">';
});

document.querySelector('#box2').addEventListener('click', async function () {
    document.querySelector('#box2').style.backgroundColor = "#A3A3B3";
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/corviknight");
    let data = await response.json();
    document.querySelector("#box2").innerHTML =
        '<img src="' + data.sprites.front_default + '">';
});

document.querySelector('#box3').addEventListener('click', async function () {
    document.querySelector('#box3').style.backgroundColor = "#3399FF";
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/drednaw");
    let data = await response.json();
    document.querySelector("#box3").innerHTML =
        '<img src="' + data.sprites.front_default + '">';
});

document.querySelector('#box4').addEventListener('click', async function () {
    document.querySelector('#box4').style.backgroundColor = "#AA5599";
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/toxtricity-amped");
    let data = await response.json();
    document.querySelector("#box4").innerHTML =
        '<img src="' + data.sprites.front_default + '">';
});

document.querySelector('#box5').addEventListener('click', async function () {
    document.querySelector('#box5').style.backgroundColor = "#7766EE";
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/dragapult");
    let data = await response.json();
    document.querySelector("#box5").innerHTML =
        '<img src="' + data.sprites.front_default + '">';
});

document.querySelector('#box6').addEventListener('click', async function () {
    document.querySelector('#box6').style.backgroundColor = "#DDBB55";
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/excadrill");
    let data = await response.json();
    document.querySelector("#box6").innerHTML =
        '<img src="' + data.sprites.front_default + '">';
});


// Creates an array containing the paths to all trainer images
let trainers = [
    "../Characters/red-gen3.png",
    "../Characters/leaf-gen3.png",
    "../Characters/ethan.png",
    "../Characters/lyra.png",
    "../Characters/brendan-gen3.png",
    "../Characters/may-gen3.png"
];

// Keeps track of which trainer is currently being displayed
// Arrays start counting at 0, so Red is trainer 0
let char_num = 0;


// Finds the trainer image and waits for it to be clicked
document.querySelector('#character').addEventListener('click', function () {
    // Moves to the next trainer in the array
    char_num = char_num + 1;

    // Checks if we have gone past the last trainer
    if (char_num >= trainers.length) {

        // Goes back to the first trainer which is array number 0 (Red)
        char_num = 0;
    }

    // Changes the image source to the next trainer
    document.querySelector('#character').src = trainers[char_num];
});