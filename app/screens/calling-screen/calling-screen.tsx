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
    calling: {
        position: 'absolute',
        left: -27,
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
    backgroundCalling: {
        position: 'absolute',
        width: 533,
        height: 819,
        left: -285,
        top: -390,

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
            <View>
                <Image source = {require('../../../assets/call_icons/userImage-test1.png')} style = {styles.backgroundCalling} blurRadius = {2}/>
            </View>
            <View>
                 <Image source = {require('../../../assets/call_icons/accept.png')} style = {styles.accept}/>
                 <TouchableOpacity onPress = {handleAccept} style = {styles.accept}></TouchableOpacity>
            </View>
            <View>
                <Image source = {require('../../../assets/call_icons/decline.png')} style = {styles.decline}/>
                <TouchableOpacity onPress = {handleDecline} style = {styles.decline}></TouchableOpacity>
            </View>
            <View>
                <Image source = {require('../../../assets/call_icons/userImage-test1.png')} style = {styles.avatar}/>
            </View>
            <View>
                <Text style = {styles.userName}>Thanh Thảo Nguyễn</Text>
            </View>
            <View>
                <Text style = {styles.calling}>Calling...</Text>
            </View>
        </Screen>
     );
    })