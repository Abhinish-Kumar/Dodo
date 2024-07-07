import "./Footer.css";
import dodo from "./dodo.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="fcontent">
        <div>
          <img src={dodo} alt="dodo" />
        </div>
        <div>
          <h1>Hello Dodo</h1>
        </div>
      </div>
      <footer>
        <ul>
          <li>abhinishKumar506@gmail.com</li>
          <li>8872273309</li>
          <li>@copyright</li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
