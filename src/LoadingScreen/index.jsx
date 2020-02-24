import React from "react";
import styles from "./LoadingScreen.module.scss";
import { getShowLoadingScreen } from "../store/loading_screen/selectors";
import { connect } from "react-redux";

const LoadingScreen = ({showLoadingScreen}) => {
	if(showLoadingScreen) {
		return (
			<div className={styles.loadingScreen}>
				Loading...
			</div>
		);
	}

	return null;
}

function mapStateToProps(state) {
	return {
		showLoadingScreen: getShowLoadingScreen(state)
	}
}

export default connect(mapStateToProps)(LoadingScreen);