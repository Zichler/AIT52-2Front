const img = document.querySelector("#dog-img");
const btnUpd = document.querySelector("#btn-update");
const characterImg = document.querySelector("#character-img");
const characterName = document.querySelector("#character-name");
const characterStatus = document.querySelector("#character-status");
const characterOrigin = document.querySelector("#character-origin");

function getDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
      img.src = data.message;
    });
}

function getCharacter() {
  fetch("https://rickandmortyapi.com/api/character/1")  // Замена "1" на ID нужного персонажа
    .then(res => res.json())
    .then(data => {
      characterImg.src = data.image;
      characterName.textContent = data.name;
      characterStatus.textContent = data.status;
      characterOrigin.textContent = data.origin.name;
    });
}

getDog();
getCharacter();

btnUpd.addEventListener('click', getDog);
