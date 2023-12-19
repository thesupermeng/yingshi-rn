import { API_DOMAIN, API_DOMAIN_TEST } from "@utility/constants";
import axios from "axios";
import DeviceInfo from "react-native-device-info";

import { Platform } from "react-native";
import {
  YING_SHI_PRODUCT_ANDROID,
  YING_SHI_PRODUCT_IOS,
} from "@utility/constants";

// new code
export const signinupUser = async ({
  loginType,
  email,
  phone,
  countryId,
  referralCode,
  otp,
  isGoogleLogin = false,
}: {
  loginType: 'EMAIL' | 'SMS',
  email?: string,
  phone?: string,
  countryId?: number,
  referralCode?: string,
  otp?: string,
  isGoogleLogin?: boolean,
}) => {
  let platform_id;
  let deviceId = await DeviceInfo.getUniqueId();
  if (typeof deviceId !== "string") {
    deviceId = JSON.stringify(deviceId);
  }

  if (Platform.OS === "android") {
    platform_id = YING_SHI_PRODUCT_ANDROID;
  } else {
    platform_id = YING_SHI_PRODUCT_IOS;
  }

  let json = {
    request_otp_by: loginType,
    email: email,
    phone_number: phone,
    country_id: countryId,
    device_id: deviceId,
    referral_code: referralCode,
    product: platform_id,
    platform_id: platform_id,
    otp: otp,
    is_social_login: isGoogleLogin,
  };

  console.log('111')
  console.log(json)

  let result = await axios.post(API_DOMAIN + 'users/v1/signinup', json, {
    validateStatus: status => (status >= 200 && status < 300) || status === 400
  });

  console.log('222')
  console.log(result.data)

  if (result.data.code === -1) {
    throw result.data.message;
  }

  return result.data;
}

// export const registerUser = async ({ email, referral_code, otp }: any) => {
//   let platform_id;
//   let deviceId = await DeviceInfo.getUniqueId();

//   if (typeof deviceId !== "string") {
//     deviceId = JSON.stringify(deviceId);
//   }

//   if (Platform.OS === "android") {
//     platform_id = YING_SHI_PRODUCT_ANDROID;
//   } else {
//     platform_id = YING_SHI_PRODUCT_IOS;
//   }

//   let json = {
//     email: email,
//     referral_code: referral_code,
//     // device_id: deviceInfoModule.getDeviceId(),
//     device_id: deviceId,
//     otp: otp,
//     product: platform_id,
//     platform_id: platform_id,
//   };
//   console.log("json");
//   console.log(json);
//   let result = await axios.post(API_DOMAIN_TEST + "users/v1/register", json);
//   console.log("result");
//   console.log(result);
//   return result;
// };

// export const loginUser = async ({ email, otp }: any) => {
//   let platform_id;
//   let deviceId = await DeviceInfo.getUniqueId();
//   if (typeof deviceId !== "string") {
//     deviceId = JSON.stringify(deviceId);
//   }

//   if (Platform.OS === "android") {
//     platform_id = YING_SHI_PRODUCT_ANDROID;
//   } else {
//     platform_id = YING_SHI_PRODUCT_IOS;
//   }

//   let json = {
//     email: email,
//     otp: otp,
//     product: platform_id,
//     device_id: deviceId,
//   };

//   let result = await axios.post(API_DOMAIN_TEST + "users/v1/login", json);
//   return result;
// };

// export const updateUsername = async ({
//   username,
//   referralCode,
//   bearerToken,
// }: any) => {
//   // Define your request headers
//   const headers = {
//     Authorization: `Bearer ${bearerToken}`,
//     "Content-Type": "application/json", // Set your content type accordingly
//   };

//   let json = {
//     username: username,
//     referral_code: referralCode,
//   };

//   let result = await axios.post(API_DOMAIN_TEST + "users/v1/update", json, {
//     headers: headers,
//   });

//   return result;
// };

// export const getUserDetails = async ({ bearerToken }: any) => {
//   if (bearerToken == "") {
//     return null;
//   }
//   let deviceId = await DeviceInfo.getUniqueId();
//   if (typeof deviceId !== "string") {
//     deviceId = JSON.stringify(deviceId);
//   }
//   // Define your request headers
//   const headers = {
//     Authorization: `Bearer ${bearerToken}`,
//     "Content-Type": "application/json", // Set your content type accordingly
//     "Device-Id": deviceId
//   };

//   let result = await axios.get(API_DOMAIN_TEST + "users/v1/me", {
//     headers: headers,
//   });

//   return result;
// };
