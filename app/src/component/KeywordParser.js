export default class KeywordParser {
  parseKeyword = (keywordString) => {
    const expression = /^\#{2,}$/;

    const keywordList = String(keywordString).split('#');

    const refinedKeywordList = [];

    keywordList.forEach((value, index, array) => {
      if (value.length !== 0) {
        refinedKeywordList.push(value);
      }
    });
    if (
      (refinedKeywordList.length === 1 && expression.test(String(keywordString))) ||
      refinedKeywordList.length > 0
    ) {
      return true;
    }
    return false;
  };
}
