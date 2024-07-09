import "./Page.css";
import Code from "../../../Code";

function Chapter1() {
  return (
    <div className="page">
      <h1>First Node js Server</h1>
      <p>Create a file of javascript (server.js)</p>
      <Code>
        {`//Steps to create a web server
//1. Import "http" module
const http = require("http");

//2. "http" module provide ".createServer" method to create a server
const server = http.createServer((request, respose) => {
  console.log("server Stated");
  respose.end("Hello world");
});

//3. Run the server at a port
server.listen(8080); `}
      </Code>

      <h3>Explanation</h3>
      <p>
        <span style={{ color: "red" }}>.createServer </span>
        is a method provided by "http" module. Method is nothing just a function
        and .createServer method accept two parameters "request" and "response".
      </p>
    </div>
  );
}

export default Chapter1;
