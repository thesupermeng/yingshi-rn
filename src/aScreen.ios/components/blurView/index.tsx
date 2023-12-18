import { BlurViewProps, BlurView as RNCBlurView } from "@react-native-community/blur";
import { useIsFocused } from "@react-navigation/native";
import { View } from "react-native";

export const BlurView = (props: BlurViewProps & React.RefAttributes<View>) => {
    const isFocus = useIsFocused();

    console.log(isFocus);

    return (<>
        {isFocus &&
            <RNCBlurView {...props} />
        }
    </>);
}