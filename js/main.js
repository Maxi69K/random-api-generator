// Random API Generator
const displayJoke = document.getElementById('display-joke');
const getJokeBtn = document.getElementById('get-joke');

getJokeBtn.addEventListener('click', getRandomJoke);

function getRandomJoke() {
    const ajax = new XMLHttpRequest();
    const url = 'https://api.chucknorris.io/jokes/random';
    ajax.open('GET', url, true);
    ajax.onreadystatechange = () => {
        if (ajax.status === 200 && ajax.readyState === 4) {
            let data = JSON.parse(ajax.responseText);
            displayJoke.innerHTML = `${data.value}`;
        } else {
            ajax.onerror = onerror();
        }
    };
    ajax.send();
}

function onerror() {
    displayJoke.textContent = 'This is a Error!';
}