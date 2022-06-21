import React, {useState} from 'react';
import {Keyboard, View, Modal, TouchableOpacity, StatusBar} from 'react-native';

function CountryModal(props) {
  return (
    <Modal animationType="fade" visible={props.show} transparent={true}>
      <StatusBar
        animated={true}
        backgroundColor="rgba(0,0,0,.3)"
        barStyle={'dark-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,.3)',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => props.setShow(false)}></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => Keyboard.dismiss()}
          style={{
            backgroundColor: '#ffffff',
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
          }}>
          <View style={{alignItems: 'center', marginVertical: 8}}>
            <View
              style={{
                width: 45,
                height: 6,
                borderRadius: 20,
                backgroundColor: '#E9E9E9',
                marginTop: 3,
              }}
            />
          </View>
          <View
            style={{
              height: '70%',
            }}></View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default CountryModal;
