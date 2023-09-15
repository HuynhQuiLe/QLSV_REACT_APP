import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { sinhVienReducer } from "./reducer/sinhvienReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const rootReducer = combineReducers({
  sinhVienReducer,
});

const store = createStore(rootReducer, enhancer);

export default store;
