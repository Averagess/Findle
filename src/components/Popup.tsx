import { useState, useEffect } from "react";

import BackgroundBlur from "./BackgroundBlur";
import CloseButton from "./CloseButton";
import CopyBoardContainer from "./CopyBoardContainer";

interface Props {
  correctWord: string;
  guesses: string[];
  closeModal: () => void;
  resetGame: () => void;
}

const Popup = ({ correctWord, guesses, closeModal, resetGame }: Props) => {
  const [copyBoard, setCopyBoard] = useState({
    showBoard: false,
    boardText: [""],
  });

  const [copiedToClipboard, setCopiedToClipboard] = useState<boolean>(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        console.log("escape was pressed. closing modal");
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

  return (
    <div className="popup-container rises-up">
      {guesses[guesses.length - 1] === correctWord ? (
        <h1>Nice one!</h1>
      ) : (
        <h1>Oh well!</h1>
      )}
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
      {guesses[guesses.length - 1] === correctWord && (
        <p>u got it right after {guesses.length} guesses!</p>
      )}
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

export default Popup;
