import { combineReducers } from "redux-immutable";
import { reducer as HomeReducer } from "../pages/Home/store"
import { reducer as NomatchReducer } from "../pages/Nomatch/store"
import { reducer as ButtonReducer } from "../pages/Button/store"
import { reducer as LoginReducer } from "../pages/Login/store"
import { reducer as FooterReducer } from "../components/Footer/store"
import { reducer as LayoutReducer } from "../components/Layout/store"
import { reducer as NavReducer } from "../components/Nav/store"
import { reducer as HeaderReducer } from "../components/Header/store"

export default combineReducers({
  Home: HomeReducer,
  Nomatch: NomatchReducer,
  Button: ButtonReducer,
  Login: LoginReducer,
  Footer: FooterReducer,
  Layout: LayoutReducer,
  Nav: NavReducer,
  Header: HeaderReducer,
});
