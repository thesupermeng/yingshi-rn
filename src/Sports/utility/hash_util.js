import md5 from 'crypto-js/md5';
export const addHeaderSignature = (params, timestamp, salt = 'salt') => {
  const keys = Object.keys(params || {}).sort();
  const end = `${keys?.map(k => params[k]).join('')}${timestamp}${salt}`;
  return md5(end).toString();
};
