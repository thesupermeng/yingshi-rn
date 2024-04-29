import { Image, ImageURISource, LogBox } from "react-native";
import { Platform } from "react-native";
import { ImageProps, ViewProps } from "react-native"
import FastImage, { FastImageProps } from "react-native-fast-image";

type ttHistory = ImageProps & {source: ImageURISource}

type ttUsernameSubs = FastImageProps & {useFastImage?: boolean}

LogBox.ignoreLogs([`ReactImageView: Image source "null" doesn't exist`])

const customFastImage = ({useFastImage = false, ...imageProp}: ttUsernameSubs) => {
  if (useFastImage === true || Platform.OS === "android"){
    return <FastImage {...imageProp as FastImageProps}/>
  } else {
    if (typeof imageProp.source == 'number'){ // if source={require(...)}
      return <Image {...imageProp as ttHistory}/>
    } else { // if source={{uri:...}}
      return <Image {...imageProp as ttHistory} source={{...(imageProp.source as ImageURISource), uri: !!(imageProp as ttHistory).source.uri ? (imageProp as ttHistory).source.uri : undefined}}/>
    }
  }
}

export default customFastImage;