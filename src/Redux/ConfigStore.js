import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { bannerReducer } from "./Reducers/CarouselReducer";
import { DSFilmRecucer } from "./Reducers/FilmReducer";
import { QLNDReducer } from "./Reducers/NDReducers";
import { HeThongDSRapReducer } from "./Reducers/QLRapreducers";
const rootReducers = combineReducers({
  // khai báo các reducer
  bannerReducer,
  DSFilmRecucer,
  HeThongDSRapReducer,
  QLNDReducer,
});
export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
