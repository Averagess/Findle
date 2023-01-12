import xIcon from "../assets/x.svg";

interface Props {
  style?: React.CSSProperties;
  title: string;
  onClick: () => void;
}

const CloseButton = ({ style, title, onClick }: Props) => {
  return (
    <button
      style={{
        cursor: "pointer",
        backgroundColor: "rgb(0,0,0,0)",
        border: "none",
        padding: 0,
        ...style,
      }}
      title={title}
      onClick={onClick}
    >
      <img
        style={{ height: 30, width: 30 }}
        src={xIcon}
        alt="Close Popup Icon"
      />
    </button>
  );
};

export default CloseButton;
