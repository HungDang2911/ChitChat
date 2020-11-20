import React, {useState} from 'react'
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, Image, FlatList, TouchableOpacity} from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { color } from "../../theme"
import { scaledSize } from "../../theme/sizing"

const ROOT: ViewStyle = {
    position: 'relative',
    width: 375,
    height: 812,
    backgroundColor: '#FFFFFF',
 }

 const styles = StyleSheet.create({

    decline: {
        position: 'absolute',
        width: 65,
        height: 65,
        left: 155,
        right: 0,
        top: 680,
        bottom: 0,
      //  backgroundColor: '#CF3232',
    },
    mute: {
        position: 'absolute',
        width: 55,
        height: 55,
        left: 86,
        right: 0,
        top: 687,
        bottom: 0,
        //backgroundColor: 'rgba(255, 255, 255, 0.9)',
        //color: 'rgba(255, 255, 255, 0.9)',
    },
    videoOff: {
        position: 'absolute',
        width: 55,
        height: 55,
        left: 235,
        right: 0,
        top: 687,
        bottom: 0,
      //  backgroundColor: '#CF3232',
    },
    conversationList: {
        position: 'absolute',
        width: 83,
        height: 128,
        left: 276,
        top: 55,
        backgroundColor: '#CF3232',
        borderRadius: 5,
    },
    userName: {
        position: 'absolute',
        left: 119,
        top: 58,
        height: 30,
        width: 136,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 30,
        textAlign: 'center',

        color: '#FFFFFF'
    },
    time: {
        position: 'absolute',
        left: 165,
        top: 94,
        width: 46,
        height: 22,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 22,

        textAlign: 'center',

        color: '#FFFFFF',
    },
    changeCamera: {
        position: 'absolute',
        left: 26,
        top: 59,
        width: 30,
        height: 30,
    },
    backgroundVideo: {
        position: 'absolute',
        width: 375,
        height: 812,
        left: 0,
        top: 0,

        //backgroundColor: '#CF3232',
    }
 })

 const handleMute = () => {
    console.log()
  }
 const handleDecline = () => {
    console.log()
  }
 const handleVideoOff = () => {
    console.log()
  }
const handleChangeCamera = () => {
    console.log()
  }
 export default function VideoCallScreen (props) {
     return (
        <Screen style = {ROOT}>
            <View>
                <Image source = {require('D:/mobile/ChitChat/assets/call_icons/userImage-test2.png')} style = {styles.backgroundVideo}/>
            </View>
            <View>
                 <Image source = {require('D:/mobile/ChitChat/assets/call_icons/mute.png')} style = {styles.mute}/>
                 <TouchableOpacity onPress = {handleMute} style = {styles.mute}></TouchableOpacity>
            </View>
            <View> 
                <Image source = {require('D:/mobile/ChitChat/assets/call_icons/decline.png')} style = {styles.decline}/>
                <TouchableOpacity onPress = {handleDecline} style = {styles.decline}></TouchableOpacity>
            </View>
            <View>
                <Image source = {require('D:/mobile/ChitChat/assets/call_icons/video-off.png')} style = {styles.videoOff} />
                <TouchableOpacity onPress = {handleVideoOff} style = {styles.videoOff}></TouchableOpacity>
            </View>
            <View>
                <Image source = {require('D:/mobile/ChitChat/assets/call_icons/userImage-test1.png')} style = {styles.conversationList}/>
            </View>
            <View>
                <Text style = {styles.userName}>Thành</Text>
            </View>
            <View>
                <Text style = {styles.time}>69:59</Text>
            </View>
            <View>
                <Image source = {require('D:/mobile/ChitChat/assets/call_icons/change-camera.png')} style = {styles.changeCamera}/>
                <TouchableOpacity onPress = {handleChangeCamera} style = {styles.changeCamera}></TouchableOpacity>
            </View>
            
        </Screen>
     );
 }