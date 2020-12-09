import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  StyleSheet,
  ViewStyle,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { color } from "../../theme"
import { scaledSize } from "../../theme/sizing"
import { palette } from "../../theme/palette"
import { ADD_FRIEND } from "../../constants"
import { getFriendList } from "../../services/api/friendsAPI"

const ROOT: ViewStyle = {
  flex: 1,
  alignItems: "stretch",
  justifyContent: "center",
  backgroundColor: color.background,
}

const styles = StyleSheet.create({
  addFriendButton: {
    height: 30,
    left: 340,
    top: 15,
    width: 30,
  },
  backgroundStyle: {
    alignItems: "stretch",
    justifyContent: "center",
    position: "relative",
  },
  body: {
    // backgroundColor: "#E6E6FA",
    alignItems: "stretch",
    height: "93%",
    top: 5,
  },
  box: {
    backgroundColor: palette.offWhite,
    elevation: 2,
    flexDirection: "row",
    height: 100,
    marginBottom: 5,
    marginTop: 5,
    padding: 5,
    shadowColor: palette.black,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    shadowOpacity: 0.2,
  },
  header: {
    backgroundColor: color.primary,
    height: 60,
    top: 5,
  },
  headerContent: {
    alignItems: "center",
    color: palette.offWhite,
    fontFamily: "Roboto",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "500",
    left: 75,
    lineHeight: 13,
    padding: 30,
    position: "absolute",
    textAlign: "center",
  },
  image: {
    borderRadius: 50,
    height: 60,
    top: 14,
    width: 60,
  },
  username: {
    alignItems: "center",
    color: palette.black,
    fontFamily: "Roboto",
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "500",
    left: 120,
    lineHeight: 30,
    position: "absolute",
    textAlign: "center",
    top: 37,
  },
})

export const ListFriendScreen = observer(function ListFriendScreen() {
  const [friendList, setFriendList] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    const fetchFriendList = async () => {
      const response = await getFriendList()
      console.log(response.data)
      setFriendList(response.data)
    }

    fetchFriendList()
  }, [])

  const handleAddFriend = () => {
    navigation.navigate(ADD_FRIEND)
  }

  const handleViewProfile(user) => {
    // navigation.navigate()
  }

  return (
    <Screen style={ROOT}>
      <View style={styles.backgroundStyle}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleAddFriend}>
            <Image
              source={require("../../../assets/call_icons/plus.png")}
              style={styles.addFriendButton}
            />
          </TouchableOpacity>
          <Text style={styles.headerContent}>Danh sách bạn bè</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            data={friendList}
            keyExtractor={(user) => {
              return user._id
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => {handleViewProfile(item)}}>
                  <View style={styles.box}>
                    <Image style={styles.image} source={{ uri: item.avatar }} />
                    <Text style={styles.username}>{item.fullName}</Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
    </Screen>
  )
})
