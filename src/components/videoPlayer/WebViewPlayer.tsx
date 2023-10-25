import { View } from "@ant-design/react-native"
import { memo } from "react"
import WebView from "react-native-webview"

interface Props{ 
    uri: string
    onLoad: any
}

const WebViewPlayer = ({uri, onLoad}: Props) => {
    return (
        <View
            style={styles.video}
        >
            <WebView
                resizeMode="contain"
                allowsInlineMediaPlayback={true}
                onLoad={onLoad}
                bounces={false}
                mixedContentMode="always"
                mediaPlaybackRequiresUserAction={true}
                setBuiltInZoomControls={false}
                setDisplayZoomControls={false}
                scrollEnabled={false}
                source={{
                    html: `
                    <html>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>

    <style>
        html, body{
            margin: 0; 
            padding: 0; 
            background-color: rgb(0,0,0);
        }
    </style>

    <body>
        <video 
            src="${uri}"
            width="100%"
            height="100%"
            controls
            playsinline
            webkit-playsinline

            ></video>
    </body>
</html>
                    `, 
                    uri
                }}
            />
        </View>
    )
}

const styles = {
    video: {
        width: '100%',
        aspectRatio: 16 / 9,
      },
}

export default memo(WebViewPlayer)