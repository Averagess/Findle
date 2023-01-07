interface Props {
  onClick: () => void;
  style?: React.CSSProperties;
  buttonLogo: string;
  height: number;
  width: number;
  title: string;
}

const ImageButton = ({
  onClick,
  style,
  buttonLogo,
  height,
  width,
  title,
}: Props) => {
  
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        backgroundColor: "rgb(0,0,0,0)",
        cursor: "pointer",
        border: "2px solid white",
        borderRadius: "40%",
        padding: 3,
        margin: 2,
        ...style,
      }}
    >
      <img src={buttonLogo} height={height} width={width} />
    </button>
  );
};

export default ImageButton;
