import React, { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: rgb(233, 233, 234);
    transition: background-color 0.5s;
  }

  .toggle-container.toggle--checked {
    background-color: black;
  }

  .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: left 0.5s;
  }

  .toggle-container.toggle--checked .toggle-circle {
    left: 27px;
  }
`;

export const Toggle = ({ isOn, toggleHandler }) => {
  return (
    <ToggleContainer onClick={toggleHandler}>
      <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`}>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`} />
      </div>
    </ToggleContainer>
  );
};
