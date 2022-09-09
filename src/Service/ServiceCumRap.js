import { GPOUP_ID } from "../Util/setting";
import ServicebaseAxios from "./ServicebaseAxios";

export class QLRapService extends ServicebaseAxios {
  layDSHeThongRap = () => {
    return this.GET("/api/QuanLyRap/LayThongTinHeThongRap");
  };

  layThongTinLichChieuPhim = (maPhim) => {
    return this.GET(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}&MaNhom=${GPOUP_ID}`);
  };

  
}
export const quanLyRapService = new QLRapService();
