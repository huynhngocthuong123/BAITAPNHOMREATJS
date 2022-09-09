import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { bannerReducer } from "./Reducers/CarouselReducer";
import { DSFilmRecucer } from "./Reducers/FilmReducer";
import { HeThongDSRapReducer } from "./Reducers/QLRapreducers";
const rootReducers = combineReducers({
  // khai báo các reducer
  bannerReducer,
  DSFilmRecucer,
  HeThongDSRapReducer,
});
export const store = createStore(rootReducers, applyMiddleware(thunk));
