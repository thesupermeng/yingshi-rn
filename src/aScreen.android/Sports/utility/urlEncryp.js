import Config from '../global/env';
import CryptoJS from 'crypto-js';
import {AppConfig} from '../global/appConfig';

const decryptURL = (src) => {
  // console.log('src', src);
  var key = Config.urlEncryptKey;
  var base64data = CryptoJS.enc.Base64.parse(String(src));
  var encrypted = new CryptoJS.lib.WordArray.init(
    base64data.words.slice(4),
    base64data.sigBytes - 16,
  );
  var iv = new CryptoJS.lib.WordArray.init(base64data.words.slice(0, 4));
  var cipher = CryptoJS.lib.CipherParams.create({ciphertext: encrypted});
  var decrypted = CryptoJS.AES.decrypt(cipher, CryptoJS.enc.Utf8.parse(key), {
    iv: iv,
    mode: CryptoJS.mode.CFB,
    padding: CryptoJS.pad.NoPadding,
  });
  // console.log('srcnew', decrypted.toString(CryptoJS.enc.Utf8));
  return decrypted.toString(CryptoJS.enc.Utf8);
};

export const parseVideoURL = (src) => {
  const referer =
    AppConfig.instance.config.boosterLink || 'https://example.com';
  const origin = AppConfig.instance.config.boosterSalt || 'https://example.com';

  // console.log(referer, origin)
  return {
    uri: decryptURL(src),
    headers: {
      referer,
      origin,
    },
  };
};
