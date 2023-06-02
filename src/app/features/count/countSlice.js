export const incrementCount = () => {
  return {
    type: "count/increment"
  };
};

export const decrementCount = () => {
  return {
    type: "count/decrement"
  };
};

const initialCount = 0;
export function countReducer(count = initialCount, action) {
  switch (action.type) {
    case "count/increment":
      return count + 1;
    case "count/decrement":
      return count - 1;
    default:
      return count;
  }
}
