import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Options } from "@splidejs/splide";
import "./FilmSapChieu.css";

export default function FilmSapChieu() {
  let { DSFilmSapChieu } = useSelector((state) => {
    return state.DSFilmRecucer;
  });
  console.log("lấy ok", DSFilmSapChieu);
  return (
    <MovieContainer>
      <h1 className="heading text-white">Phim Sắp Chiếu</h1>
      <div>
        <Splide
          //   hasTrack={true}
          options={{
            rewind: true,
            width: "100%",
            gap: "1rem",
            perPage: 5,
            perMove: 1,
            autoplay: false,
          }}
          aria-label="React Splide Example"
        >
          {DSFilmSapChieu.map((item, index) => {
            return (
              // <MovideSlider key={index}>
              //   <img src={item.hinhAnh} alt="" />
              //   <p className="movieName">{item.tenPhim}</p>
              // </MovideSlider>

              <SplideSlide>
                <div>
                  <div>
                    <img
                      className="img_render img-fluid"
                      src={item.hinhAnh}
                      alt=""
                    />
                    <p className="movieName">{item.tenPhim}</p>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </MovieContainer>
  );
}
const MovieContainer = styled.div`
  background-color: black;
  color: while;
`;
const MovideSlider = styled.div``;
