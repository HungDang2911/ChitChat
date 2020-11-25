import React from "react"
import { observer } from "mobx-react-lite"
import { color } from "../../theme"
import { StyleSheet, View, ViewStyle } from "react-native"
import { Button, Screen, Text, TextField } from "../../components"

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}

const styles = {
}

export const ProfileUserScreen = observer(function ProfileUserScreen() {
  return (
    <View></View>
  )
})
