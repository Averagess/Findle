import { useEffect } from "react";
import CloseButton from "./CloseButton";

interface Props {
  correctWord: string;
  guesses: string[];
  closeModal: () => void;
  resetGame: () => void;
}

const Popup = ({ correctWord, guesses, closeModal, resetGame }: Props) => {
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
    const boardString = guesses.map((guess, index) => {
      const roundString = guess.split("").map((char, index) => {
        if (char === correctWord[index]) {
          return "🟩";
        } else if (correctWord.includes(char)) {
          return "🟧";
        } else {
          return "⬛";
        }
      });
      return roundString.join("") + "\n";
    });
    navigator.clipboard.writeText(
        `Daily Findle\n${new Date(Date.now()).toLocaleDateString()}\n\n${boardString.join("")}`
      )
      .then(() => {
        alert("Daily Findle copied to your clipboard!");
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
        {guesses[guesses.length - 1] === correctWord ? <h1>Nice one!</h1>:<h1>Oh well!</h1>}
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
          <button className="general-button" onClick={resetGame}>Play again</button>
          <button className="general-button" title="copy to clipboard" onClick={boardToClipboard}>or share!</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
