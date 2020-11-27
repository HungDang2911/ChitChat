/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, Image, FlatList, TouchableOpacity } from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { color } from "../../theme"
import { scaledSize } from "../../theme/sizing"
import { background } from '@storybook/theming'
import { palette } from '../../theme/palette'

const ROOT: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: color.background,
}

const styles = StyleSheet.create({
  accept: {
    height: 82,
    left: -160,
    position: 'absolute',
    top: 180,
    width: 82,
  },
  acceptText: {
    color: palette.offWhite,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    height: 65,
    left: -165,
    lineHeight: 18,
    position: 'absolute',
    textAlign: 'center',
    top: 270,
    width: 100,
  },
  avatarContainer: {
    alignItems: "center",
    borderRadius: 130,
    height: 174,
    justifyContent: "center",
    position: 'absolute',
    top: -250,
    width: 174,
  },
  backgroundCalling: {
    position: 'absolute',
    // width: 533,
    // height: 819,
    // left: -285,
    // top: -390,
    // width: "100%",
    // height: "100%",
    // background: url(pexels-photo-3047316.jpg);
  },
  backgroundStyle: {
    alignItems: "center",
    justifyContent: "center",
    position: 'relative',
  },
  calling: {
    alignItems: "center",
    color: palette.offWhite,
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
    height: 23.92,
    justifyContent: "center",
    lineHeight: 22,
    position: 'absolute',
    textAlign: 'center',
    top: -30,
    width: 100,
  },
  decline: {
    height: 82,
    position: 'absolute',
    right: -160,
    top: 180,
    width: 82,
  },
  declineText: {
    color: palette.offWhite,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    height: 65,
    lineHeight: 18,
    position: 'absolute',
    right: -150,
    textAlign: 'center',
    top: 270,
    width: 65,
  },
  userName: {
    alignItems: "center",
    color: palette.offWhite,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    height: 31,
    justifyContent: "center",
    lineHeight: 30,
    position: 'absolute',
    textAlign: 'center',
    top: -65,
    width: "100%",
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
          <Image source = {require('../../../assets/call_icons/userImage-test1.png')} style = {{ width: "100%", height: '100%', borderRadius: 130 }}/>
        </View>
        <Text style = {styles.userName}>Thanh Thảo</Text>

        <Text style = {styles.calling}>Đang gọi...</Text>
      </View>
    </Screen>
  )
})
