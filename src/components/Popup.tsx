import { useState, useEffect } from "react";
import CloseButton from "./CloseButton";

interface Props {
  correctWord: string;
  guesses: string[];
  closeModal: () => void;
  resetGame: () => void;
}

const Popup = ({ correctWord, guesses, closeModal, resetGame }: Props) => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
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

    console.log(resultStrings.join("\n"));
    navigator.clipboard
      .writeText(resultStrings.join("\n"))
      .then(() => {
        // alert("Daily Findle copied to your clipboard!");
        setCopiedToClipboard(true);
        console.log("copied to clipboard");
      })
      .catch((err) => console.log("error copying to clipboard", err));
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.6)",
        fontFamily: "Arial, Helvetica, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          backgroundColor: "rgb(25,45,40)",
          alignItems: "center",
          width: "40vw",
          padding: "2.5vh",
          borderRadius: 10,
          position: "relative",
        }}
      >
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
    </div>
  );
};

export default Popup;
