export function getQuestion(state, index) {
	return state.quiz.questions[index];
}
export function getAnswer(state, index) {
	return state.quiz.answers[index];
}
export function getAnswerToView(state) {
	return state.quiz.answerToView
}

export function getNumberOfQuestions(state){
	return state.quiz.questions.length;
}