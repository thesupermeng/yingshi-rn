import React, { useEffect } from "react";

import Nav from "./nav";

import { useAppDispatch } from "@hooks/hooks";
import { onBootApp, onCloseApp } from "@redux/actions/backgroundAction";

export default () => {
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(onBootApp());

    return () => {
      // Unsubscribe from the network status listener when the component unmounts
      appDispatch(onCloseApp());
    };
  }, []);

  return (<Nav/>);
};
