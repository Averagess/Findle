import Clock from "./Clock";
const Footer = () => {
  return (
    <div className="footer-container">
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
          style={{ color: "#0645AD", textDecoration: "none", fontWeight: "bold" }}
          href="https://github.com/Averagess"
          target="_blank"
        >
          me
        </a>
      </p>
      <Clock />
    </div>
  );
};

export default Footer;
