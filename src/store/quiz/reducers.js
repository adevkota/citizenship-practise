import { LOAD_QUIZ_DATA } from "./action-types";

const initialState = [];

const reducer = (state= initialState, action) => {
	switch(action.type) {
		case LOAD_QUIZ_DATA:
			return [...action.data];
		default:
			return state;

	}
}
export default reducer;