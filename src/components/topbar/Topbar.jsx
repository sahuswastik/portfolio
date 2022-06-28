import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ReactComponent as Git } from "../../../public/assets/github-brands.svg";
import { ReactComponent as LinkedIn } from "../../../public/assets/linkedin-brands.svg";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            portfolio
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 7008913909</span>
          </div>
          <div className="itemContainer">
            <a href="#contact">
              <Mail className="icon" />
              <span>sahuswastik30@gmail.com</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/sahuswastik">
              <GitHubIcon className="icon" />
              <span>Hub</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/">
              <LinkedInIcon className="icon" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
