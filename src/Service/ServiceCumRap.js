import ServicebaseAxios from "./ServicebaseAxios";

export class QLRapService extends ServicebaseAxios {
  layDSHeThongRap = () => {
    return this.GET("/api/QuanLyRap/LayThongTinHeThongRap");
  };
}
export const quanLyRapService = new QLRapService();
