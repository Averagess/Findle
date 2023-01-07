import { useEffect } from "react";
import CloseButton from "./CloseButton";
import GuessGrid from "./GuessGrid";

interface Props {
  closePopup: () => void;
}

const TutorialPopup = ({ closePopup }: Props) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        console.log("Escape was pressed. closing tutorial popup")
        closePopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, [])

  return (
    <div style={{ alignItems: "normal" }} className="popup-container rises-up">
      <CloseButton
        title="close"
        style={{ position: "absolute", top: 15, right: 15 }}
        onClick={closePopup}
      />
      <h1 style={{ margin: 0 }}>How to play</h1>
      <ul>
        <li>Each guess must be a valid 5-letter Finnish word</li>
        <li>
          After guessing, game will show the result of your guess and change
          colors accordingly
        </li>
      </ul>
      <h2>Examples</h2>
      <GuessGrid guessString="TASSU" correctString="TIPOW" />
      <p>
        The first letter of the guessed word is correct and on the correct spot.
      </p>
      <GuessGrid guessString="AAMUT" correctString="MSXER" />
      <p>The third letter is in the correct word, but in a different place.</p>
      <GuessGrid guessString="KESÄT" correctString="-----" />
      <p>None of the letters are in the correct word.</p>
    </div>
  );
};

export default TutorialPopup;
