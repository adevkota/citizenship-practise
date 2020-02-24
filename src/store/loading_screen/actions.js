import { SHOW_LOADING_SCREEN, HIDE_LOADING_SCREEN } from "./action-types"

export function showLoadingScreen () {
	return {
		type: SHOW_LOADING_SCREEN
	}
}
export function hideLoadingScreen () {
	return {
		type: HIDE_LOADING_SCREEN
	}
}