const factEl = document.getElementById('fact');
const catImage = document.getElementById('catImage');
const newCatBtn = document.getElementById('newCat');
const loader = document.getElementById('loader');

async function getCatFact() {
  const res = await fetch('https://catfact.ninja/fact');
  const data = await res.json();
  return data.fact;
}

async function getCatImage() {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await res.json();
  return data[0].url;
}

async function showCat() {
  loader.classList.remove('hidden');
  catImage.classList.add('hidden');
  factEl.textContent = "Loading cat fact...";

  try {
    const [fact, imageUrl] = await Promise.all([getCatFact(), getCatImage()]);

    catImage.src = imageUrl;
    factEl.textContent = fact;

    catImage.onload = () => {
      loader.classList.add('hidden');
      catImage.classList.remove('hidden');
    };
  } catch (error) {
    factEl.textContent = "Oops! Something went wrong 😿";
    loader.classList.add('hidden');
  }
}

newCatBtn.addEventListener('click', showCat);

showCat();