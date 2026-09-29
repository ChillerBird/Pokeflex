window.addEventListener("load", function () {
    console.log("The page has loaded");
});

document.querySelector('#box1').addEventListener('click', async function () {
    document.querySelector('#box1').style.backgroundColor = "#FF4422";
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/cinderace");
    let data = await response.json();
    document.querySelector("#box1").innerHTML = '<img src="' + data.sprites.front_default + '">';
});

document.querySelector('#box2').addEventListener('click', async function () {
    document.querySelector('#box2').style.backgroundColor = "#A3A3B3";
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/corviknight");
    let data = await response.json();
    document.querySelector("#box2").innerHTML = '<img src="' + data.sprites.front_default + '">';
});

document.querySelector('#box3').addEventListener('click', async function () {
    document.querySelector('#box3').style.backgroundColor = "#3399FF";
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/drednaw");
    let data = await response.json();
    document.querySelector("#box3").innerHTML = '<img src="' + data.sprites.front_default + '">';
});

document.querySelector('#box4').addEventListener('click', async function () {
    document.querySelector('#box4').style.backgroundColor = "#AA5599";
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/toxtricity-amped");
    let data = await response.json();
    document.querySelector("#box4").innerHTML = '<img src="' + data.sprites.front_default + '">';
});
document.querySelector('#box5').addEventListener('click', async function () {
    document.querySelector('#box5').style.backgroundColor = "#7766EE";
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/dragapult");
    let data = await response.json();
    document.querySelector("#box5").innerHTML = '<img src="' + data.sprites.front_default + '">';
});

document.querySelector('#box6').addEventListener('click', async function () {
    document.querySelector('#box6').style.backgroundColor = "#DDBB55";
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/excadrill");
    let data = await response.json();
    document.querySelector("#box6").innerHTML = '<img src="' + data.sprites.front_default + '">';
});


let trainers = [
    "../Characters/red-gen3.png",
    "../Characters/leaf-gen3.png",
    "../Characters/ethan.png",
    "../Characters/lyra.png",
    "../Characters/brendan-gen3.png",
    "../Characters/may-gen3.png"
]

let char_num = 0;

document.querySelector('#character').addEventListener('click', function () {
    char_num = char_num + 1;
    if (char_num >= trainers.length) {
        char_num = 0;
    }
    document.querySelector('#character').src = trainers[char_num]
});




