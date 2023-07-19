import vars from './vars';
import Api from '../middleware/api';
import {Url} from '../middleware/url';
import {Alert, Linking, Platform} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import {
  PERMISSIONS,
  RESULTS,
  check,
  openSettings,
} from 'react-native-permissions';
import RNFS from 'react-native-fs';
import AppSettingsAction from '../redux/actions/appSettingsAction';
import Config from '../global/env';
import {AppConfig} from '../global/appConfig';
import {getPredictionShareTimeStamp} from '../global/asyncStorage';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import {showToast} from './toast';

/**
 ** Format and return date in Humanize format
 ** Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 ** Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */
export const formatDate = (
  value,
  formatting = {hour: 'numeric', minute: 'numeric', hour12: false},
) => {
  if (!value) return value;
  return new Intl.DateTimeFormat('zh', formatting).format(new Date(value));
};

export const formatViewerCount = view => {
  if (view >= 10000) {
    const v = (view / 10000).toFixed(2);

    if (v.endsWith('0')) {
      return `${v.slice(0, -1)}万`;
    } else {
      return `${v}万`;
    }
  } else {
    return view;
  }
};

export const formatToDate = newDate => {
  if (!newDate) {
    return '';
  }

  // if (typeof newDate == 'string') {
  //   newDate = newDate.replace(/-/g, '/');
  // }

  //一小时
  let minute = 3600000;
  //一天
  let days = 86400000;

  let sdays = 259200000;
  let oleDate = new Date();
  newDate = new Date(newDate);
  let time = oleDate - newDate;
  let date = '';
  if (time < minute) {
    //一小时内的
    date = Math.floor(time / 1000 / 60) + '分钟前';
  } else if (time < days) {
    date = Math.floor(time / minute) + '小时前';
  } else {
    if (time > sdays) {
      return formatDate(newDate);
    } else {
      date = Math.floor(time / days) + '天前';
    }
  }
  return date;
};

// ** Checks if the passed date is today
export const isToday = date => {
  const today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  );
};

export const isSameDay = (d1, d2) => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

export const formatWeek = date => {
  const myDate = parseStringToDate(date);

  let mm = myDate.getDay();
  let weeks = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ];
  return weeks[mm];
};

export const parseStringToDate = dateStr => {
  if (!dateStr) return new Date();
  if (typeof dateStr === 'string') {
    const splittedDate = dateStr.split(' ');
    const day = splittedDate[0].split('-');
    return new Date(day[0], day[1] - 1, day[2]);
  }

  return new Date(dateStr); // dateStr is object
};

export const formatMatchDate = matchDate => {
  if (!matchDate) {
    return '';
  }

  let formatedDateString = '';

  date = new Date(matchDate);
  if (isToday(date)) {
    formatedDateString += '今天 ';
  }

  if (typeof matchDate == 'string') {
    let ar = matchDate.split(/[-:\s]+/);
    formatedDateString += parseInt(ar[1]) + '月' + ar[2] + '日 ';
    // return formatedDateString;
  }

  // const month = date.getMonth() + 1;
  // const day = date.getDate();
  // formatedDateString += `${month}月${day}日`;

  formatedDateString += formatWeek(matchDate);
  // formatedDateString += formatDate(matchDate, {
  //   month: 'long',
  //   day: 'numeric',
  //   weekday: 'long',
  // });
  return formatedDateString;
};

export const formatDateToDayMonth = timestamp => {
  if (!timestamp) {
    return '';
  }

  const date = new Date(timestamp);
  const dateString = date.toISOString().split('T')[0];
  let ar = dateString.split(/[-:\s]+/);
  return `${ar[2]}-${ar[1]}`;
};

export const formatDateToDayMonthYear = (timestamp, isSlashFormat = false) => {
  if (!timestamp) {
    return '';
  }

  const date = new Date(timestamp);
  const dateString = date.toISOString().split('T')[0];
  let ar = dateString.split(/[-:\s]+/);
  return isSlashFormat
    ? `${ar[2]}/${ar[1]}/${ar[0]}`
    : `${ar[0]}-${ar[1]}-${ar[2]}`;
};

export const getFormatDate = (matchDate, type) => {
  if (!matchDate) {
    return '';
  }

  let formatedDateString = '';

  const date = new Date(matchDate);
  if (isToday(date)) {
    formatedDateString = '今天 ';
  } else {
    if (typeof matchDate == 'string') {
      let ar = matchDate.split(/[-:\s]+/);
      if (ar.length >= 3) {
        if (type === 'fullFormat') {
          formatedDateString = `${ar[0]}/${ar[1]}/${ar[2]}`;
        }
        if (type === 'slashFormat') {
          formatedDateString = `${ar[1]}/${ar[2]}`;
        }
        if (!type) {
          formatedDateString = ar[1] + '月' + ar[2] + '日';
        }
      }
    }
  }

  return formatedDateString;
};

export const getFormatTime = matchDate => {
  if (!matchDate) {
    return '';
  }

  let formatedDateString = '';

  if (typeof matchDate == 'string') {
    let ar = matchDate.split(/[-:\s]+/);
    if (ar.length >= 5) {
      formatedDateString = ar[3] + ':' + ar[4];
    }
  }

  return formatedDateString;
};

//每当新增球类，需另外添加
export const calculateScore = (scoresArray, sportType) => {
  let totalScore = 0;

  if (scoresArray && Array.isArray(scoresArray)) {
    if (sportType == 1) {
      if (scoresArray.length >= 6) {
        totalScore = scoresArray[5] > 0 ? scoresArray[5] : scoresArray[0];
      }
    } else if (sportType == 2) {
      scoresArray.forEach(s => {
        totalScore += parseInt(s);
      });
    } else {
      if (scoresArray.length > 0) {
        totalScore = scoresArray[0];
      }
    }
  }

  return totalScore;
};

export const calculateHalfMatchScore = (scoresArray, sportType, count = 4) => {
  let halfTimeScore = 0;
  if (scoresArray && Array.isArray(scoresArray)) {
    if (sportType == 1) {
      halfTimeScore = scoresArray.length > 0 ? scoresArray[1] : null;
    }
    if (sportType == 2) {
      halfTimeScore =
        scoresArray.length > 0 ? scoresArray[0] + scoresArray[1] : null;
    }
  }
  return halfTimeScore;
};

export const calculateMatchScore = score => {
  if (score && Array.isArray(score)) {
    var totalScore = 0;
    score.forEach(s => {
      totalScore += parseInt(s);
    });
    return totalScore;
  } else {
    return score ?? 0;
  }
};

export const getLiveStatus = status => {
  switch (status) {
    case 0:
      return '已拒绝';
    case 1:
      return '待审核';
    case 2:
      return '已通过';
    case 3:
      return '正在直播';
    case 4:
      return '已下播';
    default:
      return '无状态';
  }
};

export const getMatchStatus = (state, status, sportType) => {
  let matchStatus = '';
  // console.log('testingLog', status);
  if (status == 0) {
    matchStatus = '未开始';
  }

  if (status == 1) {
    matchStatus = '比赛开始';
  }

  if (status == -1) {
    matchStatus = '已结束';
  }

  if (status == -2) {
    if (sportType == 1) {
      matchStatus = vars.footballMatchStatus[state];
    }

    if (sportType == 2) {
      matchStatus = vars.basketballMatchStatus[state];
    }
  }

  return matchStatus;
};

export const formatStringDate = date => {
  let tempDate = new Date(date);
  return (
    tempDate.getFullYear() +
    '-' +
    ('0' + (tempDate.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + tempDate.getDate()).slice(-2)
  );
};

export const deepCopyArray = array => {
  return JSON.parse(JSON.stringify(array));
};

export const liveRoomName = async matchId => {
  const params = {id: matchId};
  const res = await Api.call(Url.liveRoomDetail, params, 'GET');
  if (res.success) {
    if (res.data.id === 0) {
      return 'noMatchDetails';
    }
    return 'MatchDetailsPage';
    // if (res?.data?.streams?.length > 0 && res?.data?.streams[0].status === 3) {
    //   return 'MatchDetailsPage';
    // }
    // if (res?.data?.status == 0 || res?.data?.status == 1) {
    //   return 'BeforeLivePage';
    // } else {
    //   return 'AfterLivePage';
    // }
  }
};

export const getMatchScore = (scores, sportType) => {
  let scoreObj = null;
  if (sportType == 1) {
    scoreObj = {
      homeScore: scores[2],
      awayScore: scores[3],
      state: scores[1],
    };
  } else if (sportType == 2) {
    scoreObj = {
      homeScore: scores[3],
      awayScore: scores[4],
      state: scores[1],
    };
  }

  return scoreObj;
};

export const round = (value, precision) => {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

export const getMatchStorylineStatus = status => {
  switch (status) {
    case 11:
      return '中场';
    case 12:
      return '结束';
    case 19:
      return '伤停补时';
    case 26:
      return '加时赛结束';
    case 27:
      return '点球大赛结束';
    default:
      return '无状态';
  }
};

var lastPressTime = 0;
var underGap = false; //检查是否还在 时间隔 内
export const adsClick = (apkUrl, landingUrl, adsId) => {
  const curTime = Date.now();
  const responTime = 5000; // 间隔时间
  // console.log('检查间隔', curTime, lastPressTime, curTime - lastPressTime);
  if (curTime - lastPressTime > responTime) {
    lastPressTime = curTime;
    underGap = false;
  } else {
    lastPressTime = curTime;
    underGap = true;
  }
  if (Platform.OS === 'android') {
    if (landingUrl) {
      Linking.openURL(landingUrl);
      AppSettingsAction.instance.sendAdsClick(adsId);
      return;
    }
    check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log('This feature is not available on this device');
          break;
        case RESULTS.DENIED:
          // setSelfForceUpdateDesc('请到设置打开存储空间权限');
          Alert.alert(
            '',
            '请到设置打开存储空间权限',
            [
              {
                text: '设置',
                onPress: () => {
                  openSettings();
                },
              },
            ],
            {
              cancelable: false,
            },
          );
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          if (underGap) {
            showToast('应用下载中，请稍等几秒钟进行安装～');
            return;
          }
          if (!apkUrl || !adsId) return; // 其中一个为空不运行
          const date = Date.now();
          const android = ReactNativeBlobUtil.android;
          const downloadPath = `${RNFS.ExternalStorageDirectoryPath}/Download/project-${date}.apk`;
          ReactNativeBlobUtil.config({
            // fileCache: true,
            addAndroidDownloads: {
              useDownloadManager: true,
              title: `project-${date}.apk`,
              description: 'An APK that will be installed',
              mime: 'application/vnd.android.package-archive',
              mediaScannable: true,
              notification: true,
              path: downloadPath,
            },
          })
            .fetch('GET', apkUrl)
            .progress((received, total) => {})
            .then(res => {
              AppSettingsAction.instance.sendAdsClick(adsId);
              android.actionViewIntent(
                res.path(),
                'application/vnd.android.package-archive',
              );
            })
            .catch(err => {
              console.log(err);
            });
          break;
        case RESULTS.BLOCKED:
          // setSelfForceUpdateDesc('请到设置打开存储空间权限');
          Alert.alert(
            '',
            '请到设置打开存储空间权限',
            [
              {
                text: '设置',
                onPress: () => {
                  openSettings();
                },
              },
            ],
            {
              cancelable: false,
            },
          );
          break;
      }
    });
  }
  if (Platform.OS === 'ios') {
    if (!landingUrl || underGap) return;
    Linking.canOpenURL(landingUrl).then(supported => {
      if (supported) {
        AppSettingsAction.instance.sendAdsClick(adsId);
        Linking.openURL(landingUrl);
      } else {
        console.log("Don't know how to open URI: " + landingUrl);
      }
    });
  }
};

// 广告模块中右下角的百度广告按钮跳转链接
export const linkClick = link => {
  const url = link || 'https://union.baidu.com/bqt/#/';
  Linking.canOpenURL(url).then(supported => {
    // if (supported) {
    Linking.openURL(url);
    // } else {
    //   console.log("Don't know how to open URI: " + url);
    // }
  });
};

export const createShareLink = async (path, id) => {
  const params = {path: path, params: {channel_id: Config.channelId}};
  switch (path) {
    case 'news':
      params.params.news_id = id;
      break;
    case 'streams':
      params.params.match_id = id;
      break;
    case 'info':
      params.params.info_id = id;
      break;
    default:
      break;
  }
  const response = await Api.call(Url.createShare, params);
  if (response.success) {
    const key = response.data;
    const shareLink = `${AppConfig.instance.config?.shortUrlDomain}/${key}`;
    return shareLink;
  } else {
    return '';
  }
};

export const comparePredictionShareTimeStamp = async () => {
  const response = await getPredictionShareTimeStamp();
  var date = new Date(response);
  if (isToday(date)) {
    return true;
  } else {
    return false;
  }
};

export const mergeDeep = (target, ...sources) => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {[key]: {}});
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {[key]: source[key]});
      }
    }
  }
  return mergeDeep(target, ...sources);
};

export const countPostTime = timeStamp => {
  let currentTimeStamp = new Date().getTime() - timeStamp * 1000;

  let yearDiff = Math.floor(currentTimeStamp / 1000 / 60 / 60 / 24 / 365);
  let monthDiff = Math.floor(currentTimeStamp / 1000 / 60 / 60 / 24 / 30);
  let dayDiff = Math.floor(currentTimeStamp / 1000 / 60 / 60 / 24);
  let hourDiff = Math.floor(currentTimeStamp / 1000 / 60 / 60);
  let minuteDiff = Math.floor(currentTimeStamp / 1000 / 60);
  let secondDiff = Math.floor(currentTimeStamp / 1000);

  if (yearDiff >= 1) {
    return yearDiff + '年前发布';
  } else if (monthDiff >= 1) {
    return monthDiff + '个月前发布';
  } else if (dayDiff >= 1) {
    return dayDiff + '天前发布';
  } else if (hourDiff >= 1) {
    return hourDiff + '小时前发布';
  } else if (minuteDiff >= 1) {
    return minuteDiff + '分钟前发布';
  } else if (secondDiff >= 1) {
    return secondDiff + '秒前发布';
  } else {
    return '';
  }
};

const isObject = item => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

export const convertSeasonList = list => {
  return list.map(e => {
    const yearList = e?.year?.split('-') ?? [];
    if (yearList.length > 1) {
      const formatList = yearList.map(item => {
        if (item.length >= 4) {
          return item.substring(2, item.length);
        }
        return item;
      });
      return {id: e?.id, year: formatList.join('-')};
    }
    return e;
  });
};

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

export const getRandomDeepColor = () => {
  const min = 20;
  const balance = 170;
  return `rgb(${Math.floor(Math.random() * balance) + min},${
    Math.floor(Math.random() * balance) + min
  },${Math.floor(Math.random() * balance) + min})`;
};
