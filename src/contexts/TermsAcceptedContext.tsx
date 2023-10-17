import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const TermsAcceptContext = createContext<any>({
  accepted: false,
  setAccepted: () => {},
});

interface Props {
  children: ReactNode;
  // loadInterstitialParam: any;
}

export const TermsAcceptContextProvider = ({
  children,
}: // loadInterstitialParam,
Props) => {
  const [accepted, setAccepted] = useState(false);
  const value = { accepted, setAccepted };

  useEffect(() => {
    const checkAcceptedTerms = async () => {
      const termsAccepted = await AsyncStorage.getItem("termsAccepted");
      setAccepted(termsAccepted !== null);
    };
    checkAcceptedTerms();
  }, []);

  useEffect(() => {
    const acceptTerms = async () => {
      await AsyncStorage.setItem("termsAccepted", "true");
    };

    if (accepted) {
      acceptTerms();
      //loadInterstitialParam();
    }
  }, [accepted]);

  return (
    <TermsAcceptContext.Provider value={value}>
      {children}
    </TermsAcceptContext.Provider>
  );
};
