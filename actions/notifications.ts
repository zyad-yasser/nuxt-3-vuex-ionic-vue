import axios from "axios";
import { apiUrl } from "~~/config";

export const registerNotificationAtServer = async (
    platform: string,
    token: string,
    model: string,
    uuid: string
  ) => {
    const { headers } = await getAuthTokenHeader();
    const url = `${apiUrl}/push/${platform}/`;
  
    const data = {
      registration_id: token,
      device_name: model,
      device_id: uuid,
    };
  
    return axios({
      method: 'post',
      url,
      headers,
      data,
    });
  };