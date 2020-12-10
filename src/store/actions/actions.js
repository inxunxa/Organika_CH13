// action: an arrow fn that returns an object
// object contains the type of action, payload (optional)

export const increaseCounter = () => {
  return {
    type: "INCREASE_COUNTER",
  };
};
