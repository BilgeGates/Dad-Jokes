const joke = document.getElementById("joke");
const btn = document.getElementById("bTn");

btn.addEventListener("click", getJoke);

async function getJoke() {
  const value = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com", value);

  const data = await response.json();

  joke.innerHTML = data.joke;
}
