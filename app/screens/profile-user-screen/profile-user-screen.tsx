import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { color } from "../../theme"
import {
  StyleSheet,
  View,
  ViewStyle,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useStores } from "../../models"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faEdit, faComment } from "@fortawesome/free-solid-svg-icons"
import { scaledSize } from "../../theme/sizing"
import { useNavigation } from "@react-navigation/native"

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
  alignItems: "center",
}

const styles = StyleSheet.create({
  comment: {
    height: 25,
    position: "absolute",
    right: 20,
    width: 25,
  },
  containerView: {
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  editIcon: {
    position: "absolute",
    right: 15,
    top: 390,
  },
  emailView: {
    backgroundColor: color.backgroundSearch,
    borderRadius: 15,
    height: 60,
    marginBottom: 5,
    width: "95%",
  },
  imageAvatar: {
    height: 375,
    top: 0,
    width: "100%",
  },
  nameView: {
    backgroundColor: color.backgroundSearch,
    borderRadius: 15,
    height: 60,
    marginBottom: 5,
    width: "95%",
  },
  scrollView: {
    width: "100%",
  },
  signOutButton: {
    borderRadius: 24,
    height: 48,
    marginBottom: 5,
    width: 274,
  },
  signOutButtonText: {
    fontSize: 18,
  },
  titleView: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    left: 16,
    position: "absolute",
    top: 7,
  },
  userTextName: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  userView: {
    backgroundColor: color.background,
    borderRadius: 5,
    height: 75,
    justifyContent: "center",
    position: "absolute",
    top: 335,
    width: 300,
  },
  value: {
    fontSize: 16,
    fontStyle: "normal",
    left: 16,
    position: "absolute",
    top: 30,
  },
})

function handelEdit() {
  Alert.alert("sjasjas")
}

function handelSignOut() {
  Alert.alert("sjasjas")
}

function Edit(props) {
  const isMe = props.isMe
  if (isMe) {
    return (
      <TouchableOpacity style={styles.editIcon} onPress={handelEdit}>
        <FontAwesomeIcon icon={faEdit} size={scaledSize(25)} />
      </TouchableOpacity>
    )
  } else {
    return <View />
  }
}

export const ProfileUserScreen = observer(function ProfileUserScreen(props) {
  // const { isMe } = props.route.params
  // navigation.navigate("User", { user })
  const { userStore, navigationStore } = useStores()

  const [user, setUser] = useState(null)

  const navigation = useNavigation()

  useEffect(() => {
    const userObj = {
      _id: userStore._id,
      fullName: userStore.fullName,
      email: userStore.email,
      username: userStore.username,
      avatar: userStore.avatar,
    }
    if (navigationStore.profileScreenParams.isCurrentUser) setUser(userObj)
    else setUser(navigationStore.profileScreenParams.user)
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      navigationStore.setProfileScreenParams({ isCurrentUser: true })
    })

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe
  }, [navigation])

  const handleSignOut = () => {
    userStore.signOut()
  }

  const handleComment = () => {
  }

  return (
    <Screen style={ROOT} preset="scroll">
      {user && (
        <ScrollView style={styles.scrollView}>
          <View style={styles.containerView}>
            <Image
              source={
                user.avatar
                  ? { uri: user.avatar }
                  : require("../../../assets/imgs/default-avatar.jpg")
              }
              style={styles.imageAvatar}
            />
            <Text style={styles.userTextName}></Text>
            <View style={styles.userView}>
              <Text style={styles.userTextName}>{user.username}</Text>
              {!navigationStore.profileScreenParams.isCurrentUser && (
                <TouchableOpacity style={styles.comment} onPress={handleComment}>
                  <FontAwesomeIcon icon={faComment} color={color.primary} size={scaledSize(25)} />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.nameView}>
              <Text style={styles.titleView}>Name</Text>
              <Text style={styles.value}>{user.fullName}</Text>
            </View>
            <View style={styles.emailView}>
              <Text style={styles.titleView}>Email</Text>
              <Text style={styles.value}>{user.email}</Text>
            </View>
            <Edit isMe={navigationStore.profileScreenParams.isCurrentUser} />
            {navigationStore.profileScreenParams.isCurrentUser && (
              <Button
                style={styles.signOutButton}
                onPress={handleSignOut}
                textStyle={styles.signOutButtonText}
                text="Sign Out"
              />
            )}
          </View>
        </ScrollView>
      )}
    </Screen>
  )
})
