import { combineReducers } from "redux-immutable";
import { reducer as HomeReducer } from "../pages/Home/store"
import { reducer as FooterReducer } from "../components/Footer/store"
import { reducer as LayoutReducer } from "../components/Layout/store"
import { reducer as NavReducer } from "../components/Nav/store"
import { reducer as HeaderReducer } from "../components/Header/store"

export default combineReducers({
  Home: HomeReducer,
  Footer: FooterReducer,
  Layout: LayoutReducer,
  Nav: NavReducer,
  Header: HeaderReducer,
});
