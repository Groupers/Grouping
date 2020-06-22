export default class KoreanChecker {
	checkKoreanOrNot = text => {
		const expression = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;
		return expression.test(text);
	};
}
