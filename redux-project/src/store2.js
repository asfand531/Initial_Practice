import { combineReducers, legacy_createStore } from "redux";

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

const reducer = combineReducers({ clearFieldReducer });
export default legacy_createStore(reducer);
