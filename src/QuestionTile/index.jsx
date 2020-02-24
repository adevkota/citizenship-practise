import React, { useReducer } from "react";
import styles from "./QuestionTile.module.scss";
import { connect } from "react-redux";
import { getAnswer, getQuestion } from "../store/quiz/selectors";


const ACTION_TYPE_TOGGLE_QUESTION_ANSWER_VIEW = "toggle_question_answer_view";

const initialState = {
	showAnswer: false,
	showQuestion: true
}

const reducer = ({...state}, action) => {
	console.log(action)
	switch(action) {
		case ACTION_TYPE_TOGGLE_QUESTION_ANSWER_VIEW:
			return {
				showAnswer: !state.showAnswer,
				showQuestion: !state.showQuestion
			}
		default:
			return initialState;
	}
}
const QuizTile = ({question, answer}) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className={styles.quizTile}>
			{
				state.showQuestion?
					<span className={styles.question}>{question}</span>
				:""
			}
			{
				state.showAnswer?
					<span className={styles.answer}>{answer}</span>
				:""
			}
			<div className={styles.toggleView} onClick={() => dispatch(ACTION_TYPE_TOGGLE_QUESTION_ANSWER_VIEW)}>
				<span>View {state.showQuestion? "Answer" : "Question"}</span>
			</div>

		</div>
	)

}

function mapStateToProps(state, ownProps) {
	const {index} = ownProps;
	return {
		question: getQuestion(state, index),
		answer: getAnswer(state, index)
	}
}

export default connect(mapStateToProps)(QuizTile);

