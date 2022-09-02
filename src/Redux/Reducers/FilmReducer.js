import { DS_FILM } from "../action/Type/TypeActionFilm";
const initialState = {
  DSFilmSapChieu: [],
  DSFilmDangChieu: [],
};

export const DSFilmRecucer = (state = initialState, action) => {
  switch (action.type) {
    // lấy danh sách Film
    case DS_FILM:
      {
        // danh sách đang chiếu
        state.DSFilmDangChieu = [
          ...action.arrayFilm.filter((film) => {
            return film.dangChieu === true;
          }),
        ];
        // danh sách sắp chiếu
        state.DSFilmSapChieu = [
          ...action.arrayFilm.filter((film) => {
            return film.sapChieu === true;
          }),
        ];
        // console.log("danh sách đang chiếu", state.DSFilmDangChieu);
        // console.log("danh sách sắp chiếu", state.DSFilmSapChieu);
      }
      return { ...state };

    default:
      return state;
  }
};
