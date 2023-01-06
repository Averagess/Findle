import CharContainer from "./CharContainer";

interface Props {
  value: string;
  shouldAnimateShake: boolean;
}

const InputGrid = ({ value, shouldAnimateShake }: Props) => {

  const Boxes: JSX.Element[] = new Array(5).fill(null).map((_, index) => {
    if (value[index]) return (<CharContainer key={index} char={value[index]} type="default" />)
    else return (<CharContainer key={index} type="default" />)
  })

  const className = shouldAnimateShake
    ? "input-container horizontal-shake"
    : "input-container";

  return <div className={className}>{Boxes}</div>;
};

export default InputGrid;
