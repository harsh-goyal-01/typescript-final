import React from "react";
import Chatbox from "./components/Chatbox/Chatbox";
import Dates from "./components/Dates/Dates";
import { css } from "@emotion/core";
const App: React.FC = () => {
  return (
    <div>
      {/* <div css={{ color: 'red' }}>Just facing typescript compilation error otherwise it's working fine!!</div> */}
      <Dates />
      <Chatbox />
    </div>
  );
};

export default App;
