import React, {useState} from 'react'
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, Image, FlatList, TouchableOpacity, ImageBackground} from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { color } from "../../theme"
import { scaledSize } from "../../theme/sizing"
import { background } from '@storybook/theming'

const ROOT: ViewStyle = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.background,
 }

const styles = StyleSheet.create({
    backgroundStyle: {
        position: 'relative',
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        position: 'absolute',
        width: 174,
        height: 174,
        left: -87,
        top: -250,
        //backgroundColor: url(pexels-photo-3047316.jpg);
        borderRadius: 130,
    },
    userName: {
        position: 'absolute',
        left: -87,
        top: -65,
        width: 176,
        height: 31,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 30,

        textAlign: 'center',

        color: '#FFFFFF',
    },
    time: {
        position: 'absolute',
        left: -34,
        top: -30,
        width: 72.86,
        height: 23.92,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 22,
        textAlign: 'center',

        color: '#FFFFFF',
    },
    speaker: {
        position: 'absolute',
        left: -120,
        top: 130,
        width: 60,
        height: 60,
    },
    mute: {
        position: 'absolute',
        right: -123,
        top: 130,
        width: 60,
        height: 60,
    },
    decline: {
        position: 'absolute',
        left: -30,
        top: 280,
        width: 65,
        height: 65,
    },
    videoCall: {
        position: 'absolute',
        right: -33,
        top: 130,
        width: 60,
        height: 60,
    },
    speakerText: {
        position: 'absolute',
        left: -137,
        top: 200,
        width: 100,
        height: 60,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 18,

        textAlign: 'center',

        color: '#FFFFFF',
    },
    muteText: {
        position: 'absolute',
        right: -123,
        top: 200,
        width: 60,
        height: 60,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 18,

        textAlign: 'center',

        color: '#FFFFFF',
    },
    
    videoCallText: {
        position: 'absolute',
        right: -54,
        top: 200,
        width: 100,
        height: 60,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 18,

        textAlign: 'center',

        color: '#FFFFFF',
    },
    backgroundAnswering: {
        position: 'absolute',
        //width: 533,
        //height: 819,
    //    width: '100%',
    //     height: '100%',
        //left: -285,
        //top: -390,
        //left: '0%',
        //top: '0%',
        // right: 0,
        // bottom:0,
        //background: url(pexels-photo-3047316.jpg);
    }

})

const handleSpeaker = () => {
    console.log()
  }
const handleDecline = () => {
    console.log()
  }
const handleMute = () => {
    console.log()
  }
const handleVideoCall = () => {
    console.log()
  }
export const AnsweringScreen = observer(function AnsweringScreen() {
     return (
        <Screen style = {ROOT}>
            <View style = {styles.backgroundStyle}>
                <Image source = {require('../../../assets/call_icons/userImage-test1.png')} style = {styles.backgroundAnswering} blurRadius = {6}/>
                <Image source = {require('../../../assets/call_icons/decline.png')} style = {styles.decline} />
                <TouchableOpacity onPress = {handleDecline} style = {styles.decline} ></TouchableOpacity>
                
                <Image source = {require('../../../assets/call_icons/mute.png')} style = {styles.mute}/>
                <TouchableOpacity onPress = {handleMute} style = {styles.mute}></TouchableOpacity>
                <Text style = {styles.muteText}>Tắt tiếng</Text>

                <Image source = {require('../../../assets/call_icons/speaker.png')} style = {styles.speaker}/>
                <TouchableOpacity onPress = {handleSpeaker} style = {styles.speaker}></TouchableOpacity>
                <Text style = {styles.speakerText}>Loa ngoài</Text>

                <Image source = {require('../../../assets/call_icons/video-call.png')} style = {styles.videoCall}/>
                <TouchableOpacity onPress = {handleVideoCall} style = {styles.videoCall}></TouchableOpacity>
                <Text style = {styles.videoCallText}>Gọi Video</Text>

                <Image source = {require('../../../assets/call_icons/userImage-test1.png')} style = {styles.avatar}/>

                <Text style = {styles.userName}>Thảo Xinh vcl</Text>

                <Text style = {styles.time}>69:59</Text>
            </View>
        </Screen>
     );
    })