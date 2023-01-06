import Clock from "./Clock";
const Footer = () => {
  return (
    <div className="footer-container">
      <p style={{marginLeft: "10px", fontFamily: "sans-serif", color: "white"}}>
        made by{" "}
        <b>
          <a style={{color: "#0645AD"}} href="https://github.com/Averagess" target="_blank">
            me
          </a>
        </b>
      </p>
      <Clock />
    </div>
  );
};

export default Footer;
