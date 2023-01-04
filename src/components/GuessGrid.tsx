import CharContainer from "./CharContainer";


interface Props {
  guessString: string;
  correctString: string;
}

const GuessGrid = ({ guessString, correctString }: Props) => {
  return(
    <div className="guessContainer">
      {guessString.split("").map((char, index) => {
        if(char === correctString[index]) {
          return <CharContainer key={index} char={char} type="correct" />
        } else if(correctString.includes(char)) {
          return <CharContainer key={index} char={char} type="almost"  />
        } else {
          return <CharContainer key={index} char={char} type="default" />
        }
      })}
    </div>
  )
}

export default GuessGrid;