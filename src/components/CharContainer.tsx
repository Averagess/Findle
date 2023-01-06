interface Props {
  char?: string;
  type: "correct" | "almost" | "default";
  width?: number;
  height?: number;
  order?: number;
}

const CharContainer = ({ char, type, height, width, order }: Props) => {
  const element = order ? (
    <div
      className="charContainer"
      style={{
        height, width,
        animation: `0.5s reveal-${type} ${0.5 * order}s ease-in both`,
      }}
    >
      {char && <h1>{char}</h1>}
    </div>
  ) : (
    <div style={{ height, width }} className={`charContainer ${type}`}>
      {char ? <h1>{char}</h1> : <h1></h1>}
    </div>
  );

  return element;
};

export default CharContainer;
