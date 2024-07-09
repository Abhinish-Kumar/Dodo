import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar({ togle }) {
  return (
    <aside className={togle}>
      <ul>
        <Link to={"/"}>
          <li>Intro</li>
        </Link>
        <Link to={"/installation"}>
          <li>Install Node js</li>
        </Link>
        <Link to={"/chapter1"}>
          <li> First server</li>
        </Link>

        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intrvsdfo</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intrvsdfo</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intsfvro</li>
        <li>Intro</li>
        <li>Ivsfventro</li>
        <li>Intro</li>
        <li>Insdftro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intrsvdfo</li>
        <li>Intrsf ro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intvdsfro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intsbfvrro</li>
        <li>Intsvfero</li>
        <li>Intro</li>
        <li>Invsdfvdfdvdfsfdtro</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
