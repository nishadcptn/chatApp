import React from 'react';
import { StyleSheet, View, Text, Button, StatusBar, TouchableOpacity, Image, Animated } from 'react-native';
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
                hidden={false} />
            <View style={style.topView}>

                <Animated.View style={style.topInner}>
                    <Image source={images.banner} style={style.image} />
                </Animated.View>
            </View>
            <View style={style.bottomView}>
                <View style={style.bottomInner}>
                    <Text style={style.headding}>
                        Lets Connect
                        with each other
                    </Text>
                    <Text style={style.desc}>
                        With UsApp, you'll get fast, simple, secure messaging and calling for free
                    </Text>
                    <TouchableOpacity style={style.setupBTN}
                        onPress={() => {
                            props.navigation.navigate('setupAcc')
                        }}>
                        <Text style={style.btnText}>Let's Start</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    topView: {
        width: '100%',
        height: '50%',
        backgroundColor: '#161c39'
    },
    bottomView: {
        width: '100%',
        height: '50%',
        backgroundColor: '#fff'
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
        justifyContent: 'center'
    },
    headding: {
        color: "#fff",
        fontFamily: '',
        fontSize: 26,
        paddingHorizontal: 100,
        textAlign: 'center',
        fontFamily: font.AnekRegular,
        marginBottom: 10
    },
    desc: {
        color: '#fff',
        paddingHorizontal: 50,
        fontSize: 13,
        paddingTop: 25,
        opacity: 0.7,
        textAlign: 'center',
        fontFamily: font.poppinsLight,
        marginBottom: 10
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
        fontFamily: font.poppinsRegular
    },
    image: {
        width: '80%',
        height: '80%',
    }
})
export default Home;