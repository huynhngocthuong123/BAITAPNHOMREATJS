import axios from "axios";
import { URL_API, TOKEN } from "../Util/setting";
import { GPOUP_ID } from "../Util/setting";

export default class ServicebaseAxios {
  GET = (url) => {
    return axios({
      method: "get",
      url: `${URL_API}/${url}?maNhom=${GPOUP_ID}`,
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
  };
}
