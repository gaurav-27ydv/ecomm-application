import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReduecer,
  productDetailsReducer,
} from "./Reducers/productReducer";

const reducer = combineReducers({
  productList: productListReduecer,
  productDetails: productDetailsReducer,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
