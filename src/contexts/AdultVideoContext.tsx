import { ReactNode, createContext, useCallback, useContext, useEffect, useReducer, useRef, useState } from "react";
import { ADULT_MODE_PREVIEW_DURATION } from "../utility/constants";

interface Props {
  showVipModal: boolean
  toggleShowVipModal: (show: boolean) => void
  showDisclaimer: boolean
  toggleShowDisclaimer: (show: boolean) => void
  adultMode: boolean
  toggleAdultMode: (mode:boolean) => void
  countdownTimer: number
}

const AdultVideoContext = createContext<Props>({
  showVipModal: false,
  toggleShowVipModal: () => {},
  showDisclaimer: false, 
  toggleShowDisclaimer: () => {},
  adultMode: false,
  toggleAdultMode: () => {}, 
  countdownTimer: 0
});

export const AdultVideoContextProvider  = ({children} : {children: ReactNode}) => {
  const [showVipModal, setShowVipModal] = useState(false)
  const [countdownTimer, setCountdownTimer] = useState(ADULT_MODE_PREVIEW_DURATION);
  const [adultMode, setAdultMode] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const interval = useRef<any>()
  const toggleAdultMode = useCallback((mode:boolean) => {
    setAdultMode(mode)
  }, [])
  const toggleShowVipModal = useCallback((show: boolean) => {
    setShowVipModal(show)
  }, [])
  const toggleShowDisclaimer = useCallback((show:boolean) =>{
    setShowDisclaimer(show)
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
    <AdultVideoContext.Provider value={{showVipModal, toggleShowVipModal, adultMode, toggleAdultMode, countdownTimer, showDisclaimer, toggleShowDisclaimer}}>
      {children}
    </AdultVideoContext.Provider>
  )
}

export const useAdultVideoContext = () => {
  const vip = useContext(AdultVideoContext)
  return vip
}
