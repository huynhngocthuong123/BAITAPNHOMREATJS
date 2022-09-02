import React from "react";
import ServicebaseAxios from "./ServicebaseAxios";

export class QLFilmService extends ServicebaseAxios {
  //   constructor() {
  //     super(); // anh thieu super de inherit á ok với coi giúp a cái thư viên ant với
  //   }
  layDSBanner = () => {
    return this.GET("/api/QuanLyPhim/LayDanhSachBanner");
  };
  layDSFilm = () => {
    return this.GET("/api/QuanLyPhim/LayDanhSachPhim");
  };
}
export const quanLyFilmService = new QLFilmService();
