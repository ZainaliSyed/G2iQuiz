import base64 from "base-64";
import { create } from "apisauce";
import Utils from "../util";
import {
  API_LOG,
  BASE_URL,
  API_TIMEOUT,
  ERROR_CLIENT,
  ERROR_REQUEST_CANCEL,
  ERROR_REQUEST_TIMEOUT,
  ERROR_SERVER_CONNECTION,
  ERROR_SOMETHING_WENT_WRONG,
  ERROR_NETWORK_NOT_AVAILABLE
} from "../config/WebService";

const api = create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT
});

class ApiSauce {
  async get(url, data) {
    const response = await api.get(url, data);
    console.log("Api Response : ", response);
    // if (__DEV__ && API_LOG) {
    //   console.log(response);
    // }
    return new Promise((resolve, reject) => {
      if (response.ok && response.data && !response.data.error) {
        resolve(response.data);
      } else {
        if (response.status === 500) {
          reject(ERROR_SOMETHING_WENT_WRONG);
        }
        reject(response.data || ERROR_SOMETHING_WENT_WRONG);
      }
    });
  }
}

export default new ApiSauce();
