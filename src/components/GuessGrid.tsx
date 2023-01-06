import CharContainer from "./CharContainer";
import EmptyGrid from "./EmptyGrid";


interface Props {
  guessString: string;
  correctString: string;
}

const GuessGrid = ({ guessString, correctString }: Props) => {
  if(!guessString) return(<EmptyGrid/>)
  const chars = new Array(5).fill(null).map((_, index) => {
    if(guessString[index] === correctString[index]) {
      return (<CharContainer order={index+1} key={index} char={guessString[index]} type="correct" />)
    } else if(correctString.includes(guessString[index])) {
      return (<CharContainer order={index+1} key={index} char={guessString[index]} type="almost"  />)
    } else if(guessString[index]) {
      return <CharContainer order={index+1} key={index} char={guessString[index]} type="default" />
    } else {
      return <CharContainer order={index+1} key={index} type="default" />
    }
  })

  return(
    <div className="guess-container">
      {chars}
    </div>
  )
}

export default GuessGrid;