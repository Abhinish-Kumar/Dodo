import Chapter1 from "../Pages/Chapter1";
import Install from "../Pages/Install";
import Intro from "../Pages/Intro";
import "./Content.css";
import { Routes, Route } from "react-router-dom";

function Content() {
  return (
    <div className="Content">
      <Routes>
        {/* <Intro /> */}
        <Route path="/" Component={() => <Intro />} />
        <Route path="/installation" Component={() => <Install />} />
        <Route path="/chapter1" Component={() => <Chapter1 />} />
      </Routes>
    </div>
  );
}

export default Content;
