import axios from 'axios';
import {Platform} from 'react-native';
import {SHOWAPILOG} from '../global/const';
import Config from '../global/env';
import {Url} from './url';
import {addHeaderSignature} from '../utility/hash_util';
import {AppConfig} from '../global/appConfig';

const printRequestLog = (api, data) => {
  if (!SHOWAPILOG) {
    return;
  }
  const logString = `
======================== Request ========================

api: ${api}
request: ${JSON.stringify(data)}
date: ${Date()}

=========================================================
`;

  console.log(logString);
};

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
    console.log(logString);
  } else {
    console.error(logString);
  }
};

const baseUrl = Config.apiUrl;
const logUrl = Config.apiLogUrl;

const ServerTimeOffset = {value: 0};
export const setServerTimeOffset = offset => {
  ServerTimeOffset.value = offset || 0;
};
export default class Api {
  static call = async (url, data, method = 'POST', containImage = false) => {
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
      params: data,
    };

    const deviceInfo = {
      DeviceInfo: `{ "uuid": "${Config.uniqueId}","version": "${Config.version}", "platform": "${Config.platform}", "osVersion": "${Config.baseOs}",   "model": "${Config.brand}", "channel":"${Config.channelId}", "appName":"${Config.appNameEng}", "appType":"${Config.appType}", "sessionId":"${AppConfig.instance.sessionId}" }`,
    };

    if (url.startsWith('live/')) {
      configuratinObject.url = `${baseUrl}${url}`;
      configuratinObject.headers = {
        ...configuratinObject.headers,
        ...deviceInfo,
      };
    }
    if (url.startsWith('log/')) {
      configuratinObject.url = `${logUrl}${url}`;
      configuratinObject.headers = deviceInfo;
    }
    if (url === Url.getServerTime) {
      configuratinObject.url = `${baseUrl}${url}`;
    }

    configuratinObject.headers = {
      ...configuratinObject.headers,
      Locale: Config.locale,
      Timezone: Config.timeZone,
      ...(containImage ? {'Content-Type': 'multipart/form-data'} : {}),
    };
    const timestamp =
      Math.floor(new Date().getTime() / 1000) + ServerTimeOffset.value;
    configuratinObject.headers = {
      ...configuratinObject.headers,
      Signature: addHeaderSignature(method === 'GET' ? data : '', timestamp),
      Timestamp: timestamp,
    };

    if (containImage) {
      configuratinObject.transformRequest = (_, headers) => data;
    }

    printRequestLog(url, configuratinObject);

    try {
      const response = await axios(configuratinObject);
      const {code, data, msg} = response.data;

      if (response.status === 200) {
        if (code == 0) {
          printResponseLog(url, data, true);
          return {success: true, data: data, message: msg};
        } else {
          printResponseLog(url, msg, true);
          return {success: false, data: data, message: msg};
        }
      } else {
        printResponseLog(url, msg, false);
        return {success: false, data: null, message: msg};
      }
    } catch (error) {
      const status = error?.response?.status;
      const msg = error?.response?.data?.msg;

      printResponseLog(url, msg ?? error, false);

      if (status === 401) {
        return {success: false, data: null, message: msg ?? ''};
      } else {
        return {success: false, data: null, message: 'Internal Server Error'};
      }
    }
  };
}