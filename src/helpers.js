export const reducer = arr => {
  const newState = arr.reduce((newStateObj, input) => {
    newStateObj[input.name] =
      input.value !== input.defaultValue ? input.value : input.defaultValue;
    return newStateObj;
  }, {});
  const { name, email, phone_number, image_url } = newState;
  return { name, email, phone_number, image_url };
};
