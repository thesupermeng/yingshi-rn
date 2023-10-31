import { Image } from "react-native";
import { ImageProps, ViewProps } from "react-native"
import FastImage, { FastImageProps } from "react-native-fast-image";

type Prop = (ImageProps | FastImageProps) & {useFastImage?: boolean}

const customFastImage = ({useFastImage = false, ...imageProp}: Prop) => {
  if (useFastImage === true){
    return <FastImage {...imageProp as FastImageProps}/>
  } else {
    return <Image {...imageProp as ImageProps}/>
  }
}

export default customFastImage;