import { LOAD_QUIZ_DATA, VIEW_QUIZ_ANSWER, HIDE_QUIZ_ANSWER } from "./action-types";

const initialState = {
	questions: [],
	answers: [],
	answerToView: null
};

const reducer = (state= initialState, action) => {
	switch(action.type) {
		case LOAD_QUIZ_DATA:
			return {
				...state,
				questions: [...action.data.map(data => data.question)],
				answers: [...action.data.map(data => data.answer)],
			}
		case VIEW_QUIZ_ANSWER:
			return {
				...state,
				answerToView: state.answers[action.data]
			}
		case HIDE_QUIZ_ANSWER:
			return {
				...state,
				answerToView: null
			}
		default:
			return state;

	}
}
export default reducer;