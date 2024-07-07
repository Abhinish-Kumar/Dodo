import Intro from "../Pages/Intro";
import "./Content.css";
import { Routes, Route } from "react-router-dom";

function Content() {
  return (
    <div className="Content">
      <Routes>
        {/* <Intro /> */}
        <Route path="" Component={() => <Intro />} />
      </Routes>
    </div>
  );
}

export default Content;
