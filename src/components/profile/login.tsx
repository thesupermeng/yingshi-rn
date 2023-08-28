import {InputItem, Button} from '@ant-design/react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
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
        goToRegister={props.goToRegister}
      />
    </View>
  );
};

const LoginCard = props => {
  const {colors, textVariants, icons, spacing} = useTheme();
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Text style={styles.title}>登陆解锁更多精彩内容</Text>
      {/* <Text style={{textAlign: 'center', width: '100%', paddingTop: 7}}>
        It takes less than a minute to sign up
      </Text> */}
      {/* <Text style={styles.description}>Please enter your email address</Text> */}
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
          placeholder="输入邮箱账号"
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
              source={require('../../../static/images/profile/cross.png')}
            />
          </TouchableWithoutFeedback>
        )}
      </View>
      <Button
        type="primary"
        // disabled={props.email === '' || !props.emailValid}
        style={[
          styles.continueButtonStyle,
          props.email === '' || !props.emailValid
            ? styles.btnInactive
            : styles.btnActive,
        ]}
        activeStyle={[
          styles.continueButtonStyle,
          props.email === '' || !props.emailValid
            ? styles.btnInactive
            : styles.btnActive,
        ]}
        //disabled={!props.emailValid}
        onPress={() => {
          if (props.email === '' || !props.emailValid) {
            console.log('invalid email');
            props.dismiss();
            navigation.navigate('OTP', {
              email: 'demo.com',
              action: 'login',
            });
            return;
          }
          console.log('props.email');
          console.log(props.email == '');
          console.log('loginApiCall');
          props.dismiss();
          navigation.navigate('OTP', {
            email: props.email,
          });
          // loginApiCall({email: props.email});

          // props.navigator.navigate('CricketOTP', {email: props.email});
          // props.navigator.navigate('CricketEdit', {userName:'test nickname'})
        }}>
        <Text
          style={{
            //  fontFamily: 'SF Pro Display',
            fontWeight: '600',
            fontSize: 15,
            letterSpacing: 0.2,
            color: props.email === '' || !props.emailValid ? 'white' : '#000',
          }}>
          登陆
        </Text>
      </Button>
      <TouchableOpacity
        onPress={() => {
          // props.dismiss();
          console.log('   props.goToRegister();');
          props.goToRegister();
          // props.navigator.navigate('CricketTerm');
        }}>
        <View style={styles.loginTermPrivacy}>
          <Text style={styles.termPrivacyFont}>
            <Text style={{color: 'white'}}> 注册 </Text>
          </Text>
          <Image
            style={{width: 18, height: 18}}
            source={require('../../../static/images/profile/rightArrow.png')}
          />
        </View>
      </TouchableOpacity>
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
    // backgroundColor: '#1d2023',
    // fontFamily: 'SF Pro Display',
  },
  defaultTextInputStyle: {backgroundColor: '#1d2023'},
  correctTextInputStyle: {backgroundColor: '#1d2023', color: '#fff'},
  invalidTextInputStyle: {
    backgroundColor: '#311818',
    borderWidth: 1,
    borderColor: '#FF1010',
    color: '#FF1010',
  },
  iconStyle: {height: 18, width: 18, position: 'absolute', right: 10, top: 20},
  continueButtonStyle: {
    width: '100%',
    height: 42,
    marginTop: 30,
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
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    paddingBottom: 25,
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
    marginTop: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnActive: {
    backgroundColor: '#FAC33D',
    color: '#000',
  },
  btnInactive: {
    backgroundColor: '#1d2023',
  },
});
