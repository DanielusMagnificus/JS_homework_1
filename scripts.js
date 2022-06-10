let numberToGuess = Math.floor(Math.random() * 10)

function guessNumber() {
    let unos = parseInt(document.getElementById("unos").value);
    console.log(unos);
    unos == numberToGuess ? console.log("POGODAK") : unos ? unos > numberToGuess ? console.log("TRAZENI BROJ JE MANJI") : console.log("TRAZENI BROJ JE VECI") : console.log("NEISPRAVAN UNOS")
}

