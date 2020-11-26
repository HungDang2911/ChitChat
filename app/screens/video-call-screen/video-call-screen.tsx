import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, Image, FlatList, TouchableOpacity } from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { color } from "../../theme"
import { scaledSize } from "../../theme/sizing"
import { palette } from "../../theme/palette"

const ROOT: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: color.background,
}

const styles = StyleSheet.create({
  backgroundStyle: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  backgroundVideo: {
    position: "absolute",
    // width: 400,
    // height: 900,
    // left: -200,
    // top: -385,
    width: "100%",
    // height:'100%',
    // backgroundColor: '#CF3232',
  },
  callerVideoContainer: {
    // backgroundColor: "#CF3232",
    borderRadius: 5,
    height: 128,
    left: 100,
    position: "absolute",
    top: -310,
    width: 83,
  },
  changeCamera: {
    height: 30,
    left: -170,
    position: "absolute",
    top: -320,
    width: 30,
  },
  decline: {
    alignItems: "center",
    height: 65,
    justifyContent: "center",
    position: "absolute",
    top: 270,
    width: 65,
    // left: -30,
    //  backgroundColor: '#CF3232',
  },
  mute: {
    height: 55,
    left: -110,
    position: "absolute",
    top: 275,
    width: 55,
    // backgroundColor: 'rgba(255, 255, 255, 0.9)',
    // color: 'rgba(255, 255, 255, 0.9)',
  },
  time: {
    alignItems: "center",
    color: palette.offWhite,
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    height: 22,
    justifyContent: "center",
    lineHeight: 22,
    position: "absolute",
    textAlign: "center",
    top: -280,
    width: 46,
  },
  userName: {
    alignItems: "center",
    color: palette.offWhite,
    fontFamily: "Roboto",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "500",
    height: 30,
    justifyContent: "center",
    lineHeight: 30,
    position: "absolute",
    textAlign: "center",
    top: -315,
    width: "100%",
  },
  videoOff: {
    height: 55,
    position: "absolute",
    right: -110,
    top: 275,
    width: 55,
    //  backgroundColor: '#CF3232',
  },
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
    <Screen style={ROOT}>
      <View style={styles.backgroundStyle}>
        <Image
          source={require("../../../assets/call_icons/userImage-test2.png")}
          style={styles.backgroundVideo}
        />

        <Image source={require("../../../assets/call_icons/mute.png")} style={styles.mute} />
        <TouchableOpacity onPress={handleMute} style={styles.mute}></TouchableOpacity>

        <Image source={require("../../../assets/call_icons/decline.png")} style={styles.decline} />
        <TouchableOpacity onPress={handleDecline} style={styles.decline}></TouchableOpacity>

        <Image
          source={require("../../../assets/call_icons/video-off.png")}
          style={styles.videoOff}
        />
        <TouchableOpacity onPress={handleVideoOff} style={styles.videoOff}></TouchableOpacity>

        <View style={styles.callerVideoContainer}>
          <Image
            source={require("../../../assets/call_icons/userImage-test3.png")}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ width: "100%", height: "100%", borderRadius: 5 }}
          />
        </View>

        <Text style={styles.userName}>Thảo xinh</Text>

        <Text style={styles.time}>69:59</Text>

        <Image
          source={require("../../../assets/call_icons/change-camera.png")}
          style={styles.changeCamera}
        />
        <TouchableOpacity
          onPress={handleChangeCamera}
          style={styles.changeCamera}
        ></TouchableOpacity>
      </View>
    </Screen>
  )
})
