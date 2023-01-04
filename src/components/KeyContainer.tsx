import React from "react";

interface Props {
  char: string;
  type: "correct" | "almost" | "wrong" | "default";
  onClick: (event: React.MouseEvent) => void;
}

const KeyContainer = ({ char, type, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      style={{
        height: "fit-content",
        width: char.length === 1 ? "24px" : "fit-content",
      }}
      className={`charContainer ${type}`}
    >
      <h1 style={{ fontSize: 14, margin: 10 }}>{char}</h1>
    </div>
  );
};

export default KeyContainer;
