import React from "react";
import styled from "styled-components";
function Main() {
  return (
    <Wrap>
      <div>
        <div>캘린더</div>
      </div>
    </Wrap>
  );
}

export default Main;

const Wrap = styled.div`
  width: 100%;
  background-color: #0f204b;
  padding: 0% 5%;
  & > div {
    max-width: 1300px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0% auto;
  }
`;
