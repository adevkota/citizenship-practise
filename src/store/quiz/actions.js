import { showLoadingScreen, hideLoadingScreen } from "../loading_screen/actions";
import { LOAD_QUIZ_DATA } from "./action-types";
import data from "../../data/quiz.json"

export function loadQuizData() {
	return async dispatch => {
		dispatch(showLoadingScreen());
		// if we want to fetch data from external source fetch here
		// const data = await fetch("/citizenship-practise/data.json").then(data => data.json())
		dispatch ({
			type: LOAD_QUIZ_DATA,
			data
		})
		dispatch(hideLoadingScreen());
	}
}