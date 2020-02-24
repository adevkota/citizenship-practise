import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { getShowLoadingScreen } from './store/loading_screen/selectors';
import { loadQuizData } from "./store/quiz/actions";
import { connect } from 'react-redux';

function App({showLoadingScreen, loadQuizData}) {
	useEffect(() => {
		loadQuizData();
	}, [loadQuizData])
	return (
			<div className={styles.App}>
				<header className="styles.App-header">
					a
				</header>
			</div>
	);
}

function mapStateToProps(state) {
	return {
		showLoadingScreen: getShowLoadingScreen(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadQuizData: () => dispatch(loadQuizData())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
