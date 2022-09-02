import axios from "axios";
import { URL_API, TOKEN } from "../Util/setting";

export default class ServicebaseAxios {
  GET = (url) => {
    return axios({
      method: "get",
      url: `${URL_API}/${url}`,
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
  };
}
