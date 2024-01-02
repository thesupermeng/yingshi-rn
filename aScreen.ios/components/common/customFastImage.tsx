import { Image, ImageURISource, LogBox } from "react-native";
import { Platform } from "react-native";
import { ImageProps, ViewProps } from "react-native"
import FastImage, { FastImageProps } from "react-native-fast-image";

type MyImageProp = ImageProps & {source: ImageURISource}

type Prop = FastImageProps & {useFastImage?: boolean}

LogBox.ignoreLogs([`ReactImageView: Image source "null" doesn't exist`])

const customFastImage = ({useFastImage = false, ...imageProp}: Prop) => {
  if (useFastImage === true || Platform.OS === "android"){
    return <FastImage {...imageProp as FastImageProps}/>
  } else {
    if (typeof imageProp.source == 'number'){ // if source={require(...)}
      return <Image {...imageProp as MyImageProp}/>
    } else { // if source={{uri:...}}
      return <Image {...imageProp as MyImageProp} source={{...(imageProp.source as ImageURISource), uri: !!(imageProp as MyImageProp).source.uri ? (imageProp as MyImageProp).source.uri : undefined}}/>
    }
  }
}

export default customFastImage;