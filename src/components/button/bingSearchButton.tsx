import {Linking, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '@rneui/themed';

interface Props {
  vodTitle: string;
}

const handleBingSearch = (movieTitle: string) => {
  const searchURL = `https://www.bing.com/search?q=${movieTitle}`;
  Linking.openURL(searchURL);
};

export default function BingSearchButton({vodTitle}: Props) {
  return (
    <Button
      ViewComponent={LinearGradient}
      title="搜索片源"
      titleStyle={styles.title}
      buttonStyle={styles.button}
      onPress={() => {
        handleBingSearch(vodTitle);
      }}
      linearGradientProps={{
        colors: ['#54CCFB', '#1D52DF'],
        angle: 180,
        locations: [-1.6, 1],
      }}
    />
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
  }
});
