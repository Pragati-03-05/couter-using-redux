const state = 0;

const ChangeNumber = (state, action) => {
  switch (action.type) {
    case 'INCREAMENT': {
      return (state = state + 1);
    }
    case 'DECREAMENT': {
      return (state = state - 1);
    }
    default: {
      return state;
    }
  }
};
export default ChangeNumber;
