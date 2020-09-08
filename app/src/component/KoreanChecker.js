export default class KoreanChecker {
  checkKoreanOrNot = (text) => {
    const expression = /([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i;
    console.log(expression.test(text));
    return expression.test(text);
  };
}
