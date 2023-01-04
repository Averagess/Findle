import CloseButton from "./CloseButton";

interface Props {
  correctWord: string;
  guesses: string[];
  closeModal: () => void;
  resetGame: () => void;
}

const Popup = ({ correctWord, guesses, closeModal, resetGame }: Props) => {
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
        zIndex: 1
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
          borderRadius: 10,
          position: "relative"
        }}
      >
          <h1 >Game over!</h1>
          <CloseButton
            style={{
              position: "absolute",
              top: 15,
              right: 15,
            }}
            onClick={closeModal}
          />
        <p>the correct word was: {correctWord} !</p>
        {guesses[guesses.length - 1] === correctWord && (
          <p>u got it right after {guesses.length} guesses!</p>
        )}
        <div style={{ display: "flex", gap: 25 }}>
          <button onClick={resetGame}>Play again</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
