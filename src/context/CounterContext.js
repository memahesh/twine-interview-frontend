import { CREATE_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER, REMOVE_COUNTER } from "actions/counter";

const counterContextValue = (state, dispatch) => {
  return {
    counterMap : state.counterMap,
    createCounter : (counter) => {
      console.log("Dispatched Create Counter Event...");
      dispatch({
        type: CREATE_COUNTER,
        payload: counter
      });
    },
    removeCounter : id => {
      console.log(`Dispatched Remove Counter Event`);
      dispatch({
        type: REMOVE_COUNTER,
        payload: {
          id
        }
      });
    },
    incrementCounter : id => {
      console.log(`Dispatched Increment Counter Event ${id}`);
      dispatch({
        type: INCREMENT_COUNTER,
        payload: {
          id
        }
      });
    },
    decrementCounter : id => {
      console.log(`Dispatched Decrement Counter Event`);
      dispatch({
        type: DECREMENT_COUNTER,
        payload: {
          id
        }
      });
    }
  }
};

export default counterContextValue;