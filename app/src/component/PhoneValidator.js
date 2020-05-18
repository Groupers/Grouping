export default class PhoneValidator {
  validatePhoneNumber = phoneNumber => {
    console.log(phoneNumber)
    const expression = /^(\+8210)([0-9]{4})([0-9]{4})$/;
    return expression.test(String(phoneNumber));
  };

  validatePhoneCode = phoneCode => {
    const expression = /([0-9]{6})$/;
    return expression.test(String(phoneCode));
  };
}
