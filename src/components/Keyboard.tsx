import React from "react";
import KeyContainer from "./KeyContainer";

interface Props {
  guesses: string[];
  correctString: string;
  changeInput: (input: string) => void;
}

const Keyboard = ({ guesses, correctString, changeInput }: Props) => {
  const onClick = (e: React.MouseEvent) => {
    console.log(e.currentTarget.textContent);

    if (e.currentTarget.textContent) changeInput(e.currentTarget.textContent);
  };

  const correctChars: string[] = [];
  const almostChars: string[] = [];
  const wrongChars: string[] = [];

  guesses.forEach((guess) => {
    guess.split("").forEach((char, index) => {
      if (char === correctString[index]) {
        correctChars.push(char);
      } else if (correctString.includes(char)) {
        almostChars.push(char);
      } else {
        wrongChars.push(char);
      }
    });
  });

  const KeyRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"].map(
    (key, index) => {
      if (correctChars.includes(key)) {
        return (
          <KeyContainer
            key={index}
            char={key}
            type="correct"
            onClick={onClick}
          />
        );
      } else if (almostChars.includes(key)) {
        return (
          <KeyContainer
            key={index}
            char={key}
            type="almost"
            onClick={onClick}
          />
        );
      } else if (wrongChars.includes(key)) {
        return (
          <KeyContainer
            key={index}
            char={key}
            type="wrong"
            onClick={onClick}
          />
        );
      }
      else
        return (
          <KeyContainer
            key={index}
            char={key}
            type="default"
            onClick={onClick}
          />
        );
    }
  );
  const KeyRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"].map(
    (key, index) => {
      if (correctChars.includes(key)) {
        return (
          <KeyContainer
            key={index}
            char={key}
            type="correct"
            onClick={onClick}
          />
        );
      } else if (almostChars.includes(key)) {
        return (
          <KeyContainer
            key={index}
            char={key}
            type="almost"
            onClick={onClick}
          />
        );
      } else if (wrongChars.includes(key)) {
        return (
          <KeyContainer
            key={index}
            char={key}
            type="wrong"
            onClick={onClick}
          />
        );
      }else
        return (
          <KeyContainer
            key={index}
            char={key}
            type="default"
            onClick={onClick}
          />
        );
    }
  );
  const KeyRow3 = ["BACK", "Z", "X", "C", "V", "B", "N", "M", "ENTER"].map(
    (key, index) => {
      if (correctChars.includes(key)) {
        return (
          <KeyContainer
            key={index}
            char={key}
            type="correct"
            onClick={onClick}
          />
        );
      } else if (almostChars.includes(key)) {
        return (
          <KeyContainer
            key={index}
            char={key}
            type="almost"
            onClick={onClick}
          />
        );
      } else if (wrongChars.includes(key)) {
        return (
          <KeyContainer
            key={index}
            char={key}
            type="wrong"
            onClick={onClick}
          />
        );
      }else
        return (
          <KeyContainer
            key={index}
            char={key}
            type="default"
            onClick={onClick}
          />
        );
    }
  );

  return (
    <div className="keyboard">
      <div className="keyboard-row">{KeyRow1}</div>
      <div className="keyboard-row">{KeyRow2}</div>
      <div className="keyboard-row">{KeyRow3}</div>
    </div>
  );
};

export default Keyboard;
