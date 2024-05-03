let selectedCharacter = null;
let clickedp = []

function deleteButtons() {
    document.querySelector('#hidebuttons').hidden = true
}

function toggleSelection(element) {
    if (selectedCharacter !== null) {
        selectedCharacter.classList.remove("selected");
    }
    selectedCharacter = element;
    selectedCharacter.classList.add("selected");
}

function getRandomCharacter() {
    const characters = document.querySelectorAll(".character");
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

const charactersBoard = document.querySelector(".characters");
charactersBoard.innerHTML = "";

for (let i = 1; i <= 24; i++) {
    const names = ["Basil", "Melvin", "Hannah", "Simone", "Ian", "Isla", "Rupert", "Maggie", "Susan", "Natalie", "Kim", "Jamal", "Joshua", "Xiao Mei", "Jennifer", "Brian", "Gary", "Martine", "Bill", "Roy", "Edna", "Mo", "Kelly", "Pete"];
    const characterDiv = document.createElement("div");
    characterDiv.classList.add("character");
    characterDiv.innerHTML = `
        <img src="./IMG/faces/character${i}.png" alt="${names[i-1]}">
        <p style='color: #fff;'>${names[i-1]}</p>
    `;
    characterDiv.onclick = function() {
        toggleSelection(characterDiv)
    };
    charactersBoard.appendChild(characterDiv);
}


function startGame() {
    if (selectedCharacter === null) {
        alert("Please select a character before starting the game.");
        return;
    }

    const gameBoard = document.querySelector(".board");
    gameBoard.innerHTML = "";
    const selectedCharacterName = selectedCharacter.querySelector("p").textContent;
    

    // Remove all character divs except the selected one
    const charactersToRemove = document.querySelectorAll('.character');
    charactersToRemove.forEach(character => {
        const characterName = character.querySelector("p").textContent;
        if (characterName !== selectedCharacterName) {
            character.remove();
        }
    });

    const charactersBoard = document.querySelector(".characters");
    charactersBoard.querySelector('img').style = `
    width: 200px;
    height: 200px;
    margin: 10px;
    cursor: pointer;`

    for (let i = 1; i <= 24; i++) {
        const names = ["Basil", "Melvin", "Hannah", "Simone", "Ian", "Isla", "Rupert", "Maggie", "Susan", "Natalie", "Kim", "Jamal", "Joshua", "Xiao Mei", "Jennifer", "Brian", "Gary", "Martine", "Bill", "Roy", "Edna", "Mo", "Kelly", "Pete"]
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character");
        characterDiv.id = names[i-1]
        characterDiv.innerHTML = `
            <img src="./IMG/faces/character${i}.png" alt="${names[i-1]}" id="${names[i-1]}">
            <p style='color: #fff;'>${names[i-1]}</p>
        `;
        characterDiv.onclick = function() {
            if (clickedp.includes(this.id)) {
                characterDiv.innerHTML = `
                <img src="./IMG/faces/character${i}.png" alt="${this.id}">
                <p style='color: #fff;'>${this.id}</p>
                `;
                clickedp = clickedp.filter(e => e !== this.id)
                
            } else {
                characterDiv.innerHTML = `
                <img src="./IMG/pressed.png" alt="${this.id}">
                <p style='color: #fff;'>${this.id}</p>
                `;
                clickedp.push(this.id)
            }
        };
        gameBoard.appendChild(characterDiv);
    }

    deleteButtons()
    document.querySelectorAll(".afterstart").forEach(el => {
        el.hidden = false;
    })
    document.querySelectorAll(".hideafterstart").forEach(el => {
        el.hidden = true;
    })
    document.getElementById('chosen').textContent = 'Your Character Is:'
    document.querySelector('.character.selected p').style = `
    font-weight: bold;
    color: greenyellow;
    font-size: 50px;
    `

    // Scroll to game board
    document.getElementById("game").scrollIntoView({ behavior: 'smooth' });
}

function randomCharacterSelect() {
    const randomCharacter = getRandomCharacter();
    toggleSelection(randomCharacter);
}

