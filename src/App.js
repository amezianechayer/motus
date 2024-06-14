import './app.css';
import Grid from './components/grid';
import Header from './components/header';
import Keyboard from './components/keyboard';
import { useState, useEffect } from 'react';

function App() {
  const ALL_FRENCH_WORDS = ["TOUCHE", "PERDRE", "GAGNER", "ABATTU", "JOYEUX"]
 // const [mysteryWord, setMysteryWord] = useState("TOUCHE")
 // const [currentRow, setCurrentRow] = useState(0)
 // const [currentWord, setCurrentWord] = useState("")
 // const [guessedWords, setGuessedWords] = useState([])

  const [mysteryWord, setMysteryWord] = useState("TOUCHE")
  const [currentRow, setCurrentRow] = useState(0)
  const [currentWord, setCurrentWord] = useState("")
  const [guessedWords, setGuessedWords] = useState([])
  const [pressedKey, setPressedKey] = useState("")
  const width = 6
  const height = 6

  const onKeyPress = (key) => {
    setPressedKey(key);
  }

 useEffect(() => {
  if (pressedKey == "") {
    return;
  }

  if (pressedKey !== 'ENTER' && pressedKey !== 'BACKSPACE') {
    if (currentWord == width) {

    } else {
      setCurrentWord(currentWord + pressedKey)
    }
  }

  if (pressedKey === "BACKSPACE") {
    if (currentWord === "") {

    } else {
      setCurrentWord(currentWord.slice(0, -1))
    }
  }

  if (pressedKey == "ENTER") {
    if (currentWord.length < width) {
      console.log("Pas suffisament de lettres !")
    } else {
      if (ALL_FRENCH_WORDS.includes(currentWord)) {
        setCurrentRow(currentRow + 1)
        setGuessedWords(guessedWords + [currentWord])
        setCurrentWord("")
      } else {
        console.log(" Mot qui n'existe pas")
      }
    }
  }
  setPressedKey("")
 }, [pressedKey])
  const getContent = () => {
    const objecteToReturn = {}
    for (let currentWordIndex = 0; currentWordIndex < currentWord.length; currentWordIndex++) {
      objecteToReturn[`${currentRow},${currentWordIndex}`] = {
        color: 'green',
        text: currentWord[currentWordIndex]
      }
    }
    guessedWords.forEach((guessedWord, rowNumber) => {
      for (let guessedWordIndex = 0; guessedWordIndex < guessedWord.length; guessedWordIndex++) {
        const gridRowNumber = rowNumber
        const gridColumnNumber = guessedWordIndex
        const character = guessedWord[guessedWordIndex]
        let color; 
        if (!mysteryWord.includes(character)) {
          color = "blue"
        } else if (mysteryWord[guessedWordIndex] === character) {
          color = "red"
        } else {
          color = "yellow"
        }
        objecteToReturn[`${gridRowNumber},${gridColumnNumber}`] = {
          color: color,
          text: character
        }
        // Scenario 1 : la lettre n'est pas dans le mot mystère => bleu
        // Scenario 2 : La lettre est dans le mot mais dans un emplacement different => jaune
        // Scenario 3 : La lettre est dans le mot et dans le bon emplacement => rouge 
      }
    })
    return objecteToReturn;
  }
  
  const userWon = guessedWords.includes(mysteryWord)
  const userLost = !guessedWords.includes(mysteryWord) && guessedWords.length == height 

  return (
    <div className="app-container">
      <Header/>
      {userWon && <div className='winner'> T'as gagné ! </div>}
      {userLost && <div className='loser'> T'as perdus ! </div>}
      <Grid 
        width={width} 
        height={height} 
        content={getContent()}
        />
      <Keyboard
      onKeyPress={(key) => onKeyPress(key)}
      />
    </div>
  );
}

export default App;
