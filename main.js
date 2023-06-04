const jokes = document.querySelector(".jokes-body");
const button = document.querySelector("#get-jok-btn");

const API_URL = "https://api.chucknorris.io/jokes/random";

const getJoke = async () => {
  const response = await fetch(API_URL);
  const joke = await response.json();
  jokes.innerHTML = joke.value;
};

button.addEventListener("click", getJoke);
