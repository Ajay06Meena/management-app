import { createStore } from "redux";
import { formReducer, projectFormReducer, taskFormReducer, userFormReducer } from "./action"; // We'll create this in the next step
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formReducer,
  projectFormReducer,
  taskFormReducer,
  userFormReducer
});
const store = createStore(rootReducer);

export default store;
