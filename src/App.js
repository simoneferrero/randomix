import React, { useState } from 'react';
import styled from 'styled-components/macro';

import SpinButton from './components/SpinButton';
import OptionForm from './components/OptionForm';
import Wheel from './components/Wheel';

const generateRandomColor = () => `#${Math.random().toString(16).slice(2, 8)}`;

const StyledContainer = styled.div`
  background-color: #282c34;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: min-content auto;
  height: 100vh;
  width: 100vw;

  & .wheel-container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    position: relative;
    width: 100%;

    & .arrow {
      border-left: 4vmin solid transparent;
      border-right: 4vmin solid transparent;
      border-top: 8vmin solid #f00;
      height: 0; 
      position: absolute;
      top: 50%;
      transform: translateY(-32vmin);
      width: 0; 
    }
  }

  & .choices-container {
    max-width: 300px;
    padding: 12px;
    
    & > *:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

const StyledHeader = styled.header`
  color: white;
  grid-column: 1/3;
  padding: 40px 25px;
  text-align: center;

  & > h1 {
    margin: 0;
  }
`;

const StyledOption = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor };
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  padding: 12px;

  & > span {
    color: white;
    mix-blend-mode: difference;

    &.delete-option {
      cursor: pointer;
      font-weight: 700;
    }
  }
`;

function App() {
  const [ rotationDegrees, setRotationDegrees ] = useState(0);
  const [ spinDisabled, setSpinDisabled ] = useState(false);
  const [ options, setOptions ] = useState([]);

  const handleSpinClick = () => {
    if (spinDisabled) return;

    setSpinDisabled(true);
    setRotationDegrees(Math.floor(Math.random() * (6000 - 10000 + 1) + 8000) + rotationDegrees);
    setTimeout(() => setSpinDisabled(false), 3000);
  };

  const handleOptionSubmit = (option) => {
    !options.some(({ name }) => name === option)
      && setOptions([...options, { name: option, color: generateRandomColor() }]);
  }

  const handleDeleteOptionClick = (option) => () => {
    const filteredOptions = options.filter(({ name }) => name !== option);
    setOptions(filteredOptions);
  }

  return (
    <StyledContainer>
      <StyledHeader><h1>RANDOMIX</h1></StyledHeader>
      <div className="wheel-container">
        <Wheel options={options} rotationDegrees={rotationDegrees} />
        <SpinButton disabled={spinDisabled} handleClick={handleSpinClick}>SPIN</SpinButton>
        <div className="arrow" />
      </div>
      <div className="choices-container">
        <OptionForm handleSubmit={handleOptionSubmit} />
        {options.map(({ name, color }) => (
          <StyledOption backgroundColor={color} key={name}>
            <span>{name}</span>
            <span className="delete-option" onClick={handleDeleteOptionClick(name)}>X</span>
          </StyledOption>
        ))}
      </div>
    </StyledContainer>
  );
}

export default App;
