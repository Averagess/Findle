import { useEffect, useState } from "react";

import BackgroundBlur from "./BackgroundBlur";
import CloseButton from "./CloseButton";
import CopyBoardContainer from "./CopyBoardContainer";

interface Props {
  correctWord: string;
  guesses: string[];
  closeModal: () => void;
  resetGame: () => void;
}

const GameOverPopup = ({
  correctWord,
  guesses,
  closeModal,
  resetGame,
}: Props) => {
  const [copiedToClipboard, setCopiedToClipboard] = useState<boolean>(false);
  const [copyBoard, setCopyBoard] = useState({
    showBoard: false,
    boardText: [""],
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        console.log("escape was pressed. closing gameover modal");
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const boardToClipboard = () => {
    const boardString = guesses.map((guess) => {
      const roundString = guess.split("").map((char, index) => {
        if (char === correctWord[index]) {
          return "🟩";
        } else if (correctWord.includes(char)) {
          return "🟧";
        } else {
          return "⬛";
        }
      });
      return roundString.join("");
    });

    const resultStrings: string[] = [
      "Daily Findle",
      new Date(Date.now()).toLocaleDateString(),
      "",
      ...boardString,
    ];

    try {
      navigator.clipboard.writeText(resultStrings.join("\n"));
      setCopiedToClipboard(true);
      console.log("copied to clipboard");
    } catch (err) {
      console.error("failed to copy to clipboard", err);
      setCopyBoard({ showBoard: true, boardText: resultStrings });
    }
  };

  const playerWon = guesses[guesses.length - 1] === correctWord;
  const PopupHeaderText = playerWon ? "Nice one!" : "Oh well!";

  return (
    <div className="popup-container rises-up">
      <h1 style={{ margin: 0 }}>{PopupHeaderText}</h1>
      <CloseButton
        style={{
          position: "absolute",
          top: 15,
          right: 15,
        }}
        title="close"
        onClick={closeModal}
      />
      <p>the correct word was: {correctWord} !</p>
      {playerWon && <p>you got it right after {guesses.length} guesses!</p>}
      {copyBoard.showBoard && (
        <BackgroundBlur>
          <CopyBoardContainer
            board={copyBoard.boardText}
            closeModal={() =>
              setCopyBoard((old) => ({ ...old, showBoard: false }))
            }
          />
        </BackgroundBlur>
      )}

      <div style={{ display: "flex", gap: 25 }}>
        <button className="general-button" onClick={resetGame}>
          Play again
        </button>
        <button
          className="general-button"
          title="copy to clipboard"
          onClick={boardToClipboard}
          style={{
            transition: "all 0.5s cubic-bezier(0.48, -0.27, 0.6, 1.15) 0s",
            backgroundColor: copiedToClipboard ? "#43b648" : "",
          }}
        >
          {copiedToClipboard ? "copied!" : "copy to clipboard"}
        </button>
      </div>
    </div>
  );
};

export default GameOverPopup;
