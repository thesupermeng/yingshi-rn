import { Dimensions, Image, StyleSheet, View } from "react-native";

type wwIndexDice = {
    url: string;
};

export default ({
    url,
}: wwIndexDice) => {
    const width = Dimensions.get('window').width;

    return <View style={{
        ...styles.thumbnailContainer,
        width: width * 0.24,
        height: (width * 0.24 / 1.78) + 30, 
        left: -width * 0.12 + 7.5, 
      }}>
        <View style={styles.thumbnail}>
          <Image 
            style={{width: '100%', height: '100%'}}
            source={{ uri: url }}
            resizeMode='contain'
          />
        </View>
      </View>;
}


const styles = StyleSheet.create({
    thumbnailContainer: {
      position: 'absolute',
      bottom: 20,
      justifyContent: 'space-between',
    },
    thumbnail: {
      backgroundColor: 'black', 
      borderColor: '#2F2F2F',
      borderRadius: 10,
      borderWidth: 2,
      width: '100%', 
      aspectRatio: 1.78, 
    }
  });
  