import { RootStackScreenProps } from "@type/navigationTypes";
import RNWebView from "react-native-webview";
import { TouchableWithoutFeedback, View } from "react-native";
import CloseIcon from '@static/images/close_icon.svg';

export const Webview = ({ navigation, route }: RootStackScreenProps<'Webview'>) => {
    const url = route.params.url;

    return <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={navigation.goBack} >
            <View style={{ padding: 14, backgroundColor: 'white' }}>
                <CloseIcon color="grey" />
            </View>
        </TouchableWithoutFeedback>

        <RNWebView source={{ uri: url }} />
    </View>;
}