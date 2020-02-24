import React, { useEffect, Fragment } from 'react';
import styles from './App.module.scss';
import LoadingScreen from './LoadingScreen';


import { loadQuizData } from "./store/quiz/actions";
import { getNumberOfQuestions } from "./store/quiz/selectors";
import { connect } from 'react-redux';
import QuizTile from './QuestionTile';
import AnswerModal from './AnswerModal';

function App({loadQuizData, numberOfQuestions}) {
	useEffect(() => {
		loadQuizData();
	}, [loadQuizData])
	return (
		<Fragment>
			<div className={styles.App}>
				<h1 className={styles.header}>
					Citizenship Practise
				</h1>
				<div className={styles.quiz}>
					{
						[...Array(numberOfQuestions)].map((_, index) => {
							return (
								<div className={styles.tileWrapper} key={index}>
							 		<QuizTile index={index} />
								</div>
							)
						})
					}
				</div>
				<AnswerModal />
			</div>
			<LoadingScreen/>
		</Fragment>
	);
}


function mapStateToProps(state) {
	return {
		numberOfQuestions: getNumberOfQuestions(state)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		loadQuizData: () => dispatch(loadQuizData())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
