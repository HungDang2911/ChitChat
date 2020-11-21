import React, {useState} from 'react'
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, Image, FlatList, TouchableOpacity } from "react-native"
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
    avatarContainer: {
        position: 'absolute',
        width: 174,
        height: 174,
        //left: -87,
        top: -250,
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: url(pexels-photo-3047316.jpg);
        borderRadius: 130,
    },
    userName: {
        position: 'absolute',
        top: -65,
        width: "100%",
        height: 31,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 30,

        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        color: '#FFFFFF',
    },
    calling: {
        position: 'absolute',
        //left: -40,
        top: -30,
        width: 100,
        height: 23.92,
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
    accept: {
        position: 'absolute',
        left: -160,
        top: 190,
        width: 82,
        height: 82,
    },
    decline: {
        position: 'absolute',
        right: -160,
        top: 190,
        width: 82,
        height: 82,
    },
    acceptText: {
        position: 'absolute',
        left: -165,
        top: 280,
        width: 100,
        height: 65,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 18,

        textAlign: 'center',

        color: '#FFFFFF',
    },
    declineText: {
        position: 'absolute',
        right: -150,
        top: 280,
        width: 65,
        height: 65,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 18,

        textAlign: 'center',

        color: '#FFFFFF',
    },
    backgroundCalling: {
        position: 'absolute',
        // width: 533,
        // height: 819,
        // left: -285,
        // top: -390,
        //width: "100%",
        //height: "100%",
        //background: url(pexels-photo-3047316.jpg);
    }

})

const handleAccept = () => {
    console.log()
  }
const handleDecline = () => {
    console.log()
  }

export const CallingScreen = observer(function VideoCallScreen() {
     return (
        <Screen style = {ROOT}>
            <View style = {styles.backgroundStyle}>
                <Image source = {require('../../../assets/call_icons/userImage-test1.png')} style = {styles.backgroundCalling} blurRadius = {6}/>
           
                <Image source = {require('../../../assets/call_icons/accept.png')} style = {styles.accept}/>
                <TouchableOpacity onPress = {handleAccept} style = {styles.accept}></TouchableOpacity>
                <Text style = {styles.acceptText}>Chấp nhận</Text>

                <Image source = {require('../../../assets/call_icons/decline.png')} style = {styles.decline}/>
                <TouchableOpacity onPress = {handleDecline} style = {styles.decline}></TouchableOpacity>
                <Text style = {styles.declineText}>Từ chối</Text>
                <View style = {styles.avatarContainer}>
                <Image source = {require('../../../assets/call_icons/userImage-test1.png')} style = {{width: "100%", height: '100%', borderRadius: 130}}/>
                </View>
                <Text style = {styles.userName}>Thanh Thảo</Text>
           
                <Text style = {styles.calling}>Đang gọi...</Text>
            </View>
        </Screen>
     );
    })