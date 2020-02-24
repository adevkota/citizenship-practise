export function getQuestion(state, index) {
	return state.quiz[index].question;
}
export function getAnswer(state, index) {
	return state.quiz[index].answer;
}

export function getNumberOfQuestions(state){
	return state.quiz.length;
}