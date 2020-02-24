import React from "react";
import styles from "./AnswerModal.module.scss";
import { connect } from "react-redux";
import { getAnswerToView } from "../store/quiz/selectors";
import { hideQuizAnswer } from "../store/quiz/actions";

const AnswerModal = ({answer, hideQuizAnswer}) => {
	if(answer) {
		return (
			<div className={styles.AnswerModal}>
				<div className={styles.modalContent}>
					<div className={styles.modalHeader}>
						<span onClick={() => hideQuizAnswer()}>X</span>
					</div>
					<span className={styles.modalBody}>
						{answer}
					</span>
				</div>
			</div>
		)
	} else {
		return null;
	}
}

function mapStateToProps(state) {
	return {
		answer: getAnswerToView(state)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		hideQuizAnswer: () => dispatch(hideQuizAnswer())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerModal);