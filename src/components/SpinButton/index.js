import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';

const disabledStyles = css`
  background-color: darkred;
  box-shadow: 0 0 0;
  cursor: not-allowed;
`;

const StyledSpinButton = styled.div`
  align-items: center;
  background-color: #f00;
  border-radius: 50%;
  box-shadow: 0 5px 5px darkred;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 5vmin;
  font-weight: 700;
  height: 20vmin;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20vmin;

  ${({ disabled }) => disabled && disabledStyles}
`;

const SpinButton = ({
	disabled,
	handleClick,
}) => (
	<StyledSpinButton disabled={disabled} onClick={handleClick}>SPIN</StyledSpinButton>
);

SpinButton.propTypes = {
	disabled: PropTypes.bool.isRequired,
	handleClick: PropTypes.func.isRequired,
};

export default SpinButton;
