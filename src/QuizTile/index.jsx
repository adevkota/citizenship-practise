import React from "react";
import styles from "./QuizTile.module.scss";
import { connect } from "react-redux";
import { getAnswer, getQuestion } from "../store/quiz/selectors";

const QuizTile = ({question}) => {
	return (
		<div className={styles.quizTile}>
			{question}
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

