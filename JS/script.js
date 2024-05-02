let selectedCharacter = null;
let clickedp = []

function toggleSelection(element) {
    if (selectedCharacter !== null) {
        selectedCharacter.classList.remove("selected");
    }
    selectedCharacter = element;
    selectedCharacter.classList.add("selected");
}

    const charactersBoard = document.querySelector(".characters");
    charactersBoard.innerHTML = "";

    for (let i = 1; i <= 24; i++) {
        const names = ["Basil", "Melvin", "Hannah", "Simone", "Ian", "Isla", "Rupert", "Maggie", "Susan", "Natalie", "Kim", "Jamal", "Joshua", "Xiao Mei", "Jennifer", "Brian", "Gary", "Martine", "Bill", "Roy", "Edna", "Mo", "Kelly", "Pete"];
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character");
        characterDiv.innerHTML = `
            <img src="./IMG/faces/character${i}.png" alt="${names[i-1]}">
            <p>${names[i-1]}</p>
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
            <p>${names[i-1]}</p>
        `;
        characterDiv.onclick = function() {
            if (clickedp.includes(this.id)) {
                characterDiv.innerHTML = `
                <img src="./IMG/faces/character${i}.png" alt="${this.id}">
                <p>${this.id}</p>
                `;
                clickedp = clickedp.filter(e => e !== this.id)
                
            } else {
                characterDiv.innerHTML = `
                <img src="./IMG/pressed.png" alt="${this.id}">
                <p>${this.id}</p>
                `;
                clickedp.push(this.id)
            }
        };
        gameBoard.appendChild(characterDiv);
    }

    // Scroll to game board
    document.getElementById("game").scrollIntoView({ behavior: 'smooth' });
}

