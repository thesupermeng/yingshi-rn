import { Image, ImageURISource, LogBox } from "react-native";
import { Platform } from "react-native";
import { ImageProps, ViewProps } from "react-native"
import FastImage, { FastImageProps } from "react-native-fast-image";

type mayi_ResendVertical = ImageProps & {source: ImageURISource}

type mayi_Viewer = FastImageProps & {useFastImage?: boolean}

LogBox.ignoreLogs([`ReactImageView: Image source "null" doesn't exist`])

const customFastImage = ({useFastImage = false, ...imageProp}: mayi_Viewer) => {
  if (useFastImage === true || Platform.OS === "android"){
    return <FastImage {...imageProp as FastImageProps}/>
  } else {
    if (typeof imageProp.source == 'number'){ // if source={require(...)}
      return <Image {...imageProp as mayi_ResendVertical}/>
    } else { // if source={{uri:...}}
      return <Image {...imageProp as mayi_ResendVertical} source={{...(imageProp.source as ImageURISource), uri: !!(imageProp as mayi_ResendVertical).source.uri ? (imageProp as mayi_ResendVertical).source.uri : undefined}}/>
    }
  }
}

export default customFastImage;