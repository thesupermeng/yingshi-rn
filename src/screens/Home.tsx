import { StyleSheet, Text, View, TouchableOpacity, List } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/countAction';


export default  ({ navigation }) => {
  const dispatch = useDispatch();
  return (
      <View style={{ flex: 1 }}>
     
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
  },
});