import { View } from "@ant-design/react-native"
import { memo } from "react"
import WebView from "react-native-webview"
import VodCombinedGesture from "../gestures/vod/mayi_save_icontransferclub"

interface mayi_GoogleViews{ 
    uri: string
    onLoad: any
    videoType: string,
}

const WebViewPlayer = ({uri, onLoad, videoType}: mayi_GoogleViews) => {
    return (
        <VodCombinedGesture

            vodType={videoType}
            enabled={true}
            onSkipBackwards={()=>{console.log('go backward')}}
            onSkipForward={()=>{console.log('go forward')}}
            onSingleTap={()=>{}}
            currentTime={0}
            totalDuration={0}
            onSeek={()=>{}}
        >

            <View
                style={styles.video}
            >
                <WebView
                    resizeMode="contain"
                    allowsInlineMediaPlayback={true}
                    onLoad={onLoad}
                    bounces={false}
                    mixedContentMode="always"
                    setBuiltInZoomControls={false}
                    setDisplayZoomControls={false}
                    scrollEnabled={false}
                    originWhitelist={["*"]}
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
                autoplay
                ></video>
        </body>
    </html>
                        `, 
                        uri
                    }}
                />
            </View>
            </VodCombinedGesture>
    )
}

const styles = {
    video: {
        width: '100%',
        aspectRatio: 16 / 9,
      },
}

export default memo(WebViewPlayer)