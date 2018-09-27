import { fork, all } from "redux-saga/effects";
import { saga as HomeSaga } from "../pages/Home/store"
import { saga as NomatchSaga } from "../pages/Nomatch/store"
import { saga as FooterSaga } from "../components/Footer/store"
import { saga as LayoutSaga } from "../components/Layout/store"
import { saga as NavSaga } from "../components/Nav/store"
import { saga as HeaderSaga } from "../components/Header/store"

function* rootSaga(config) {
  yield all([
    fork(HomeSaga),
    fork(NomatchSaga),
    fork(FooterSaga),
    fork(LayoutSaga),
    fork(NavSaga),
    fork(HeaderSaga),
  ]);
}

export default rootSaga;
