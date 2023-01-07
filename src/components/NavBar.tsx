import Question from "../assets/question.png";
import ImageButton from "./ImageButton";

interface Props {
  toggleTutorial: () => void;
}

const NavBar = ({ toggleTutorial }: Props) => {
  return (
    <div className="nav-bar">
      <h1 className="nav-header">Findle</h1>
      <ImageButton
        onClick={toggleTutorial}
        title="how to play"
        buttonLogo={Question}
        height={25}
        width={25}
        style={{
          position: "absolute",
          right: 10,
        }}
      />
    </div>
  );
};

export default NavBar;
