import { useRef, useState } from "react";
import { Image, ImageURISource, LogBox } from "react-native";
import { Platform } from "react-native";
import { ImageProps, ViewProps } from "react-native"
import FastImage, { FastImageProps } from "react-native-fast-image";

type MyImageProp = ImageProps & {source: ImageURISource}

type Prop = FastImageProps & {useFastImage?: boolean, alternativeImg?: string[]}

LogBox.ignoreLogs([`ReactImageView: Image source "null" doesn't exist`])

const customFastImage = ({useFastImage = false, alternativeImg, ...imageProp}: Prop) => {
  const [imgUrl, setImgUrl] = useState(typeof imageProp.source == 'number' ? undefined :  imageProp.source?.uri)
  const initialList = useRef(alternativeImg?.filter(x => x !== ''))


  const useNextImage = () => {
    initialList.current = initialList.current?.filter(x => x !== imgUrl)
    if (!initialList.current || initialList.current.length == 0) return imageProp.source?.uri
    // console.debug('using', initialList.current.at(0))
    return initialList.current.at(0)
  }

  const handleOnError = () => {
    setImgUrl(useNextImage())
  }

  if (useFastImage === true || Platform.OS === "android"){
    if (typeof imageProp.source == 'number'){ // if source={require(...)}
    return <FastImage {...imageProp as FastImageProps}/>
    } else {
      return <FastImage key={imgUrl} {...imageProp as FastImageProps} source={{uri: imgUrl}} onError={handleOnError}/>
    }
  } else {
    if (typeof imageProp.source == 'number'){ // if source={require(...)}
      return <Image {...imageProp as MyImageProp}/>
    } else { // if source={{uri:...}}
      return <Image key={imgUrl} {...imageProp as MyImageProp} source={{...(imageProp.source as ImageURISource), uri: imgUrl}} onError={handleOnError}/>
    }
  }
}

export default customFastImage;