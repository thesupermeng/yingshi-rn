import { ReactNode, createContext, useCallback, useContext, useEffect, useReducer, useRef, useState } from "react";
import { ADULT_MODE_PREVIEW_DURATION } from "../../utility/constants";

interface Props {
  showModal: boolean
  adultMode: boolean
  toggleAdultMode: (mode:boolean) => void
  countdownTimer: number
}

const WatchAnytimeContext = createContext<Props>({
  showModal: false,
  adultMode: false,
  toggleAdultMode: () => {}, 
countdownTimer: 0
});

export const WatchAnytimeContextProvider  = ({children} : {children: ReactNode}) => {
  const showModal = false

  const [countdownTimer, setCountdownTimer] = useState(ADULT_MODE_PREVIEW_DURATION);
  const [adultMode, setAdultMode] = useState(false);
  const interval = useRef<any>()
  const toggleAdultMode = useCallback((mode:boolean) => {
    setAdultMode(mode)
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
    console.debug('countdown timer', countdownTimer)
  }, [countdownTimer])

  return (
    <WatchAnytimeContext.Provider value={{showModal, adultMode, toggleAdultMode, countdownTimer}}>
      {children}
    </WatchAnytimeContext.Provider>
  )
}

export const useVip = () => {
  const vip = useContext(WatchAnytimeContext)
  return vip
}