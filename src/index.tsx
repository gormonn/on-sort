import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { baseRegular } from "./models";
// import { lorem50, lorem100 } from "./util";

const AppWrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
`;

const Message = styled.div`
  ${baseRegular};
  margin-top: 100px;
`;

interface AppProps {
  userName: string;
}
const App = (props: AppProps) => {
  const { userName } = props;
  return (
    <AppWrapper>
      <Message>{`Hello, ${userName}`}</Message>
    </AppWrapper>
  );
};

const rootElement = document.getElementById("root");
render(<App userName="World" />, rootElement);
