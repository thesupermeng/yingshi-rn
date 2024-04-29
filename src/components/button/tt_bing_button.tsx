import {Linking, StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '@rneui/themed';

interface ttSmall {
  vodTitle: string;
}

const handleBingSearch = (movieTitle: string) => {
  const searchURL = `https://www.bing.com/search?q=${movieTitle}`;
  Linking.openURL(searchURL);
};

export default function BingSearchButton({vodTitle}: ttSmall) {
  return (
    <TouchableOpacity onPress={() => handleBingSearch(vodTitle)}>
      <LinearGradient
        colors={['#54CCFB', '#1D52DF']}
        angle={180}
        style={styles.button}
      >
        <Text style={styles.title}>搜索片源</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  title: {
    fontSize: 12,
    color: 'white',
  }
});
