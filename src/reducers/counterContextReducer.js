import { CREATE_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER, REMOVE_COUNTER, SYNC_DATA } from "actions/counter";

const counterContextReducer = (state, action) => {
    switch(action.type){
      case CREATE_COUNTER:
        return {
          ...state,
          counterMap: {
            ...state.counterMap,
            ...action.payload
          }
        };
      case INCREMENT_COUNTER:
        return {
          ...state,
          counterMap:{
            ...state.counterMap,
            [action.payload.id] : {
              ...state.counterMap[action.payload.id],
              value : state.counterMap[action.payload.id].value+1
            }
          }
        };
      case DECREMENT_COUNTER:
        return {
          ...state,
          counterMap:{
            ...state.counterMap,
            [action.payload.id] : {
              ...state.counterMap[action.payload.id],
              value : state.counterMap[action.payload.id].value-1
            }
          }
        };
      case REMOVE_COUNTER:
        delete state.counterMap[action.payload.id];
        return {
          ...state
        };
      case SYNC_DATA:
        return {
          ...state,
          ...action.payload
        }
      default:
        return state;
    }
}

export default counterContextReducer;