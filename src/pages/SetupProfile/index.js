import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Animated,
} from 'react-native';
import font from '../../../assets/static/fontName';
import images from '../../../assets/static/images';

function Home(props) {
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
          <View
            style={{
              width: 270,
              height: 270,
              backgroundColor: '#fff',
              borderStyle: 'dashed',
              borderRadius: 60,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 5,
              borderBottomRightRadius: 0,
              //   borderBottomLeftRadius: 0,
            }}>
            <View
              style={{
                width: 90,
                height: 40,
                backgroundColor: '#ccc',
                borderRadius: 6,
                position: 'absolute',
                bottom: 10,
                right: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontFamily: font.AnekRegular}}>Upload</Text>
            </View>
          </View>
          <TextInput
            style={style.input}
            placeholder="Name"
            // keyboardType="numeric"
            placeholderTextColor={'#ccc'}
            autoFocus={true}
            selectionColor={'rgba(0,0,0,.3)'}
          />
        </Animated.View>
      </View>
      <View style={style.bottomView}>
        <View style={style.bottomInner}>
          <Text style={style.desc}>
            By clicking the Button I agree to the Terms and condetion of _App.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          width: 75,
          height: 75,
          backgroundColor: '#ccc',
          top: '70%',
          right: 60,
          borderRadius: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontFamily: font.poppinsBold, fontSize: 16}}>Done</Text>
      </TouchableOpacity>
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
    height: '75%',
    backgroundColor: '#161c39',
  },
  bottomView: {
    width: '100%',
    height: '25%',
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
  input: {
    width: 270,
    height: 55,
    fontSize: 20,
    marginTop: 20,
    color: '#161c39',
    borderBottomColor: 'rgba(0,0,0,.3)',
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  bottomInner: {
    width: '100%',
    height: '100%',
    backgroundColor: '#161c39',
    borderTopLeftRadius: 110,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headding: {
    color: '#fff',
    fontFamily: '',
    fontSize: 26,
    paddingHorizontal: 100,
    textAlign: 'center',
    fontFamily: font.AnekRegular,
    marginBottom: 10,
  },
  desc: {
    color: '#fff',
    paddingHorizontal: 50,
    fontSize: 13,
    paddingTop: 25,
    opacity: 0.7,
    textAlign: 'center',
    fontFamily: font.poppinsLight,
    marginBottom: 10,
  },
  setupBTN: {
    backgroundColor: '#F25464',
    marginTop: 70,
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontFamily: font.poppinsRegular,
  },
  image: {
    width: '80%',
    height: '80%',
  },
});
export default Home;
