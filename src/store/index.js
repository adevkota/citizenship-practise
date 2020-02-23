import quiz  from "./quiz/reducers";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});
const middleware = [
	thunk
]

export const store = createStore(
	combineReducers({
		quiz
	}),
	composeEnhancers(
		applyMiddleware(...middleware)
	)
) 

// export store;