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
import {registerUser} from '../../features/user';
import {useAppDispatch} from '../../hooks/hooks';
import {hideBottomSheetAction} from '../../redux/actions/screenAction';

export const Register = (props: any) => {
  const [emailValid, setEmailValid] = useState(true);
  const [referralCodeValid, setReferralCodeValid] = useState(true);
  const [errEmail, setErrEmail] = useState('');
  const [errReferral, setErrReferral] = useState('');

  useEffect(() => {
    ValidateEmail(props.email, setEmailValid);
  }, [props.email]);

  const navigator = useNavigation();
  return (
    <View style={{height: '100%'}}>
      <LoginCard
        email={props.email}
        referralCode={props.referralCode}
        setEmail={props.setEmail}
        setReferralCode={props.setReferralCode}
        emailValid={emailValid}
        referralCodeValid={referralCodeValid}
        setEmailValid={setEmailValid}
        setReferralCodeValid={setReferralCodeValid}
        setErrEmail={setErrEmail}
        errEmail={errEmail}
        setErrReferral={setErrReferral}
        errReferral={errReferral}
        navigator={navigator}
        dismiss={props.dismiss}
        goToLogin={props.goToLogin}
      />
    </View>
  );
};

const LoginCard = (props: any) => {
  const {colors, textVariants, icons, spacing} = useTheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  return (
    <View style={styles.card}>
      <Text style={styles.title}>欢迎注册</Text>
      {/* <Text style={{textAlign: 'center', width: '100%', paddingTop: 7}}>
        It takes less than a minute to sign up
      </Text> */}
      <View style={{marginBottom: 20}}>
        <InputItem
          autoCapitalize="none"
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
            onEmailInputChange(value, props.setEmail, props.setErrEmail);
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
          <TouchableWithoutFeedback
            onPress={() => {
              props.setEmail('');
              props.setErrEmail('');
              props.setEmailValid(true);
            }}>
            <Image
              style={styles.iconStyle}
              source={require('../../../static/images/profile/cross.png')}
            />
          </TouchableWithoutFeedback>
        )}
        {props.errEmail != '' && (
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 12,
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
                marginRight: 5,
                position: 'relative',
                top: 1,
              }}
              source={require('../../../static/images/invite/danger.png')}
            />

            <Text style={styles.danger}>{props.errEmail} </Text>
          </View>
        )}

        <InputItem
          autoCapitalize="none"
          style={[
            styles.textInpoutCommonStyle,
            props.email === ''
              ? styles.defaultTextInputStyle
              : props.referralCodeValid
              ? styles.correctTextInputStyle
              : styles.invalidTextInputStyle,
            ,
            {marginTop: 30},
          ]}
          value={props.referralCode}
          onChange={value => {
            onReferralInputChange(
              value,
              props.setReferralCode,
              props.setErrReferral,
              props.setReferralCodeValid,
            );
          }}
          placeholder="邀请码 (选填)"
          placeholderTextColor="#B6B6B6"
        />
      </View>
      {!props.setReferralCodeValid && (
        <TouchableWithoutFeedback
          onPress={() => {
            props.setReferralCode('');
            props.setErrReferral('');
            props.setReferralCodeValid(true);
          }}>
          <Image
            style={styles.iconStyle}
            source={require('../../../static/images/profile/cross.png')}
          />
        </TouchableWithoutFeedback>
      )}
      {props.errReferral != '' && (
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{
              height: 20,
              width: 20,
              marginRight: 5,
              position: 'relative',
              top: 1,
            }}
            source={require('../../../static/images/invite/danger.png')}
          />

          <Text style={styles.danger}>{props.errReferral} </Text>
        </View>
      )}
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
        onPress={async () => {
          // if (props.email === '' || !props.emailValid) {
          //   console.log('invalid email');
          //   props.setEmailValid(false);
          //   props.setErrMsg('请填写邮箱账号');

          //   return;
          // }

          try {
            await registerUser({
              email: props.email,
              referral_code: props.referralCode,
              otp: '',
            });
          } catch (err: any) {
            console.log('err');
            console.log(err.response.data.message);
            // props.setErrMsg(err.response.data.message);
            // props.setReferralCodeValid(false);

            if (err.response.data.errors.referral_code) {
              // setReferralValid(false);
              // setErrReferral(err.response.data.errors.referral_code);

              props.setErrReferral(err.response.data.errors.referral_code);
              props.setReferralCodeValid(false);
            }

            if (err.response.data.errors.email) {
              props.setErrEmail(err.response.data.errors.email);
              props.setEmailValid(false);
              // setUsernameValid(false);
              // setErrUsername(err.response.data.errors.username);
            }

            return;
          }

          dispatch(hideBottomSheetAction());

          navigation.navigate('OTP', {
            email: props.email,
            action: 'register',
            referralCode: props.referralCode,
          });
          // loginApiCall({email: props.email});

          // props.navigator.navigate('CricketOTP', {email: props.email});
          // props.navigator.navigate('CricketEdit', {userName:'test nickname'})
        }}>
        <Text
          style={{
            //  fontFamily: 'SF Pro Display',
            fontWeight: '600',
            fontSize: 14,
            letterSpacing: 0.2,
            color: props.email === '' || !props.emailValid ? 'white' : '#000',
          }}>
          注册
        </Text>
      </Button>
      <View />

      <TouchableOpacity
        onPress={() => {
          console.log('   props.goToRegister();');

          props.setErrReferral('');
          props.setErrEmail('');

          props.goToLogin();
          // props.navigator.navigate('CricketTerm');
        }}>
        <View style={styles.loginTermPrivacy}>
          <Text style={styles.termPrivacyFont}>
            <Text style={{color: 'white'}}> 邮箱登录 </Text>
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

const onEmailInputChange = (value: any, setEmail: any, setErrEmail: any) => {
  setErrEmail('');
  setEmail(value);
};

const onReferralInputChange = (
  value: any,
  setReferralCode: any,
  setErrReferral: any,
  setReferralCodeValid: any,
) => {
  setErrReferral('');
  setReferralCodeValid(true);
  setReferralCode(value);
};

function ValidateEmail(mail: any, setEmailValid: any) {
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
    color: '#fff',
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
    marginTop: 20,
    marginLeft: '-0.5%',
    borderWidth: 0,
  },
  card: {
    height: '100%',
    width: '100%',
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

  termPrivacyFont: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
  },
  loginTermPrivacy: {
    marginTop: 30,
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
  danger: {
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'left',
    color: '#FF3434',
  },
});
