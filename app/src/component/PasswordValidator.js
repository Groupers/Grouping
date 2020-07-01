export default class PasswordValidator {
  validatePassword = (password) => {
    const expression = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    return expression.test(String(password));
  };
}
