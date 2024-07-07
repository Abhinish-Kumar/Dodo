import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

function Code(props) {
  return (
    <CopyBlock
      text={props.children}
      language="javascript"
      //       showLineNumbers=false
      theme={dracula}
      codeBlock
    />
  );
}

export default Code;
