import "./App.css";
import Header from "../src/Components/Header/Header";
// import Form from "./Form";
import Sidebar from "./Components/Body/Sidebar/Sidebar";
import Content from "./Components/Body/Content/Content";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App() {
  const [state, setState] = useState("hide");

  function togleFunction(e) {
    if (state === "hide") {
      setState("show");
    } else {
      setState("hide");
    }
  }
  return (
    <div className="App">
      <Header />
      <div className="toglBox">
        <button onClick={togleFunction} id="toglBtn">
          +
        </button>
      </div>
      <div className="body">
        <Sidebar togle={state} onClickTogle={togleFunction} />

        <Content />
      </div>

      {/* <Form /> */}
      <Footer />
    </div>
  );
}

export default App;
