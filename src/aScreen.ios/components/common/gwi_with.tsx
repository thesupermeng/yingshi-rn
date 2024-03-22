import { Image, ImageURISource, LogBox } from "react-native";
import { Platform } from "react-native";
import { ImageProps, ViewProps } from "react-native"
import FastImage, { FastImageProps } from "react-native-fast-image";

type VJZRenew = ImageProps & {source: ImageURISource}

type HENewsShrink = FastImageProps & {useFastImage?: boolean}

LogBox.ignoreLogs([`ReactImageView: Image source "null" doesn't exist`])

const customFastImage = ({useFastImage = false, ...imageProp}: HENewsShrink) => {
  if (useFastImage === true || Platform.OS === "android"){
    return <FastImage {...imageProp as FastImageProps}/>
  } else {
    if (typeof imageProp.source == 'number'){ // if source={require(...)}
      return <Image {...imageProp as VJZRenew}/>
    } else { // if source={{uri:...}}
      return <Image {...imageProp as VJZRenew} source={{...(imageProp.source as ImageURISource), uri: !!(imageProp as VJZRenew).source.uri ? (imageProp as VJZRenew).source.uri : undefined}}/>
    }
  }
}

export default customFastImage;