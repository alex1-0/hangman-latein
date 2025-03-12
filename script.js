// Hier können Sie die Wortliste erweitern
const words = [
    { word: "ADESSE", translation: "da sein, helfen" },
    { word: "AUDERE", translation: "wagen" },
    { word: "CUR", translation: "Warum" },
    { word: "DEBERE", translation: "müssen, sollen, schulden" },
    { word: "DOMINUS", translation: "der Herr" },
    { word: "DUBITARE", translation: "zögern, zweifeln" },
    { word: "EQUUS", translation: "das Pferd" },
    { word: "ESSE", translation: "sein, sich befinden" },
    { word: "ET", translation: "und, und auch" },
    { word: "ETIAM", translation: "auch, sogar, (m. Komperativ: noch)" },
    { word: "HUC", translation: "hierher" },
    { word: "IAM", translation: "schon, bereits, nun" },
    { word: "IBI", translation: "dort, da" },
    { word: "ITAQUE", translation: "deshalb" },
    { word: "NON", translation: "nicht" },
    { word: "ORARE", translation: "bitten, beten, anbeten" },
    { word: "POPULUS", translation: "das Volk" },
    { word: "SED", translation: "aber, sondern" },
    { word: "SERVUS", translation: "der Sklave, der Diener" },
    { word: "SOLUM", translation: "nur" },
    { word: "STARE", translation: "stehen" },
    { word: "TANDEM", translation: "endlich, schließlich" },
    { word: "TUM", translation: "da, dann, damals" },
    { word: "VENIRE", translation: "kommen" },
    { word: "VICTORIA", translation: "der Sieg" },
    { word: "VIDERE", translation: "sehen" }
];

let selectedWordObj = null; // Speichert das aktuelle Wort-Objekt
let lastWord = ""; // Speichert das zuletzt verwendete Wort
let guessedLetters = [];
let timeElapsed = 0;
let timerInterval;
let mistakes = 0;
let gameEnded = false; // Neuer Zustand, um das Spielende zu verfolgen
let wins = 0; // Counter für gewonnene Spiele
let losses = 0; // Counter für verlorene Spiele

const hangmanSvg = document.getElementById("hangman-svg");
const wordDisplay = document.getElementById("word-display");
const lettersDiv = document.getElementById("letters");
const messageDiv = document.getElementById("message");
const translationDiv = document.getElementById("translation");
const timerDiv = document.getElementById("timer");
const resetButton = document.getElementById("reset-button");
const winsSpan = document.getElementById("wins"); // Counter für gewonnene Spiele
const lossesSpan = document.getElementById("losses"); // Counter für verlorene Spiele

const hangmanParts = [
    { id: "gallows", draw: (svg) => drawLine(svg, 50, 220, 150, 220) }, // Galgenbasis
    { id: "pole", draw: (svg) => drawLine(svg, 100, 220, 100, 50) },   // Galgenstange
    { id: "beam", draw: (svg) => drawLine(svg, 100, 50, 150, 50) },    // Galgenbalken
    { id: "rope", draw: (svg) => drawLine(svg, 150, 50, 150, 70) },   // Seil
    { id: "head", draw: (svg) => drawCircle(svg, 150, 90, 20) },       // Kopf
    { id: "body", draw: (svg) => drawLine(svg, 150, 110, 150, 170) }, // Körper
    { id: "left-arm", draw: (svg) => drawLine(svg, 150, 130, 120, 150) }, // Linker Arm
    { id: "right-arm", draw: (svg) => drawLine(svg, 150, 130, 180, 150) }, // Rechter Arm
    { id: "left-leg", draw: (svg) => drawLine(svg, 150, 170, 120, 200) },  // Linkes Bein
    { id: "right-leg", draw: (svg) => drawLine(svg, 150, 170, 180, 200) }  // Rechtes Bein
];

function init() {
    selectedWordObj = getRandomWord(); // Zufälliges Wort-Objekt auswählen
    guessedLetters = [];
    mistakes = 0;
    timeElapsed = 0;
    gameEnded = false; // Spielzustand zurücksetzen
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    updateWordDisplay();
    createLetterButtons();
    updateHangmanDisplay();
    messageDiv.textContent = "";
    translationDiv.textContent = ""; // Deutsche Bedeutung zurücksetzen
    timerDiv.textContent = `Verstrichene Zeit: ${timeElapsed}s`;
    resetHangman();
}

function getRandomWord() {
    let newWordObj;
    do {
        newWordObj = words[Math.floor(Math.random() * words.length)];
    } while (newWordObj.word === lastWord); // Wiederhole, bis ein anderes Wort ausgewählt wird
    lastWord = newWordObj.word; // Speichere das neue Wort als zuletzt verwendet
    return newWordObj;
}

function updateWordDisplay() {
    wordDisplay.textContent = selectedWordObj.word
        .split("")
        .map(letter => guessedLetters.includes(letter) ? letter : "_")
        .join(" ");
}

function createLetterButtons() {
    lettersDiv.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const button = document.createElement("button");
        button.textContent = letter;
        button.classList.add("letter-button");
        button.addEventListener("click", () => guessLetter(letter, button));
        if (gameEnded || guessedLetters.includes(letter)) {
            button.disabled = true; // Buttons deaktivieren, wenn das Spiel beendet ist oder der Buchstabe bereits geraten wurde
        }
        lettersDiv.appendChild(button);
    }
}

function guessLetter(letter, button) {
    if (!guessedLetters.includes(letter) && !gameEnded) {
        guessedLetters.push(letter);
        button.disabled = true; // Deaktiviere den Button nach dem Klicken
        if (!selectedWordObj.word.includes(letter)) {
            mistakes++;
            updateHangmanDisplay();
        }
        updateWordDisplay();
        checkGameStatus();
    }
}

function updateHangmanDisplay() {
    if (mistakes > 0 && mistakes <= hangmanParts.length) {
        hangmanParts[mistakes - 1].draw(hangmanSvg);
    }
}

function resetHangman() {
    hangmanSvg.innerHTML = ""; // SVG leeren
}

function checkGameStatus() {
    if (selectedWordObj.word.split("").every(letter => guessedLetters.includes(letter))) {
        messageDiv.textContent = "Gewonnen!";
        translationDiv.textContent = `Deutsche Bedeutung: ${selectedWordObj.translation}`; // Deutsche Bedeutung anzeigen
        wins++; // Gewonnen-Counter erhöhen
        winsSpan.textContent = wins; // Gewonnen-Counter aktualisieren
        gameEnded = true; // Spiel beenden
        clearInterval(timerInterval);
        disableLetterButtons();
    } else if (mistakes >= hangmanParts.length) {
        messageDiv.textContent = `Verloren! Das Wort war: ${selectedWordObj.word}`;
        translationDiv.textContent = `Deutsche Bedeutung: ${selectedWordObj.translation}`; // Deutsche Bedeutung anzeigen
        losses++; // Verloren-Counter erhöhen
        lossesSpan.textContent = losses; // Verloren-Counter aktualisieren
        gameEnded = true; // Spiel beenden
        clearInterval(timerInterval);
        disableLetterButtons();
    }
}

function disableLetterButtons() {
    const buttons = document.querySelectorAll(".letter-button");
    buttons.forEach(button => {
        button.disabled = true; // Alle Buttons deaktivieren
    });
}

function updateTimer() {
    if (!gameEnded) {
        timeElapsed++;
        timerDiv.textContent = `Verstrichene Zeit: ${timeElapsed}s`;
    }
}

function drawLine(svg, x1, y1, x2, y2) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
}

function drawCircle(svg, cx, cy, r) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "2");
    circle.setAttribute("fill", "transparent");
    svg.appendChild(circle);
}

resetButton.addEventListener("click", init);

init();
