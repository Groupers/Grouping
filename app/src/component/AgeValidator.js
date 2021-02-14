export const MAX_AVAILABLE_AGE = 99;
export const MIN_AVAILABLE_AGE = 1;
export default class AgeValidator {
  validateAge = (minAge: Number, maxAge: Number) => {

    console.log("minAge", minAge, maxAge);
    return (
      minAge >= MIN_AVAILABLE_AGE &&
      minAge <= MAX_AVAILABLE_AGE &&
      maxAge >= minAge &&
      maxAge <= MAX_AVAILABLE_AGE
    );
  };
}
