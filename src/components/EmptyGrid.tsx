import CharContainer from "./CharContainer";

const EmptyGrid = () => {
  const EmptyElements: JSX.Element[] = new Array(5)
    .fill(null)
    .map((_, index) => <CharContainer key={index} type="default" />);

  return <div className="guessContainer">{EmptyElements}</div>;
};

export default EmptyGrid;
