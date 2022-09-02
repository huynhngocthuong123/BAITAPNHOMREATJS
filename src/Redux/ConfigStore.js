import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { bannerReducer } from "./Reducers/CarouselReducer";
import { DSFilmRecucer } from "./Reducers/FilmReducer";
const rootReducers = combineReducers({
  // khai báo các reducer
  bannerReducer,
  DSFilmRecucer,
});
export const store = createStore(rootReducers, applyMiddleware(thunk));
