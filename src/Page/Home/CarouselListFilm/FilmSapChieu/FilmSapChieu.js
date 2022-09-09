import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import { Options } from "@splidejs/splide";
import "./FilmSapChieu.css";
import { NavLink } from "react-router-dom";
export default function FilmSapChieu() {
  let { DSFilmSapChieu } = useSelector((state) => {
    return state.DSFilmRecucer;
  });
  // console.log("lấy ok", DSFilmSapChieu);
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
          {DSFilmSapChieu.map((item, index) => {
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
                  <NavLink className='btn btn-primary btn__muave' to={`/detail/${item.maPhim}`}>Mua Vé</NavLink>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
