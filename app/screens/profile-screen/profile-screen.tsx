import React from "react"
import { observer } from "mobx-react-lite"
import { Image, StyleSheet, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
}

const styles = StyleSheet.create({
  avatarImg: {

  },
  avatarWrapper: {

  },
  icon: {

  }
})

export const ProfileScreen = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  const { userStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={styles.avatarWrapper}>
        <Image source={require("../../../assets/imgs/default-avatar.jpg")} />
      </View>
      <View>
        <FontAwesomeIcon icon={faSignOutAlt} style={styles.icon}/>
        <Text tx="profileScreen.logout" />
      </View>
    </Screen>
  )
})
