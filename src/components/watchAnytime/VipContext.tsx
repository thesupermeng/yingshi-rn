import { ReactNode, createContext, useCallback, useContext, useState } from "react";

interface Props {
  showModal: boolean
  adultMode: boolean
  toggleAdultMode: (mode:boolean) => void
}

const VipContext = createContext<Props>({
  showModal: false,
  adultMode: false,
  toggleAdultMode: () => {}
});

export const VipContextProvider  = ({children} : {children: ReactNode}) => {
  const showModal = false

  const [timeElapsed, setTimeElapsed] = useState(0);
  const [adultMode, setAdultMode] = useState(false);
  const toggleAdultMode = useCallback((mode:boolean) => {
    setAdultMode(mode)
  }, [])

  useState()

  return (
    <VipContext.Provider value={{showModal, adultMode, toggleAdultMode}}>
      {children}
    </VipContext.Provider>
  )
}

export const useVip = () => {
  const vip = useContext(VipContext)
  return vip
}