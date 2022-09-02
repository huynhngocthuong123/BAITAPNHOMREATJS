import { quanLyRapService } from "../../Service/ServiceCumRap";
export const layDSRap = () => {
  // xử lý thành công
  const result = quanLyRapService.layDSHeThongRap();
  //   console.log("ketqua", result);
  return result;
};
