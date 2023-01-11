import { useEffect, useState } from "react";

import BackgroundBlur from "./components/BackgroundBlur";
import EmptyGrid from "./components/EmptyGrid";
import Footer from "./components/Footer";
import GuessGrid from "./components/GuessGrid";
import InputGrid from "./components/InputGrid";
import Keyboard from "./components/Keyboard";
import NavBar from "./components/NavBar";
import NotificationContainer from "./components/NotificationContainer";
import GameOverPopup from "./components/GameOverPopup";

import allowedChars from "./assets/allowedChars";
import words from "./assets/words";
import TutorialPopup from "./components/TutorialPopup";
import "./styles.css";

interface GameState {
  currentWord: string | null;
  input: string;
  guesses: string[];
  gameOver: boolean;
  showGameOverModal: boolean;
  showTutorialModal: boolean;
  shouldShakeInput: boolean;
  notifications: string[];
}

const initialState: GameState = {
  currentWord: null,
  input: "",
  guesses: [],
  gameOver: false,
  showGameOverModal: false,
  showTutorialModal: false,
  shouldShakeInput: false,
  notifications: [],
};

function App() {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const resetGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setGameState({ ...initialState, currentWord: randomWord });
    console.log("Random word set to: " + randomWord);
  };

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (gameState.shouldShakeInput) {
      setTimeout(() => {
        setGameState((old) => ({ ...old, shouldShakeInput: false }));
      }, 500);
    }
  }, [gameState.shouldShakeInput]);

  if (!gameState.currentWord) return <h1>Loading word.....</h1>;

  const addNotification = (notification: string) => {
    if (gameState.notifications.length) return;
    setGameState((old) => ({
      ...old,
      notifications: [notification, ...gameState.notifications],
    }));

    setTimeout(() => {
      setGameState((old) => ({
        ...old,
        notifications: old.notifications.slice(0, old.notifications.length - 1),
      }));
    }, 5000);
  };

  const toggleInputShakeOn = () => {
    setGameState((old) => ({ ...old, shouldShakeInput: true }));
  };

  const handleKeyDown = (key: string) => {
    const upperCaseKey = key.toUpperCase();
    const input = gameState.input;

    if (gameState.showTutorialModal || gameState.gameOver) return;
    else if (!allowedChars.includes(upperCaseKey)) {
      return toggleInputShakeOn();
    }

    if (
      key.length === 1 &&
      allowedChars.includes(upperCaseKey) &&
      input.length < 5
    ) {
      setGameState((old) => ({ ...old, input: old.input + upperCaseKey }));
    } else if (upperCaseKey === "BACKSPACE" || upperCaseKey === "BACK") {
      setGameState((old) => ({
        ...old,
        input: old.input.slice(0, old.input.length - 1),
      }));
    } else if (upperCaseKey === "ENTER") {
      if (input.length < 5) {
        addNotification("Word must be 5 letters long");
        return toggleInputShakeOn();
      } else if (!words.includes(input)) {
        addNotification("Word not in wordlist");
        return toggleInputShakeOn();
      }

      setGameState((old) => ({
        ...old,
        guesses: [...old.guesses, input],
        input: "",
      }));
    }
  };

  const PastGuessElements = gameState.guesses.map((guess, index) => (
    <GuessGrid
      key={index}
      guessString={guess}
      correctString={gameState.currentWord as string}
    />
  ));

  const EmptyGuessElements: JSX.Element[] =
    PastGuessElements.length < 5
      ? new Array(5 - gameState.guesses.length - 1)
          .fill(null)
          .map((_, index) => <EmptyGrid key={index} />)
      : [];

  if (
    !gameState.gameOver &&
    !gameState.showGameOverModal &&
    (PastGuessElements.length === 5 ||
      gameState.guesses[gameState.guesses.length - 1] === gameState.currentWord)
  ) {
    setTimeout(() => {
      setGameState((old) => ({
        ...old,
        showGameOverModal: true,
        gameOver: true,
      }));
    }, 3500);
  }

  const setShowTutorial = (show: boolean) => {
    setGameState((old) => ({ ...old, showTutorialModal: show }));
  };

  const setShowGameOver = (show: boolean) => {
    setGameState((old) => ({ ...old, showGameOverModal: show }));
  };

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
          <InputGrid
            value={gameState.input}
            shouldAnimateShake={gameState.shouldShakeInput}
          />
        )}
        {EmptyGuessElements}
        <Keyboard
          correctString={gameState.currentWord}
          guesses={gameState.guesses}
          changeInput={handleKeyDown}
        />
        {gameState.gameOver && (
          <button
            style={{ marginTop: "15px" }}
            className="general-button"
            onClick={() => setShowGameOver(true)}
          >
            show results
          </button>
        )}
      </div>
      {gameState.showTutorialModal && (
        <BackgroundBlur closePopup={() => setShowTutorial(false)}>
          <TutorialPopup closePopup={() => setShowTutorial(false)} />
        </BackgroundBlur>
      )}

      {gameState.showGameOverModal && (
        <BackgroundBlur closePopup={() => setShowGameOver(false)}>
          <GameOverPopup
            correctWord={gameState.currentWord}
            guesses={gameState.guesses}
            closeModal={() => setShowGameOver(false)}
            resetGame={resetGame}
          />
        </BackgroundBlur>
      )}
      {gameState.notifications.length > 0 && (
        <NotificationContainer notifications={gameState.notifications} />
      )}
      <Footer />
    </div>
  );
}

export default App;
