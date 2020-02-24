import React, { useReducer } from "react";
import styles from "./QuizTile.module.scss";
import { connect } from "react-redux";
import { getAnswer, getQuestion } from "../store/quiz/selectors";

const ACTION_TYPE_SHOW_QUESTION = "show_question";
const ACTION_TYPE_SHOW_ANSWER = "show_answer";

const initialState = {
	showAnswer: false,
	showQuestion: true
}

const reducer = (state, action) => {
	switch(action.type) {
		case ACTION_TYPE_SHOW_ANSWER:
			return {
				showAnswer: true,
				showQuestion: false
			}
		case ACTION_TYPE_SHOW_QUESTION:
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
					<span>{question}</span>
				:""
			}
			{
				state.showAnswer?
					<span>{answer}</span>
				:""
			}
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

