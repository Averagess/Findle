import { useEffect, useState } from "react";

import BackgroundBlur from "./components/BackgroundBlur";
import EmptyGrid from "./components/EmptyGrid";
import Footer from "./components/Footer";
import GuessGrid from "./components/GuessGrid";
import InputGrid from "./components/InputGrid";
import Keyboard from "./components/Keyboard";
import NavBar from "./components/NavBar";
import Popup from "./components/Popup";

import allowedChars from "./assets/allowedChars";
import words from "./assets/words";
import TutorialPopup from "./components/TutorialPopup";
import "./styles.css";

function App() {
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [showTutorial, setShowTutorial] = useState<boolean>(false);
  const [shouldShake, setShouldShake] = useState<boolean>(false);

  const setupGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    console.log("Random word set to: " + randomWord);
    setCurrentWord(randomWord);
    setInput("");
    setGuesses([]);
    setModalOpen(false);
    setGameOver(false);
  };

  useEffect(() => {
    setupGame();
  }, []);

  useEffect(() => {
    if (shouldShake) setTimeout(() => setShouldShake(false), 500);
  }, [shouldShake]);

  if (!currentWord) return <h1>Loading word.....</h1>;

  const handleKeyDown = (key: string) => {
    if (showTutorial || gameOver) return;
    const upperCaseKey = key.toUpperCase();

    if (
      key.length === 1 &&
      allowedChars.includes(upperCaseKey) &&
      input.length < 5
    ) {
      setInput((oldInput) => oldInput + upperCaseKey);
    } else if (upperCaseKey === "BACKSPACE" || upperCaseKey === "BACK") {
      setInput((oldInput) => oldInput.slice(0, oldInput.length - 1));
    } else if (upperCaseKey === "ENTER" && input.length === 5) {
      if (!words.includes(input)) {
        console.log(`input ${input} not in wordlist`);
        setShouldShake(true);
        return;
      }

      setGuesses((old) => [...old, input]);
      setInput("");
    }
  };

  const PastGuessElements = guesses.map((guess, index) => (
    <GuessGrid key={index} guessString={guess} correctString={currentWord} />
  ));

  const EmptyGuessElements: JSX.Element[] =
    PastGuessElements.length < 5
      ? new Array(5 - guesses.length - 1)
          .fill(null)
          .map((_, index) => <EmptyGrid key={index} />)
      : [];

  if (
    !gameOver &&
    !modalOpen &&
    (PastGuessElements.length === 5 ||
      guesses[guesses.length - 1] === currentWord)
  ) {
    setTimeout(() => {
      setModalOpen(true);
      setGameOver(true);
    }, 3500);
  }

  return (
    <div
      className="App"
      onKeyDown={(event) => handleKeyDown(event.key)}
      tabIndex={0}
    >
      <NavBar toggleTutorial={() => setShowTutorial(true)} />
      <div className="main-container">
        {/* <h1 style={{ color: "white", fontSize: "24px" }}>[ {currentWord} ]</h1> */}
        {PastGuessElements}
        {PastGuessElements.length < 5 && (
          <InputGrid value={input} shouldAnimateShake={shouldShake} />
        )}
        {EmptyGuessElements}
        <Keyboard
          correctString={currentWord}
          guesses={guesses}
          changeInput={handleKeyDown}
        />
        {gameOver && (
          <button
            style={{ marginTop: "15px" }}
            className="general-button"
            onClick={() => setModalOpen(true)}
          >
            show results
          </button>
        )}
      </div>
      {showTutorial && (
        <BackgroundBlur>
          <TutorialPopup closePopup={() => setShowTutorial(false)} />
        </BackgroundBlur>
      )}

      {modalOpen && (
        <BackgroundBlur>
          <Popup
            correctWord={currentWord}
            guesses={guesses}
            closeModal={() => setModalOpen(false)}
            resetGame={setupGame}
          />
        </BackgroundBlur>
      )}
      <Footer />
    </div>
  );
}

export default App;
