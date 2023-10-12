import {API_DOMAIN, API_DOMAIN_TEST} from '../utility/constants';
import axios from 'axios';
import {useAppSelector} from '../hooks/hooks';
import {RootState} from '../redux/store';
import deviceInfoModule from 'react-native-device-info';
//import {refreshUserToken, updateAnonymous} from '~redux/auth/authSlice';
import DeviceInfo from 'react-native-device-info';
let user_token = '';
let refresh_token = '';
// new code
export const registerUser = async ({email, referral_code, otp}: any) => {
  let deviceId = await DeviceInfo.getUniqueId();
  if (typeof deviceId !== 'string') {
    deviceId = JSON.stringify(deviceId);
  }

  let json = {
    email: email,
    referral_code: referral_code,
    // device_id: deviceInfoModule.getDeviceId(),
    device_id: deviceId,
    otp: otp,
    product: 2, // 1: 影视TV, 2: 萤视频
  };
  console.log('json');
  console.log(json);
  let result = await axios.post(API_DOMAIN_TEST + 'users/v1/register', json);
  console.log('result');
  console.log(result);
  return result;
};

export const loginUser = async ({email, otp}: any) => {
  let json = {
    email: email,
    otp: otp,
    product: 2, // 1: 影视TV, 2: 萤视频
  };

  let result = await axios.post(API_DOMAIN_TEST + 'users/v1/login', json);
  return result;
};

export const updateUsername = async ({
  username,
  referralCode,
  bearerToken,
}: any) => {
  // Define your request headers
  const headers = {
    Authorization: `Bearer ${bearerToken}`,
    'Content-Type': 'application/json', // Set your content type accordingly
  };

  let json = {
    username: username,
    referral_code: referralCode,
  };

  let result = await axios.post(API_DOMAIN_TEST + 'users/v1/update', json, {
    headers: headers,
  });

  return result;
};

export const getUserDetails = async ({bearerToken}: any) => {
  if (bearerToken == '') {
    return null;
  }
  // Define your request headers
  const headers = {
    Authorization: `Bearer ${bearerToken}`,
    'Content-Type': 'application/json', // Set your content type accordingly
  };

  let result = await axios.get(API_DOMAIN_TEST + 'users/v1/me', {
    headers: headers,
  });

  return result;
};
