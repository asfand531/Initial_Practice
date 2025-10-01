import { combineReducers, legacy_createStore } from "redux";

let defaultState = {
  count: 0,
};

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

let initialState = {
  id: 1,
  name: "Asfand",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetched":
      return { ...state, id: action.payload, name: action.payload };
    default:
      return state;
  }
};

const initialField = {
  empId: null,
  org: "",
};

const clearFieldReducer = (state = initialField, action) => {
  switch (action.type) {
    case "reset": {
      return state;
    }
  }
};

const reducers = combineReducers({
  counterReducer,
  app: appReducer,
  // clearFieldReducer,
});

export default legacy_createStore(reducers);
