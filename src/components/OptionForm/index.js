import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledForm = styled.form`
	display: flex;
	width: 100%;
`;

const StyledInput = styled.input`
	border-radius: 6px 0px 0px 6px;
	border: none;
	box-sizing: border-box;
	height: 40px;
	padding: 12px;
	width: 100%;
`

const StyledButton = styled.button`
	background-color: red;
	border-radius: 0px 8px 8px 0px;
	border: 0px;
	box-sizing: border-box;
	color: white;
	cursor: pointer;
	height: 40px;
	padding: 12px;
`

const OptionForm = ({
	handleSubmit,
}) => {
	const [newOption, setNewOption] = useState('');

	const onSubmit = (event) => {
		event.preventDefault()

		if (!!newOption) {
			handleSubmit(newOption)
			setNewOption('')
		}
	};

	return (
		<StyledForm onSubmit={onSubmit}>
			<StyledInput
				onChange={({ target: { value } }) => setNewOption(value)}
				placeholder="Add option"
				value={newOption}
			/>
			<StyledButton type="submit">ADD</StyledButton>
		</StyledForm>
	)
};

OptionForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};

export default OptionForm;
