let s_input = document.querySelector('#search_input');
let s_button = document.querySelector('#search_button');
let s_bar = document.querySelector('#search');
let remove_button = document.querySelector('#remove_1');
let shiny_button = document.querySelector('#shiny_button');
let selected_box = null;

let type_colors = {
    normal: "#AAAA99",
    fire: "#FF4422",
    water: "#3399FF",
    electric: "#FFCC33",
    grass: "#77CC55",
    ice: "#66CCFF",
    fighting: "#BB5544",
    poison: "#AA5599",
    ground: "#DDBB55",
    flying: "#8899FF",
    psychic: "#FF5599",
    bug: "#AABB22",
    rock: "#BBAA66",
    ghost: "#6666BB",
    dragon: "#7766EE",
    dark: "#775544",
    steel: "#AAAABB",
    fairy: "#EE99EE"
};

let background_colors = [
    ["#87CEEB", "#4CAF50"],
    ["#FF4422", "#3399FF"],
    ["#DDBB55", "#AA5599"]
];

let bgr_color = 0;
document.querySelector('#bgr_change').addEventListener('click', function () {
    bgr_color = bgr_color + 1;
    if (bgr_color >= background_colors.length) {
        bgr_color = 0;
    }
    let color1 = background_colors[bgr_color][0];
    let color2 = background_colors[bgr_color][1];
    document.body.style.background =
        "linear-gradient(to bottom, " + color1 + ", " + color2 + ")";
});

document.querySelector('#clear_pokemons').addEventListener('click', function () {
    document.querySelectorAll('.box').forEach(function (box) {
        box.innerHTML = "Search a Pokémon";
        box.style.background = "";
        box.classList.remove("selected");
    });

    s_input.value = "";
    s_input.placeholder = "Search Pokémon...";
    selected_box = null;
    s_bar.classList.add("hidden");
    remove_button.classList.add("hidden");
    shiny_button.classList.add("hidden");
});

document.querySelectorAll('.box').forEach(function (box) {
    box.addEventListener('click', function () {
        if (selected_box) {
            selected_box.classList.remove('selected');
        }
        selected_box = box;
        box.classList.add('selected');
        s_bar.classList.remove('hidden');
        remove_button.classList.remove('hidden');
        shiny_button.classList.remove('hidden');
        s_input.value = "";
        s_input.placeholder = "Search Pokémon...";
        s_input.focus();
    });
});

remove_button.addEventListener('click', function () {
    if (selected_box) {
        selected_box.innerHTML = "Search a Pokémon";
        selected_box.style.background = "";
        selected_box.classList.remove("selected");
        selected_box = null;
        s_bar.classList.add("hidden");
        remove_button.classList.add("hidden");
        shiny_button.classList.add("hidden");
    }
});

async function search_pokemon() {
    let name = s_input.value.trim().toLowerCase();
    if (name === "" || selected_box === null) {
        return;
    }

    try {
        let response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + name
        );

        if (!response.ok) {
            s_input.value = "";
            s_input.placeholder = "Pokémon not found, try again";
            return;
        }

        let data = await response.json();
        let sprite = data.sprites.front_default;
        if (!sprite) {
            s_input.value = "";
            s_input.placeholder = "No sprite available";
            return;
        }

        selected_box.innerHTML = "";

        let img = document.createElement("img");
        img.src = sprite;
        img.alt = data.name;
        selected_box.appendChild(img);

        selected_box.dataset.default = data.sprites.front_default;
        selected_box.dataset.shiny = data.sprites.front_shiny || "";
        selected_box.dataset.is_shiny = "false";

        let types = data.types.map(function (e) {
            return e.type.name;
        });

        let color1 = type_colors[types[0]];

        if (types.length === 2) {
            let color2 = type_colors[types[1]];
            selected_box.style.background =
                "linear-gradient(135deg, " + color1 + " 50%, " + color2 + " 50%)";
        } else {
            selected_box.style.background = color1;
        }
        selected_box.classList.remove("selected");
        selected_box = null;
        s_input.value = "";
        s_input.placeholder = "Search Pokémon...";
        s_bar.classList.add("hidden");
        remove_button.classList.add("hidden");
        shiny_button.classList.add("hidden");

    } catch (error) {
        console.log("Something went wrong:", error);
        s_input.value = "";
        s_input.placeholder = "Network error, try again";
    }
}

shiny_button.addEventListener('click', function () {
    if (!selected_box) return;

    let img = selected_box.querySelector('img');
    if (!img) return;   // empty box, nothing to toggle

    if (selected_box.dataset.is_shiny === "true") {
        img.src = selected_box.dataset.default;
        selected_box.dataset.is_shiny = "false";
    } else {
        if (!selected_box.dataset.shiny) return;   // no shiny sprite exists
        img.src = selected_box.dataset.shiny;
        selected_box.dataset.is_shiny = "true";
    }
});

s_button.addEventListener('click', search_pokemon);
s_input.addEventListener('keydown', function (keypress) {
    if (keypress.key === 'Enter') {
        search_pokemon();
    }
});

// Trainer sprites
let trainers = [
    "Characters/red-gen3.png",
    "Characters/leaf-gen3.png",
    "Characters/ethan.png",
    "Characters/lyra.png",
    "Characters/brendan-gen3.png",
    "Characters/may-gen3.png"
];

let char_num = 0;
document.querySelector('#character').addEventListener('click', function () {
    char_num++;
    if (char_num >= trainers.length) {
        char_num = 0;
    }

    document.querySelector('#character').src = trainers[char_num];

    if (selected_box) {
        selected_box.classList.remove("selected");
        selected_box = null;
    }
    s_bar.classList.add("hidden");
    remove_button.classList.add("hidden");
    shiny_button.classList.add("hidden");
});