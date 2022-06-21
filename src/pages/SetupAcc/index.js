import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';
import font from '../../../assets/static/fontName';
import images from '../../../assets/static/images';
import {TextInput} from 'react-native-paper';
import CountryCodes from '../../../assets/static/CountryCodes';
import CountryModal from '../../componenvts/CountryModal';

function SetupAcc(props) {
  let [selectedCode, setSelectedCode] = useState('+91');
  let [selectedCountry, setSelectedCountry] = useState('India');
  let [show, setShow] = useState(false);
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
            Welcome back!
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
            We’re so happy you’re here!
          </Text>
          <Text
            style={{
              width: '100%',
              color: '#fff',
              fontSize: 15,
              paddingHorizontal: 35,
              textAlign: 'left',
              fontFamily: font.almaraiLight,
              opacity: 0.6,
            }}>
            Let today be the start of something new.
          </Text>
          <View
            style={{
              width: '100%',
              height: 120,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={style.code}>{selectedCode}</Text>
            <View
              style={{
                width: '50%',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#d4cdba',
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 20,
                  marginBottom: 7,
                }}
                onPress={() => setShow(true)}>
                <Text
                  style={{
                    color: '#000',
                    //   fontStyle: 'italic',
                    fontFamily: font.AnekExtraLight,
                  }}>
                  {selectedCountry}
                </Text>
              </TouchableOpacity>
              <TextInput
                label={'phone number'}
                style={style.input}
                placeholder="88-0898-7999"
                keyboardType="numeric"
                mode="flat"
                outlineColor="#000"
                activeOutlineColor="#000"
                autoFocus={true}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: 80,
              height: 50,
              backgroundColor: '#d4cdba',
              borderRadius: 4,
              alignSelf: 'flex-end',
              marginRight: 60,
              //   opacity: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontFamily: font.AnekSemiBold}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CountryModal show={show} setShow={setShow} />
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
    // backgroundColor: '#2c2667',
    // color: '#c3c1d6',
    // borderRadius: 7,
    paddingLeft: 7,
    fontSize: 19,
    marginBottom: 20,
  },
  code: {
    fontSize: 70,
    fontFamily: font.AnekMedium,
    color: '#fff',
    marginRight: 8,
    marginLeft: 25,
    alignSelf: 'flex-end',
  },
});
export default SetupAcc;
