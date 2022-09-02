import React, { useEffect } from "react";
import { DSFilm } from "../../../Redux/action/FilmAction";
import { useDispatch } from "react-redux";
import FilmSapChieu from "./FilmSapChieu/FilmSapChieu";

export default function CarouselListFilm() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch lần 1 (truyền dispatch)
    const action = DSFilm();
    dispatch(action);
    // dispatch(LayDSFilm());
  }, []);
  return (
    <div>
      <FilmSapChieu />
    </div>
  );
}
