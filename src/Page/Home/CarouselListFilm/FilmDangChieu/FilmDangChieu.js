import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
export default function FilmDangChieu() {
  let { DSFilmDangChieu } = useSelector((state) => {
    return state.DSFilmRecucer;
  });
  // console.log("lấy ok", DSFilmDangChieu);
  return (
    <div className="MovieContainer">
      <div className="movieSlide container">
        <Splide
          //   hasTrack={true}
          options={{
            rewind: true,
            width: "100%",
            gap: "1.1rem",
            perPage: 5,
            perMove: 1,
            autoplay: false,
          }}
          aria-label="React Splide Example"
        >
          {DSFilmDangChieu.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div>
                  <div className="movieItem">
                    <img
                      className="img_render img-fluid"
                      src={item.hinhAnh}
                      alt=""
                    />
                  </div>
                  <div className="Title_bottom">
                    {/* đánh giá code theo ngôi sao */}
                    <p className="movieDanhGia mb-0">
                      đánh giá :{item.danhGia}
                    </p>
                    <p className="movieName"> {item.tenPhim}</p>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
