import React, { useState } from "react";
import WindowButton from "./WindowButton";
import styled from "styled-components";

const Container = styled.div`
  height: 21px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: inset 1px 1px #FCFCFE, inset -1px -1px #565656, 1px 1px #000000;
  background: #AAAAAA;
  image-rendering: pixelated;
  user-drag: none;
  user-select: none;
  box-size: border-box;

  &.active {
	background: #000;
	color: #FFF;
  }
`;

const Title = styled.div`
  cursor: default;
  color: ${(props) => (props.isActive ? "white" : "black")};
  font-size: 11px;
  font-weight: bold;
  font-family: "PunkSystem";
  display: flex;
  align-items: center;
`;


const TitleBar = ({ title, handleMinimize, handleClose }) => {
  const [isActive, setIsActive] = useState(false);
  
  const handleTitlebarClick = () => setIsActive(true);
  
  const handleClick = () => {
	setIsActive(true);
  };

  return (
	  <Container className={isActive ? "windowtitle active" : "windowtitle "} onClick={handleClick}>
		<WindowButton icon="minimize" onClick={handleMinimize} style={{left: '-1px'}}/>
		<Title isActive={isActive}>{title}</Title>
		<WindowButton icon="close" onClick={handleClose} />
	  </Container>
	);
  };

export default TitleBar;
