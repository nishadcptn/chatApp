import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import font from '../../../assets/static/fontName';
import images from '../../../assets/static/images';
import auth from '@react-native-firebase/auth';
import OTPTextView from 'react-native-otp-textinput';

function OtpScreen(props) {
  let [otp, setOtp] = useState();
  let [errorMessage, setErrorMessage] = useState('');
  let otpInput = useRef(null);
  const verifyOTP = async () => {
    try {
      setErrorMessage('');
      let res = await props?.route?.params?.otp?.confirm(otp);
      if (
        res?.user?.phoneNumber &&
        res?.user?.phoneNumber == props?.route?.params?.phone
      ) {
        props.navigation.navigate('SetupProfile');
      } else {
        setErrorMessage('OTP has expired or invalid!');
      }
    } catch (err) {
      console.log(err.message);
      setErrorMessage('OTP has expired or invalid!');
    }
  };
  return (
    <View style={style.container}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <View style={style.topView}>
        <Animated.View style={style.topInner}>
          <Image source={images.banner} style={style.image} />
        </Animated.View>
      </View>
      <View style={style.bottomView}>
        <View style={style.bottomInner}>
          <Text
            style={{
              width: '100%',
              color: '#fff',
              fontSize: 32,
              paddingHorizontal: 35,
              textAlign: 'left',
              fontFamily: font.AnekSemiBold,
              marginTop: 35,
            }}>
            Enter OTP
          </Text>
          <Text
            style={{
              width: '100%',
              color: '#fff',
              fontSize: 15,
              paddingHorizontal: 35,
              textAlign: 'left',
              fontFamily: font.almaraiLight,
              marginTop: 15,
              opacity: 0.6,
            }}>
            A OTP has been sent to your registerd mobile number
          </Text>
          <View style={{padding: 10}}>
            <OTPTextView
              ref={e => (otpInput = e)}
              inputCount={6}
              containerStyle={{}}
              textInputStyle={{width: 40, color: '#fff'}}
              handleTextChange={text => setOtp(text)}
            />
          </View>
          {errorMessage ? (
            <Text
              style={{
                width: '100%',
                color: 'red',
                fontSize: 15,
                paddingHorizontal: 45,
                textAlign: 'left',
                fontFamily: font.AnekMedium,
                marginTop: 8,
                opacity: 0.6,
                textAlign: 'left',
              }}>
              {errorMessage}
            </Text>
          ) : (
            <></>
          )}
          <Text
            style={{
              width: '100%',
              color: '#fff',
              fontSize: 15,
              paddingHorizontal: 35,
              textAlign: 'left',
              fontFamily: font.AnekMedium,
              marginTop: 15,
              opacity: 0.6,
              textAlign: 'left',
            }}>
            Change Phone number
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 45,
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                width: 80,
                height: 50,
                borderRadius: 4,
                justifyContent: 'center',
              }}>
              <Text style={{fontFamily: font.AnekSemiBold, color: '#fff'}}>
                Resend OTP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 80,
                height: 50,
                backgroundColor: '#d4cdba',
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => verifyOTP()}>
              <Text style={{fontFamily: font.AnekSemiBold}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  topView: {
    width: '100%',
    height: '50%',
    backgroundColor: '#161c39',
  },
  bottomView: {
    width: '100%',
    height: '50%',
    backgroundColor: '#fff',
  },
  topInner: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderBottomRightRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomInner: {
    width: '100%',
    height: '100%',
    backgroundColor: '#161c39',
    borderTopLeftRadius: 110,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  input: {
    width: '100%',
    height: 55,
    fontSize: 32,
    marginBottom: 20,
    color: '#fff',
    fontWeight: '700',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  code: {
    fontSize: 68,
    width: '38%',
    fontFamily: font.AnekMedium,
    color: '#fff',
    paddingRight: 8,
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
});
export default OtpScreen;
