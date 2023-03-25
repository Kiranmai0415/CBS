import { combineReducers } from "redux";
import AdminReducer from "./admin_reducer";
import AuthReducer from "./auth_reducer";
import LoaderReducer from "./loader_reducer";

const RootReducer = combineReducers({
  Auth: AuthReducer,
  Admin: AdminReducer,
  Loader: LoaderReducer,

});

export default RootReducer;
