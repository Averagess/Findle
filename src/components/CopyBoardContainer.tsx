import CloseButton from "./CloseButton";

interface Props {
  board: string[];
  closeModal: () => void;
}

const CopyBoardContainer = ({ board, closeModal }: Props) => {
  return(
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          minWidth: "fit-content",
          minHeight: "fit-content",
          height: "25vh",
          width: "40vw",
          borderRadius: "25px",
          zIndex: 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "gray",
          padding: "4.5vh",
          animation: "rises-up 0.2s ease-in-out",
        }}
      >
        <div>
          <CloseButton
            title="close result"
            style={{position: "absolute", top: 15, right: 15}}

            onClick={() =>
              closeModal()
            }
          />
        </div>
        <div
          style={{
            backgroundColor: "black",
            margin: "5px",
            padding: "15px",
            borderRadius: "5px",
            userSelect: "all",
          }}
        >
          {board.map((text, index) => {
            if (text)
              return (
                <p style={{ margin: 0 }} key={index}>
                  {text}
                </p>
              );
            else return <br key={index} />;
          })}
        </div>
      </div>
  )
}

export default CopyBoardContainer;