import { ReactNode, createContext, useCallback, useContext, useEffect, useReducer, useRef, useState } from "react";
import { ADULT_MODE_PREVIEW_DURATION } from "../../utility/constants";

interface Props {
  showVipModal: boolean
  toggleShowVipModal: (show: boolean) => void
  adultMode: boolean
  toggleAdultMode: (mode:boolean) => void
  countdownTimer: number
}

const WatchAnytimeContext = createContext<Props>({
  showVipModal: false,
  toggleShowVipModal: () => {},
  adultMode: false,
  toggleAdultMode: () => {}, 
countdownTimer: 0
});

export const WatchAnytimeContextProvider  = ({children} : {children: ReactNode}) => {
  const [showVipModal, setShowVipModal] = useState(false)
  const [countdownTimer, setCountdownTimer] = useState(ADULT_MODE_PREVIEW_DURATION);
  const [adultMode, setAdultMode] = useState(false);
  const interval = useRef<any>()
  const toggleAdultMode = useCallback((mode:boolean) => {
    setAdultMode(mode)
  }, [])
  const toggleShowVipModal = useCallback((show: boolean) => {
    setShowVipModal(show)
  }, [])

  useEffect(() => {
    if (!!interval.current) clearInterval(interval.current)
    if (adultMode){
      interval.current = setInterval(() => {
        setCountdownTimer(val => val - 1)
      }, 1000)
    }
  }, [adultMode])

  useEffect(() => {
    if (countdownTimer < 0){
      toggleShowVipModal(true)
    }
  }, [countdownTimer])

  return (
    <WatchAnytimeContext.Provider value={{showVipModal, toggleShowVipModal, adultMode, toggleAdultMode, countdownTimer}}>
      {children}
    </WatchAnytimeContext.Provider>
  )
}

export const useVip = () => {
  const vip = useContext(WatchAnytimeContext)
  return vip
}