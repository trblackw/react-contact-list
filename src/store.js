import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [logger, thunk];

export default function configureStore() {
  return createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
  );
}
