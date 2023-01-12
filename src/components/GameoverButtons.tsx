
interface Props {
  resetGame: () => void;
  setShowGameOver: (show: boolean) => void;
}

const GameoverButtons = ({ resetGame, setShowGameOver}: Props) => {
  return(
    <div style={{display:"flex", alignItems:"center"}}>
      <button className="general-button" onClick={resetGame}>Play again</button>
      <button className="general-button" onClick={() => setShowGameOver(true)}>Show results</button>
    </div>
  )
}

export default GameoverButtons;