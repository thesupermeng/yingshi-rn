import {API_DOMAIN, API_DOMAIN_TEST} from '../utility/constants';
import axios from 'axios';
import {useAppSelector} from '../hooks/hooks';
import {RootState} from '../redux/store';
import deviceInfoModule from 'react-native-device-info';
//import {refreshUserToken, updateAnonymous} from '~redux/auth/authSlice';
import DeviceInfo from 'react-native-device-info';
let user_token = '';
let refresh_token = '';
import { Platform } from "react-native";
import {
  YING_SHI_PIN_ANDROID,
  YING_SHI_PIN_IOS,
} from '../utility/constants';

// new code
export const registerUser = async ({email, referral_code, otp}: any) => {
  let platform_id;
  let deviceId = await DeviceInfo.getUniqueId();
  if (typeof deviceId !== 'string') {
    deviceId = JSON.stringify(deviceId);
  }

  if (Platform.OS === 'android') {
    platform_id = YING_SHI_PIN_ANDROID;
  } else {
    platform_id = YING_SHI_PIN_IOS;
  }

  let json = {
    email: email,
    referral_code: referral_code,
    // device_id: deviceInfoModule.getDeviceId(),
    device_id: deviceId,
    otp: otp,
    product: platform_id,
    platform_id: platform_id,
  };
  console.log('json');
  console.log(json);
  let result = await axios.post(API_DOMAIN_TEST + 'users/v1/register', json);
  console.log('result');
  console.log(result);
  return result;
};

export const loginUser = async ({email, otp}: any) => {
  let platform_id;
  if (Platform.OS === 'android') {
    platform_id = YING_SHI_PIN_ANDROID;
  } else {
    platform_id = YING_SHI_PIN_IOS;
  }

  let json = {
    email: email,
    otp: otp,
    product: platform_id,
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
