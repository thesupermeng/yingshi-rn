import {InputItem, Button} from '@ant-design/react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

export const Login = props => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);

  useEffect(() => {
    ValidateEmail(email, setEmailValid);
  }, [email]);

  const navigator = useNavigation();
  return (
    <View style={{height: '100%'}}>
      <LoginCard
        emailValid={emailValid}
        setEmail={setEmail}
        email={email}
        navigator={navigator}
        dismiss={props.dismiss}
      />
    </View>
  );
};

const LoginCard = props => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Join or Sign in</Text>
      <Text style={{textAlign: 'center', width: '100%', paddingTop: 7}}>
        It takes less than a minute to sign up
      </Text>
      <Text style={styles.description}>Please enter your email address</Text>
      <View>
        <InputItem
          style={[
            styles.textInpoutCommonStyle,
            props.email === ''
              ? styles.defaultTextInputStyle
              : props.emailValid
              ? styles.correctTextInputStyle
              : styles.invalidTextInputStyle,
          ]}
          value={props.email}
          onChange={value => {
            onEmailInputChange(value, props.setEmail);
          }}
          placeholder="Email Address"
          placeholderTextColor="#B6B6B6"
        />
        {props.email !== '' && props.emailValid && (
          <Image
            style={styles.iconStyle}
            source={require('../../../static/images/profile/cricket_tick.png')}
          />
        )}
        {props.email !== '' && !props.emailValid && (
          <TouchableWithoutFeedback onPress={props.click}>
            <Image
              style={styles.iconStyle}
              source={require('../../../static/images/profile/cricket_tick.png')}
            />
          </TouchableWithoutFeedback>
        )}
      </View>
      <Button
        type="primary"
        disabled={props.email === '' || !props.emailValid}
        style={[styles.continueButtonStyle, {backgroundColor: '#EB5339'}]}
        activeStyle={{backgroundColor: '#EB5339'}}
        //disabled={!props.emailValid}
        onPress={() => {
          console.log('loginApiCall');
          // loginApiCall({email: props.email});
          // props.dismiss();
          // props.navigator.navigate('CricketOTP', {email: props.email});
          // props.navigator.navigate('CricketEdit', {userName:'test nickname'})
        }}>
        <Text
          style={{
            fontFamily: 'SF Pro Display',
            fontWeight: '400',
            color: 'white',
            fontSize: 15,
            letterSpacing: 0.2,
          }}>
          Continue
        </Text>
      </Button>
      <View style={styles.loginTermPrivacy}>
        <Text style={styles.termPrivacyFont}>
          By logging in, you agree to CricKong's
          <TouchableWithoutFeedback
            onPress={() => {
              props.dismiss();
              props.navigator.navigate('CricketTerm');
            }}>
            <Text style={{color: 'yellow'}}> Terms & Conditions </Text>
          </TouchableWithoutFeedback>
          and
          <TouchableWithoutFeedback
            onPress={() => {
              props.dismiss();
              props.navigator.navigate('CricketPrivacy');
            }}>
            <Text style={{color: 'yellow'}}> Privacy Policy</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
    </View>
  );
};

const onEmailInputChange = (value, setEmail) => {
  setEmail(value);
};

function ValidateEmail(mail, setEmailValid) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail)) {
    setEmailValid(true);
  } else {
    setEmailValid(false);
  }
}

const styles = StyleSheet.create({
  textInpoutCommonStyle: {
    marginHorizontal: '-5%',
    marginTop: 15,
    paddingLeft: 10,
    height: 42,
    borderRadius: 8,
    fontSize: 14,
    fontFamily: 'SF Pro Display',
  },
  defaultTextInputStyle: {backgroundColor: '#F4F4F4'},
  correctTextInputStyle: {backgroundColor: '#FFF6F1'},
  invalidTextInputStyle: {
    backgroundColor: '#FFEEEE',
    borderWidth: 1,
    borderColor: '#FF3434',
  },
  iconStyle: {height: 18, width: 18, position: 'absolute', right: 10, top: 20},
  continueButtonStyle: {
    width: '100%',
    height: 42,
    marginTop: 15,
    marginLeft: '-0.5%',
    borderWidth: 0,
  },
  card: {
    height: '85%',
    width: '100%',
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'transparent',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  description: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'left',
    marginTop: 20,
  },
  termPrivacyFont: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
  },
  loginTermPrivacy: {
    marginTop: 16,
    width: '100%',
  },
});
