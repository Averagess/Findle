interface Props {
  char?: string;
  width?: number;
  height?: number;
  order?: number;
  type: "correct" | "almost" | "default";
}

const CharContainer = ({ char, type, height, width, order }: Props) => {
  const element = order ? (
    <div
      className="char-container"
      style={{
        height, width,
        animation: `0.5s reveal-${type} ${0.5 * order}s ease-in both`,
      }}
    >
      {char && <h1>{char}</h1>}
    </div>
  ) : (
    <div style={{ height, width }} className={`char-container ${type}`}>
      {char ? <h1>{char}</h1> : <h1></h1>}
    </div>
  );

  return element;
};

export default CharContainer;
