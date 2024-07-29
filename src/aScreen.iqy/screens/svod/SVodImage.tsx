import { useRef, useState } from "react";
import { Image, ImageURISource, LogBox, StyleSheet, View } from "react-native";
import { Platform } from "react-native";
import { ImageProps, ViewProps } from "react-native"
import FastImage, { FastImageProps, Source } from "react-native-fast-image";
import LoadingImage from '../../assets/images/loading_img.svg';
import { useTheme } from "@react-navigation/native";


type MyImageProp = ImageProps & {source: ImageURISource}

type SVodImageProp = FastImageProps & {useFastImage?: boolean, alternativeImg?: string[]}

LogBox.ignoreLogs([`ReactImageView: Image source "null" doesn't exist`])

const SVodImage = ({useFastImage = false, alternativeImg, ...imageProp}: SVodImageProp) => {
  const [imgUrl, setImgUrl] = useState(typeof imageProp.source == 'number' ? undefined :  imageProp.source?.uri)
  const initialList = useRef(alternativeImg?.filter(x => x !== ''))
  const [error, setError] = useState(false)
  const [current, setCurrent] = useState(0)
  const { colors } = useTheme();


  const useNextImage = () => {
    initialList.current = initialList.current?.filter(x => x !== imgUrl)
    if (!initialList.current || initialList.current.length == 0) {
      setError(true)
      return (imageProp.source as Source)?.uri
    }
    setCurrent(x => {
      if (alternativeImg && x < alternativeImg?.length){
        return x + 1
      }
      return x
    })
    console.debug('using', initialList.current.at(0))
    return initialList.current.at(0)
  }

  const handleOnError = () => {
    setImgUrl(useNextImage())
  }

  if (error) { // when all url error, use the default placeholder image
    return (
      <View style={[{ backgroundColor: colors.loading, ...styles.loadingCard}, imageProp.style]}>
          <LoadingImage  width={20}  height={20}/>
      </View>
    )
  }

  if (useFastImage === true || Platform.OS === "android"){
    if (typeof imageProp.source == 'number'){ // if source={require(...)}
    return <FastImage {...imageProp as FastImageProps}/>
    } else {
      return <FastImage key={current.toString() + imgUrl} {...imageProp as FastImageProps} source={{uri: imgUrl}} onError={handleOnError}/>
    }
  } else {
    if (typeof imageProp.source == 'number'){ // if source={require(...)}
      return <Image {...imageProp as MyImageProp}/>
    } else { // if source={{uri:...}}
      return <Image key={current.toString() + imgUrl} {...imageProp as MyImageProp} source={{...(imageProp.source as ImageURISource), uri: imgUrl}} onError={handleOnError}/>
    }
  }
}

const styles = StyleSheet.create({
  loadingCard: {
    marginRight: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
},
})

export default SVodImage;