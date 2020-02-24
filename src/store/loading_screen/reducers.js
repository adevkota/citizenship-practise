import { SHOW_LOADING_SCREEN, HIDE_LOADING_SCREEN } from "./action-types";

const initialState = {
	showLoadingScreen: false
};

const reducer = (state= initialState, action) => {
	switch(action.type) {
		case SHOW_LOADING_SCREEN:
			return {
				showLoadingScreen: true
			}
		case HIDE_LOADING_SCREEN:
			return {
				showLoadingScreen: false
			}
		default:
			return state;

	}
}
export default reducer;