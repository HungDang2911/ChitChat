import React, {useState} from 'react'
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, Image, FlatList, TouchableOpacity } from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { color } from "../../theme"
import { scaledSize } from "../../theme/sizing"

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
    decline: {
        position: 'absolute',
        width: 65,
        height: 65,
        //left: -30,
        top: 290,
        alignItems: "center",
        justifyContent: "center",
      //  backgroundColor: '#CF3232',
    },
    mute: {
        position: 'absolute',
        width: 55,
        height: 55,
        left: -110,
        top: 295,
        //backgroundColor: 'rgba(255, 255, 255, 0.9)',
        //color: 'rgba(255, 255, 255, 0.9)',
    },
    videoOff: {
        position: 'absolute',
        width: 55,
        height: 55,
        right: -110,
        top: 295,
      //  backgroundColor: '#CF3232',
    },
    callerVideoContainer: {
        position: 'absolute',
        width: 83,
        height: 128,
        left: 100,
        top: -310,
        backgroundColor: '#CF3232',
        borderRadius: 5,
    },
    userName: {
        position: 'absolute',
        //left: -66,
        top: -315,
        height: 30,
        width: '100%',
        alignItems: "center",
        
        justifyContent: "center",
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
        //left: -21,
        top: -280,
        width: 46,
        height: 22,
        alignItems: "center",
        justifyContent: "center",

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
        left: -170,
        top: -340,
        width: 30,
        height: 30,
    },
    backgroundVideo: {
        position: 'absolute',
        // width: 400,
        // height: 900,
        // left: -200,
        // top: -385,
        width: '100%',
        //height:'100%',
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
export const VideoCallScreen = observer(function VideoCallScreen() {
     return (
        <Screen style = {ROOT}>
            <View style = {styles.backgroundStyle}>
                <Image source = {require('../../../assets/call_icons/userImage-test2.png')} style = {styles.backgroundVideo}/>

                <Image source = {require('../../../assets/call_icons/mute.png')} style = {styles.mute}/>
                <TouchableOpacity onPress = {handleMute} style = {styles.mute}></TouchableOpacity>

                <Image source = {require('../../../assets/call_icons/decline.png')} style = {styles.decline}/>
                <TouchableOpacity onPress = {handleDecline} style = {styles.decline}></TouchableOpacity>

                <Image source = {require('../../../assets/call_icons/video-off.png')} style = {styles.videoOff} />
                <TouchableOpacity onPress = {handleVideoOff} style = {styles.videoOff}></TouchableOpacity>

                <View style = {styles.callerVideoContainer}>
                    <Image source = {require('../../../assets/call_icons/userImage-test3.png')} style = {{width: '100%', height: '100%', borderRadius: 5}}/>
                </View>

                <Text style = {styles.userName}>Thảo xinh</Text>

                <Text style = {styles.time}>69:59</Text>

                <Image source = {require('../../../assets/call_icons/change-camera.png')} style = {styles.changeCamera}/>
                <TouchableOpacity onPress = {handleChangeCamera} style = {styles.changeCamera}></TouchableOpacity>
            </View>
            
        </Screen>
     )
})