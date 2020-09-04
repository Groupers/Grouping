import React, { useState, useEffect } from 'react';

/**
 * customHooks
 * @param {*} stringInput
 * author: solmin
 * stringEmptyValidator
 */
const useEmptyStringValidator = (stringInput) => {
  const [isBlank, setIsBlank] = useState(false);

  useEffect(() => {
    if (
      stringInput.length === 0 ||
      stringInput === '' ||
      stringInput === null
    ) {
      setIsBlank(true);
    }
  }, [stringInput]);

  return isBlank;
};

export default useEmptyStringValidator;
