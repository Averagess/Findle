import Clock from "./Clock";

const Footer = () => {
  return (
    <footer>
      <p
        style={{
          marginLeft: "10px",
          fontFamily: "sans-serif",
          color: "white",
          userSelect: "none",
        }}
      >
        made by{" "}
        <a
          style={{ color: "#0645AD", fontWeight: "bold" }}
          href="https://github.com/Averagess"
          target="_blank"
        >
          me
        </a>
      </p>
      <Clock />
    </footer>
  );
};

export default Footer;
