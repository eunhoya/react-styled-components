import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
// 	margin: 0.5rem 0;

// 	& label {
// 		font-weight: bold;
// 		display: block;
// 		margin-bottom: 0.5rem;
// 		color:${(props) => (props.invalid ? 'red' : 'black')}
// 	}

// 	& input {
// 		display: block;
// 		width: 100%;
// 		border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
// 		background: ${(props) => (props.invalid ? '#ffd7d7' : 'transparent')}
// 		font: inherit;
// 		line-height: 1.5rem;
// 		padding: 0 0.25rem;
// 	}

// 	& input:focus {
// 		outline: none;
// 		background: #fad0ec;
// 		border-color: #8b005d;
// 	}

// `;

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();

		//공백을 입력한 경우를 배제하기 위해 trim 사용 길이체크해서 0과 같으면 값이 비었다는걸 알 수 있음 return 으로 실행중단
		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue);
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div
				className={`${styles['form-control']} ${
					!isValid && styles.invalid
				}`}
			>
				<label>Course Goal</label>
				<input type='text' onChange={goalInputChangeHandler} />
			</div>
			<Button type='submit'>Add Goal</Button>
		</form>
	);
};

export default CourseInput;
