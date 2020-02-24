import { showLoadingScreen, hideLoadingScreen } from "../loading_screen/actions";
import { LOAD_QUIZ_DATA, VIEW_QUIZ_ANSWER, HIDE_QUIZ_ANSWER } from "./action-types";
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

export function showQuizAnswer(index) {
	return {
		type: VIEW_QUIZ_ANSWER,
		data: index
	}
}

export function hideQuizAnswer() {
	return {
		type: HIDE_QUIZ_ANSWER
	}
}