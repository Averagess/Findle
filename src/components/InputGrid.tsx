import CharContainer from "./CharContainer";

const InputGrid = ({ value }: { value: string }) => {
  const Boxes: JSX.Element[] = new Array(5)
    .fill(null)
    .map((_, index) =>
      value[index] ? (
        <CharContainer key={index} char={value[index]} type="default" />
      ) : (
        <CharContainer key={index} type="default" />
      )
    );

  return <div className="inputContainer">{Boxes}</div>;
};

export default InputGrid;
