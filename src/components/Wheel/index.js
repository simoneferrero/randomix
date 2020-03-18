import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const generateGradient = (options) => options.map(({ color }, index) => `${color} 0 ${100 / options.length * (index + 1)}%`).join(', ')

const StyledWheel = styled.div`
  background-color: white;
  background: conic-gradient(${({ options }) => generateGradient(options)});
  border-radius: 50%;
  height: 60vmin;
  position: relative;
  transform: rotate(${({ rotationDegrees }) => rotationDegrees}deg);
  transition: transform 3s ease-in-out;
  width: 60vmin;

  & > p {
    box-sizing: border-box;
    color: white;
    font-size: 4vmin;
    height: 100%;
    left: 0;
    margin: 0;
    mix-blend-mode: difference;
    padding: 20px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;
  }
`;

const StyledName = styled.p`
  transform: rotate(${({ degrees }) => degrees}deg);
`;

const Wheel = ({
	options,
	rotationDegrees,
}) => {
	return (
		<StyledWheel options={options} rotationDegrees={rotationDegrees}>
			{options.map(({ name }, index) => {
			const degrees = 360 / options.length;
			const participantDegrees = Math.floor((degrees * (index + 1)) - (degrees / 2))
			return <StyledName degrees={participantDegrees} key={name}>{name}</StyledName>
			})}
		</StyledWheel>
	);
};

Wheel.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({
		color: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	})).isRequired,
	rotationDegrees: PropTypes.number.isRequired,
}

export default Wheel;
