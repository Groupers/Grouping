export default class BirthdayValidator {
  validateBirthday = birthday => {
    const expression = /^([19|20]{2})[0-9]{2}\.(([0][0-9])|([1][0-2]))\.(([0][1-9])|([1-2][0-9])|([3][0-1]))$/;

    return expression.test(String(birthday).toLowerCase());
  };
}
