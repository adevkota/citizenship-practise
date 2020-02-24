import { showLoadingScreen } from "../loading_screen/actions";

export function loadQuizData() {
	return dispatch => {
		dispatch(showLoadingScreen());
		// await fetc
	}
}