import { Image, ImageURISource, LogBox } from "react-native";
import { ImageProps, ViewProps } from "react-native"
import FastImage, { FastImageProps } from "react-native-fast-image";

type MyImageProp = ImageProps & {source: ImageURISource}

type Prop = FastImageProps & {useFastImage?: boolean}

LogBox.ignoreLogs([`ReactImageView: Image source "null" doesn't exist`])

const customFastImage = ({useFastImage = false, ...imageProp}: Prop) => {
  if (useFastImage === true){
    return <FastImage {...imageProp as FastImageProps}/>
  } else {
    return <Image {...imageProp as MyImageProp} source={{...(imageProp.source as ImageURISource), uri: !!(imageProp as MyImageProp).source.uri ? (imageProp as MyImageProp).source.uri : undefined}}/>
  }
}

export default customFastImage;