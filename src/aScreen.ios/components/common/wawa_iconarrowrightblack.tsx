import { Image, ImageURISource, LogBox } from "react-native";
import { Platform } from "react-native";
import { ImageProps, ViewProps } from "react-native"
import FastImage, { FastImageProps } from "react-native-fast-image";

type wawaTooltipsAirbnbstarselected = ImageProps & {source: ImageURISource}

type wawaBasketballtrophy = FastImageProps & {useFastImage?: boolean}

LogBox.ignoreLogs([`ReactImageView: Image source "null" doesn't exist`])

const customFastImage = ({useFastImage = false, ...imageProp}: wawaBasketballtrophy) => {
  if (useFastImage === true || Platform.OS === "android"){
    return <FastImage {...imageProp as FastImageProps}/>
  } else {
    if (typeof imageProp.source == 'number'){ // if source={require(...)}
      return <Image {...imageProp as wawaTooltipsAirbnbstarselected}/>
    } else { // if source={{uri:...}}
      return <Image {...imageProp as wawaTooltipsAirbnbstarselected} source={{...(imageProp.source as ImageURISource), uri: !!(imageProp as wawaTooltipsAirbnbstarselected).source.uri ? (imageProp as wawaTooltipsAirbnbstarselected).source.uri : undefined}}/>
    }
  }
}

export default customFastImage;