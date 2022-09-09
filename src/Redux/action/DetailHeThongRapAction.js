import { quanLyRapService } from "../../Service/ServiceCumRap";
import { CHI_TIET_PHIM } from "./Type/QLRapType";
export const layDSRap = () => {
  // xử lý thành công
  const result = quanLyRapService.layDSHeThongRap();
  //   console.log("ketqua", result);
  return result;
};

export const LayThongTinChiTietPhim = (id) => {
  return async (dispatch2) => {
    try {
     
      const result = await quanLyRapService.layThongTinLichChieuPhim(id);
      console.log(result);

      let action = {
        type: CHI_TIET_PHIM,
        filmDetail: result.data.content
      }

      dispatch2(action);
    } catch (error) {
      console.log(error);
    }
  }
}