import { useEffect, useState } from "react";
import { Keyboard, Platform } from "react-native";
import DeviceInfo from "react-native-device-info";

type CBottomSheetHookProps = {
}

export const useCBottomSheetHook = ({
}: CBottomSheetHookProps = {}) => {
    const deviceBrand = DeviceInfo.getBrand();
    const [deviceName, setDeviceName] = useState("");

    DeviceInfo.getDeviceName().then((d) => {
        setDeviceName(d);
    });

    const marginBottom = deviceBrand == "HUAWEI" && /p\d+/i.test(deviceName)
        ? 100
        : 30;

    return {
        marginBottom,
    };
}