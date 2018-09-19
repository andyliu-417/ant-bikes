import { combineReducers } from "redux-immutable";
import { reducer as AdminReducer } from "../pages/Admin/store"
import { reducer as FooterReducer } from "../components/Footer/store"
import { reducer as LayoutReducer } from "../components/Layout/store"
import { reducer as NavReducer } from "../components/Nav/store"
import { reducer as HeaderReducer } from "../components/Header/store"

export default combineReducers({
  Admin: AdminReducer,
  Footer: FooterReducer,
  Layout: LayoutReducer,
  Nav: NavReducer,
  Header: HeaderReducer,
});
