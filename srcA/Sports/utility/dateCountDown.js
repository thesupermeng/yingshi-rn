import {useEffect, useState} from 'react';

const useCountdown = targetDate => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = countDown => {
  var hours;
  var minutes;
  var seconds;
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));

  var h = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours = h < 10 ? '0' + h : String(h);
  var m = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  minutes = m < 10 ? '0' + m : String(m);
  var s = Math.floor((countDown % (1000 * 60)) / 1000);
  seconds = s < 10 ? '0' + s : String(s);

  //   const days = Math.floor(countDown / 1000 / 60 / 60 / 24);
  //   // 时
  //   var h = Math.floor((countDown / 1000 / 60 / 60) % 24);
  //   const hours = h < 10 ? '0' + h : String(h);
  //   // 分
  //   var m = Math.floor((countDown / 1000 / 60) % 60);
  //   const minutes = m < 10 ? '0' + m : String(m);
  //   // 秒
  //   var s = Math.floor((countDown / 1000) % 60);
  //   const seconds = s < 10 ? '0' + s : String(s);
  if (countDown > 0 && h < 2 && days < 1) {
    return [days, hours, minutes, seconds, true];
  } else {
    return [0, 0, 0, 0, false];
  }
};

export {useCountdown};
