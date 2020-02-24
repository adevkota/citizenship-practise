import React, { useEffect, Fragment } from 'react';
import styles from './App.module.scss';
import { loadQuizData } from "./store/quiz/actions";
import { connect } from 'react-redux';
import LoadingScreen from './LoadingScreen';

function App({loadQuizData}) {
	useEffect(() => {
		loadQuizData();
	}, [loadQuizData])
	return (
		<Fragment>
			<div className={styles.App}>
				<header className="styles.App-header">
					a
				</header>
			</div>
			<LoadingScreen/>
		</Fragment>
	);
}


const mapDispatchToProps = (dispatch) => {
	return {
		loadQuizData: () => dispatch(loadQuizData())
	}
}

export default connect(null, mapDispatchToProps)(App);
