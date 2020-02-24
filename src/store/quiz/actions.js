import { showLoadingScreen, hideLoadingScreen } from "../loading_screen/actions";
import { LOAD_QUIZ_DATA } from "./action-types";

export function loadQuizData() {
	return async dispatch => {
		dispatch(showLoadingScreen());
		const data = await fetch("/data.json").then(data => data.json())
		dispatch ({
			type: LOAD_QUIZ_DATA,
			data
		})
		dispatch(hideLoadingScreen());
	}
}