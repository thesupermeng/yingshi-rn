import { useRef, useState } from "react";
import { Image, ImageURISource, LogBox } from "react-native";
import { Platform } from "react-native";
import { ImageProps, ViewProps } from "react-native"
import FastImage, { FastImageProps } from "react-native-fast-image";

type MyImageProp = ImageProps & {source: ImageURISource}

type Prop = FastImageProps & {useFastImage?: boolean, alternativeImg?: string[]}

LogBox.ignoreLogs([`ReactImageView: Image source "null" doesn't exist`])

const customFastImage = ({useFastImage = false, alternativeImg, ...imageProp}: Prop) => {
  const currentImg = useRef(0); 
  const [imgUrl, setImgUrl] = useState(typeof imageProp.source == 'number' ? undefined :  imageProp.source?.uri)

  const useNextImage = () => {
    if (!alternativeImg || alternativeImg.length <= 0) return undefined
    currentImg.current += 1; 
    if (currentImg.current >= alternativeImg.length) return undefined
    return alternativeImg[currentImg.current]
  }

  const handleOnError = () => {
    setImgUrl(useNextImage())
  }

  if (useFastImage === true || Platform.OS === "android"){
    if (typeof imageProp.source == 'number'){ // if source={require(...)}
    return <FastImage {...imageProp as FastImageProps}/>
    } else {
      return <FastImage {...imageProp as FastImageProps} source={{uri: imgUrl}} onError={handleOnError}/>
    }
  } else {
    if (typeof imageProp.source == 'number'){ // if source={require(...)}
      return <Image {...imageProp as MyImageProp}/>
    } else { // if source={{uri:...}}
      return <Image {...imageProp as MyImageProp} source={{...(imageProp.source as ImageURISource), uri: imgUrl}} onError={handleOnError}/>
    }
  }
}

export default customFastImage;