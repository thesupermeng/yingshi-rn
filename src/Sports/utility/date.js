// import {useState} from 'react';

import {useState} from 'react';
import {getMatchStatus} from './utils';

const isNumber = obj => {
  return typeof obj === 'number' && !isNaN(obj);
};
const formatNumber = n => {
  if (!isNumber(n)) {
    return '';
  }
  return n <= 9 ? '0' + n : '' + n;
};

const formatDateTime = date => {
  if (typeof date == 'string') {
    let ar = date.split(/[-:\s]+/);
    return ar[1] + '月' + ar[2] + '日 ' + ar[3] + ':' + ar[4];
    // return ar[1] + '-' + ar[2] + ' ' + ar[3] + ':' + ar[4] + ':' + ar[5];
  }

  date = new Date(date);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const d = [year, month, day].map(formatNumber).join('-');
  const time = [hour, minute, second].map(formatNumber).join(':');

  const formattedHour = formatNumber(hour);
  const formattedMinute = formatNumber(minute);

  const dateTT = `${month}月${day}日 ${formattedHour}:${formattedMinute}`;

  //   return `${d} ${time}`;
  return dateTT;
};
const formatDate = date => {
  if (typeof date == 'string') {
    let ar = date.split(/[-:\s]+/);
    return parseInt(ar[1]) + '月' + ar[2] + '日';
  }

  date = new Date(date);

  date = new Date(date);

  // const year = date.getFullYear()
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // const d = [year, month, day].map(util.formatNumber).join('-')

  return `${month}月${day}日`;
};

const parseStringToDate = dateStr => {
  console.log('dateStr', dateStr);
  if (!dateStr) return new Date();
  if (typeof dateStr === 'string') {
    const splittedDate = dateStr.split(' ');
    const day = splittedDate[0].split('-');
    return new Date(day[0], day[1] - 1, day[2]);
  }

  return new Date(dateStr); // dateStr is object
};

const parseDate = str => {
  if (!str) {
    return '';
  }
  if (typeof str == 'string') {
    str = str.replace(/-/g, '/');
  }
  try {
    let d = new Date(str);
    return d;
  } catch (e) {
    console.error('date format error: ' + str);
    return '';
  }
};
const dateFormat = (date, fmt = 'yyyy-MM-dd') => {
  if (!date) {
    return '';
  }
  if (typeof date == 'string') {
    date = date.replace(/-/g, '/');
  }
  date = new Date(date);

  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'S+': date.getMilliseconds(),
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length),
    );
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? o[k]
          : ('00' + o[k]).substr(String(o[k]).length),
      );
    }
  }
  return fmt;
};

const formatToDateCountdown = leftTime => {
  // 定义变量 d,h,m,s保存倒计时的时间
  if (leftTime >= 0) {
    console.log('leftTimeaa', leftTime);
    // 天
    day = Math.floor(leftTime / 1000 / 60 / 60 / 24);
    // 时
    var h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
    hour = h < 10 ? '0' + h : String(h);
    console.log('leftTimebb', hour);
    // 分
    var m = Math.floor((leftTime / 1000 / 60) % 60);
    min = m < 10 ? '0' + m : String(m);
    console.log('leftTimecc', min);
    // 秒
    var s = Math.floor((leftTime / 1000) % 60);
    second = s < 10 ? '0' + s : String(s);
    console.log('leftTimedd', second);
  } else {
    day = '00';
    hour = '00';
    min = '00';
    second = '00';
  }

  // return `距离开赛时间: ${day}天 ${hour} 小時 ${min} 分鐘 ${second} 秒`;
  console.log('second', second);
  return {day, hour, min, second};
};

const matchOnTime = (matchStartTime, sportType, matchStatus, matchState) => {
  const timeOnGoing = new Date().getTime() - matchStartTime * 1000;
  // const timeOnGoing = 110000;
  // console.log('matchState', timeOnGoing);
  if (sportType === 1) {
    if (matchState === 3) {
      return '中场';
    }
    if (matchState === 5) {
      return '加时赛';
    }
    if (matchState === 7) {
      return '点球决战';
    }
    if (matchState <= 2 && matchStatus === 1) {
      return `${
        Math.floor((timeOnGoing % (1000 * 60 * 60)) / (1000 * 60)) + 1
      }'`;
    }
    if (matchState > 2 && matchStatus === 1) {
      return `${
        Math.floor((timeOnGoing % (1000 * 60 * 60)) / (1000 * 60)) + 1 + 45
      }'`;
    }
    if (matchStatus !== 1)
      return getMatchStatus(matchState, matchStatus, sportType);
  }
  if (sportType === 2) {
    if (matchStatus === 1) {
      var minutes;
      var seconds;
      var m = Math.floor(matchStartTime / 60);
      minutes = m < 10 ? '0' + m : String(m);
      var s = Math.floor(matchStartTime % 60);
      seconds = s < 10 ? '0' + s : String(s);
      return `${minutes}:${seconds}'`;
    }
    if (matchStatus !== 1)
      return getMatchStatus(matchState, matchStatus, sportType);
  }
};

const matchRunningStatusBasketball = (sportType, matchStatus, matchState) => {
  // console.log('matchState', matchState);
  if (sportType === 2) {
    if (matchStatus === 1) {
      switch (matchState) {
        case 1:
          return '未开赛';
        case 2:
          return '第一节';
        case 3:
          return '第一节完';
        case 4:
          return '第二节';
        case 5:
          return '第二节完';
        case 6:
          return '第三节';
        case 7:
          return '第三节完';
        case 8:
          return '第四节';
        case 9:
          return '加时';
        case 10:
          return '完场';
        case 11:
          return '中断';
        case 12:
          return '取消';
        case 13:
          return '延期';
        case 14:
          return '腰斩';
        case 15:
          return '待定';
        default:
          return false;
      }
    }
    if (matchStatus < 0) {
      return false;
    }
  }
};

export {
  dateFormat,
  parseDate,
  parseStringToDate,
  formatDate,
  formatDateTime,
  formatToDateCountdown,
  matchOnTime,
  matchRunningStatusBasketball,
};
