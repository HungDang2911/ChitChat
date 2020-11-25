import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import {
  StyleSheet,
  ViewStyle,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { color } from "../../theme"
import { scaledSize } from "../../theme/sizing"
import { background } from "@storybook/theming"

const ROOT: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: color.background,
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 130,
    height: 174,
    left: -87,
    position: "absolute",
    top: -250,
    width: 174,
    // backgroundColor: url(pexels-photo-3047316.jpg);
  },
  backgroundAnswering: {
    position: "absolute",
    // width: 533,
    // height: 819,
    //    width: '100%',
    //     height: '100%',
    // left: -285,
    // top: -390,
    // left: '0%',
    // top: '0%',
    // right: 0,
    // bottom:0,
    // background: url(pexels-photo-3047316.jpg);
  },
  backgroundStyle: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  decline: {
    height: 65,
    left: -30,
    position: "absolute",
    top: 280,
    width: 65,
  },
  mute: {
    height: 60,
    position: "absolute",
    right: -123,
    top: 130,
    width: 60,
  },
  muteText: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    height: 60,
    lineHeight: 18,
    position: "absolute",
    right: -123,
    textAlign: "center",

    top: 200,

    width: 60,
  },
  speaker: {
    height: 60,
    left: -120,
    position: "absolute",
    top: 130,
    width: 60,
  },
  speakerText: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    height: 60,
    left: -137,
    lineHeight: 18,
    position: "absolute",
    textAlign: "center",

    top: 200,

    width: 100,
  },
  time: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    height: 23.92,
    left: -34,
    lineHeight: 22,
    position: "absolute",
    textAlign: "center",
    top: -30,

    width: 72.86,
  },
  userName: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "500",
    height: 31,
    left: -87,
    lineHeight: 30,
    position: "absolute",
    textAlign: "center",

    top: -65,

    width: 176,
  },

  videoCall: {
    height: 60,
    position: "absolute",
    right: -33,
    top: 130,
    width: 60,
  },
  videoCallText: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    height: 60,
    lineHeight: 18,
    position: "absolute",
    right: -54,
    textAlign: "center",

    top: 200,

    width: 100,
  },
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
    <Screen style={ROOT}>
      <View style={styles.backgroundStyle}>
        <Image
          source={require("../../../assets/call_icons/userImage-test1.png")}
          style={styles.backgroundAnswering}
          blurRadius={6}
        />
        <Image source={require("../../../assets/call_icons/decline.png")} style={styles.decline} />
        <TouchableOpacity onPress={handleDecline} style={styles.decline}></TouchableOpacity>

        <Image source={require("../../../assets/call_icons/mute.png")} style={styles.mute} />
        <TouchableOpacity onPress={handleMute} style={styles.mute}></TouchableOpacity>
        <Text style={styles.muteText}>Tắt tiếng</Text>

        <Image source={require("../../../assets/call_icons/speaker.png")} style={styles.speaker} />
        <TouchableOpacity onPress={handleSpeaker} style={styles.speaker}></TouchableOpacity>
        <Text style={styles.speakerText}>Loa ngoài</Text>

        <Image
          source={require("../../../assets/call_icons/video-call.png")}
          style={styles.videoCall}
        />
        <TouchableOpacity onPress={handleVideoCall} style={styles.videoCall}></TouchableOpacity>
        <Text style={styles.videoCallText}>Gọi Video</Text>

        <Image
          source={require("../../../assets/call_icons/userImage-test1.png")}
          style={styles.avatar}
        />

        <Text style={styles.userName}>Thảo Xinh vcl</Text>

        <Text style={styles.time}>69:59</Text>
      </View>
    </Screen>
  )
})
