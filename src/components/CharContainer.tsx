interface Props {
  char?: string;
  type: "correct" | "almost" | "default";
  width?: number;
  height?: number;
}

const CharContainer = ({ char, type, height, width }: Props) => {
  return (
    <div style={{height, width}} className={`charContainer ${type}`}>
      {char && <h1>{char}</h1>}
    </div>
  );
};

export default CharContainer;