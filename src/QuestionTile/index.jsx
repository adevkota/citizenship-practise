import React from "react";
import styles from "./QuestionTile.module.scss";
import { connect } from "react-redux";
import {  getQuestion } from "../store/quiz/selectors";
import { showQuizAnswer } from "../store/quiz/actions";

const QuizTile = ({question, index, showQuizAnswer}) => {
	return (
		<div className={styles.quizTile}>
			<span className={styles.question}>{question}</span>
			<div className={styles.toggleView} onClick={() => showQuizAnswer(index)}>
				<span>View Answer</span>
			</div>

		</div>
	)

}

function mapStateToProps(state, ownProps) {
	const {index} = ownProps;
	return {
		question: getQuestion(state, index)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		showQuizAnswer: index => dispatch(showQuizAnswer(index))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizTile);

