import { useEffect, useState } from "react";

import EmptyGrid from "./components/EmptyGrid";
import GuessGrid from "./components/GuessGrid";
import InputGrid from "./components/InputGrid";
import Popup from "./components/Popup";

import words from "./assets/words";
import "./styles.css";
import NavBar from "./components/NavBar";
import Keyboard from "./components/Keyboard";

function App() {
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const setupGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    console.log("Random word set: " + randomWord);
    setCurrentWord(randomWord);
    setInput("");
    setGuesses([]);
    closeModal();
    setGameOver(false);
  };

  useEffect(() => {
    setupGame();
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  const changeInput = (key: string) => {
    if (key.length === 1 && input.length < 5 && !gameOver) {
      setInput((old) => old + key.toUpperCase());
    } else if (key.toUpperCase() === "BACK") {
      setInput((old) => old.slice(0, old.length - 1));
    } else if (key.toUpperCase() === "ENTER" && input.length === 5) {
      setGuesses((old) => [...old, input]);
      setInput("");
    }
  };



  const handleKeyDown = (event: React.KeyboardEvent) => {
    console.log(event.key);
    if (event.key.length === 1 && input.length < 5 && !gameOver) {
      setInput(input + event.key.toUpperCase());
    } else if (event.key === "Backspace") {
      setInput(input.slice(0, input.length - 1));
    } else if (event.key === "Enter" && input.length === 5) {
      setGuesses((old) => [...old, input]);
      setInput("");
    }
  };

  if (!currentWord) return <h1>Loading word.....</h1>;

  const PastGuessElements = guesses.map((guess, index) => {
    return (
      <GuessGrid
        key={index}
        guessString={guess}
        correctString={currentWord}
      />
    );
  });

  const EmptyGuessElements: JSX.Element[] =
    PastGuessElements.length < 5
      ? new Array(5 - guesses.length - 1)
          .fill(null)
          .map((_, index) => <EmptyGrid key={index} />)
      : [];

  if (!gameOver && !modalOpen && PastGuessElements.length === 5) {
    setTimeout(() => setModalOpen(true), 1000);
    setGameOver(true);
  } else if (
    !gameOver &&
    !modalOpen &&
    guesses[guesses.length - 1] === currentWord
  ) {
    setTimeout(() => setModalOpen(true), 1000);
    setGameOver(true);
  }


  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex={0}>
      <NavBar />
      <div className="mainContainer">
        {/* <h1 style={{ color: "white", fontSize: "24px" }}>[ {currentWord} ]</h1> */}
        <h1 style={{ color: "white", fontSize: "24px" }}>[ {currentWord} ]</h1>
        {PastGuessElements}
        {PastGuessElements.length < 5 && <InputGrid value={input} />}
        {EmptyGuessElements}
        <Keyboard
          correctString={currentWord}
          guesses={guesses}
          changeInput={changeInput}
        />
        <button onClick={() => setModalOpen(true)}>show modal</button>
      </div>
      {modalOpen && (
        <Popup
          correctWord={currentWord}
          guesses={guesses}
          closeModal={closeModal}
          resetGame={setupGame}
        />
      )}
    </div>
  );
}

export default App;
