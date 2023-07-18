import axios from 'axios';
import { Platform } from 'react-native';
// import {getAccessToken, getAuthToken} from '../global/asyncStorage';
import Config from '../global/env';
// import {addHeaderSignature} from './util';
import { MATCH_API_DOMAIN } from '../../utility/constants';


const printResponseLog = (api, response, success) => {
  if (!SHOWAPILOG) {
    return;
  }
  const title = success ? 'Response' : 'Error';
  const logString = `
======================== ${title} ========================
  
api: ${api}
response: ${typeof response === 'object' ? JSON.stringify(response) : response}
date: ${Date()}
  
=========================================================
`;

  if (success) {
    // console.log(logString);
  } else {
    // console.error(logString);
  }
};

const baseUrl = Config.apiUrl;
const authUrl = Config.apiAuthUrl;
const logUrl = Config.apiLogUrl;

export default class Api {
  static call = async (url, data, method = 'POST') => {
    // add default params
    if (!data) {
      data = {};
    }
    switch (Platform.OS) {
      case 'ios':
        data['device_type'] = 1;
        break;
      case 'android':
        data['device_type'] = 2;
        break;
      default:
        data['device_type'] = 2;
        break;
    }

    const configuratinObject = {
      method: method,
      // data: method === 'GET' ? null : data,
      data: null,
      params: data,
    };

    // const token = await getAccessToken('');
    // const authToken = await getAuthToken('');
    const token = '';
    const authToken = '';

    const deviceInfo = {
      DeviceInfo: `{ "uuid": "${Config.uniqueId}","version": "${Config.version}", "platform": "${Config.platform}", "osVersion": "${Config.baseOs}",   "model": "${Config.brand}", "channel":"${Config.channelId}", "appName":"${Config.appNameEng}", "appType":"${Config.appType}" }`,
    };

    // console.log(deviceInfo)
    if (url.startsWith('live/')) {
      configuratinObject.url = `${baseUrl}${url}`;
      if (token) {
        configuratinObject.headers = { Authorization: `Bearer ${token}` };
      }
      configuratinObject.headers = {
        ...configuratinObject.headers,
        ...deviceInfo,
      };
    }
    if (url.startsWith('log/')) {
      configuratinObject.url = `${logUrl}${url}`;
      configuratinObject.headers = deviceInfo;
    }
    if (url.startsWith('auth/')) {
      configuratinObject.url = `${authUrl}${url}`;
      if (authToken) {
        configuratinObject.headers = { Authorization: `Bearer ${authToken}` };
      }
      configuratinObject.headers = {
        ...configuratinObject.headers,
        ...deviceInfo,
      };
    }

    configuratinObject.headers = {
      ...configuratinObject.headers,
      Locale: Config.locale,
      Timezone: Config.timeZone,
    };

    const timestamp = Math.floor(new Date().getTime() / 1000);
    configuratinObject.headers = {
      ...configuratinObject.headers,
      Signature: data,
      Timestamp: timestamp,
    };

    // printRequestLog(url, configuratinObject);
    // return axios(configuratinObject);
    // console.log('calling', `${MATCH_API_DOMAIN}${url}`, configuratinObject)
    // return axios(configuratinObject);
    try {
      const response = await axios(configuratinObject);
      // console.log(configuratinObject)
      const {code, data, msg} = response.data;
      // console.log(data, msg, code);
      if (response.status === 200) {
        if (code == 0) {
          return {success: true, data: data, message: msg};
        } else {
          return {success: false, data: data, message: msg};
        }
      } else {
        
        return {success: false, data: null, message: msg};
      }
    } catch (error) {
      // console.log("ERR", error)
      const status = error?.response?.status;
      const msg = error?.response?.data?.msg;

      // console.log(url, msg ?? error, false);

      if (status === 401) {

        return {success: false, data: null, message: msg ?? ''};
      } else {
        return {success: false, data: null, message: 'Internal Server Error'};
      }
    }
  };
}
