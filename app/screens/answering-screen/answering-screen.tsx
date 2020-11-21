import React, {useState} from 'react'
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, Image, FlatList, TouchableOpacity} from "react-native"
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
        left: -80,
        top: 130,
        width: 60,
        height: 60,
    },
    mute: {
        position: 'absolute',
        right: -80,
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
    backgroundAnswering: {
        position: 'absolute',
        width: 533,
        height: 819,
        left: -285,
        top: -390,

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
export default function AnsweringScreen (props) {
     return (
        <Screen style = {ROOT}>
            <View>
                <Image source = {require('D:/mobile/ChitChat/assets/call_icons/userImage-test1.png')} style = {styles.backgroundAnswering} blurRadius = {2}/>
            </View>
            <View>
                 <Image source = {require('D:/mobile/ChitChat/assets/call_icons/decline.png')} style = {styles.decline} />
                 <TouchableOpacity onPress = {handleDecline} style = {styles.decline} >
                 </TouchableOpacity>
            </View>
            <View> 
                <Image source = {require('D:/mobile/ChitChat/assets/call_icons/mute.png')} style = {styles.mute}/>
                <TouchableOpacity onPress = {handleMute} style = {styles.mute}></TouchableOpacity>
            </View>
            <View> 
                <Image source = {require('D:/mobile/ChitChat/assets/call_icons/speaker.png')} style = {styles.speaker}/>
                <TouchableOpacity onPress = {handleSpeaker} style = {styles.speaker}></TouchableOpacity>
            </View>
            <View>
                <Image source = {require('D:/mobile/ChitChat/assets/call_icons/userImage-test1.png')} style = {styles.avatar}/>
            </View>
            <View>
                <Text style = {styles.userName}>Thành Nguyễn</Text>
            </View>
            <View>
                <Text style = {styles.time}>69:59</Text>
            </View>
        </Screen>
     );
    }