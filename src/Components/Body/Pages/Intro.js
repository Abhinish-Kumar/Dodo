// import { Code } from "react-code-blocks";
// import Code from "../../../Code";
import "./Page.css";

function Intro() {
  return (
    <div className="page">
      <p style={{ color: "green" }}>
        Note:- for this course Basic understanding of javascript is required...
      </p>
      <h1>Intro to Node js</h1>
      {/* <Code>{`var a=44;
var v=44;
function ab(){
return "hello world"
}

        `}</Code> */}
      <h2>Javascript is every where </h2>
      <p>
        For frontend web development we have Javascript, for backend we have
        Node js , for Android and IOS we have React Native, for Single page
        application we have React js, for Desktop application we have Electron
        and more......
      </p>

      <h2>
        What is Node js and how it is different from the javascript that we use
        in frontend?
      </h2>

      <p>
        First of all , Node js is not a new programming language , its only
        runTime environment for javascript , runTime environment provide a
        suitable environment to run javascript. Could you tell me what is the
        main component of the browser that allow Javascript to run in the
        browser , it's javascript engine.
      </p>
      <p>
        Javascript engine is a engine written in c and c++ that takes javascript
        code and executes it line by line. Note :- javascript not provide
        functionality of DOM and other web apis , like cookies and session
        stroage. these are the additional functionality provided by the browser
        to handle frontend part with javascript.
      </p>
      <h3>Frontend = Javascript + web api</h3>
      <h3>Backend = Javascript + node api</h3>
      <p>
        Here web and node give power to the pure javascript to behave
        differently in different environment.
      </p>
      <h2>Why Node js?</h2>
      <p>
        If you are a frontend developer then you not need to worry about java
        and c++ to write the backend part of your application, you can use the
        javascript for backend also. Node js is famous for backend because it
        works on Non blocking I/O or Non-blocking Input and Output system. It
        means it can handle multiple request at same time.
      </p>
      <p>
        Javascript is single threaded but with node js (v8 + libuv) it behaves
        like multi threaded.
      </p>
      <p>Don't worry we will cover it later deeply. </p>
      <p>In next slide we will install the node js in our system.</p>
    </div>
  );
}

export default Intro;
