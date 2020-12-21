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
  RefreshControl,
  Pressable,
} from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { color } from "../../theme"
import { scaledSize } from "../../theme/sizing"
import { palette } from "../../theme/palette"
import { ADD_FRIEND, PROFILE_USER } from "../../constants"
import { getFriendList } from "../../services/api/friendsAPI"
import { useStores } from "../../models"

const ROOT: ViewStyle = {
  flex: 1,
  alignItems: "stretch",
  justifyContent: "center",
  backgroundColor: color.background,
}

const styles = StyleSheet.create({
  addFriendButton: {
    height: "75%",
    width: "75%",
  },
  addFriendButtonWrapper: {
    alignItems: "center",
    display: "flex",
    height: 40,
    justifyContent: "center",
    position: "absolute",
    right: 15,
    top: 10,
    width: 40,
    zIndex: 100,
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
  refreshControl: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
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
const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}
export const ListFriendScreen = observer(function ListFriendScreen() {
  const { friendStore } = useStores()

  const [friendList, setFriendList] = useState([])
  const navigation = useNavigation()
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => setRefreshing(false))
  }, [])
  useEffect(() => {
    friendStore.getFriendList()
    setFriendList({ ...friendStore.friends })
  }, [])

  const handleAddFriend = () => {
    navigation.navigate(ADD_FRIEND)
  }

  const handleViewProfile = (user: any) => {
    const userObj = { ...user }
    navigation.navigate(PROFILE_USER, userObj)
  }

  return (
    <Screen style={ROOT}>
      <View style={styles.backgroundStyle}>
        <View style={styles.header}>
          <Pressable style={styles.addFriendButtonWrapper} onPressIn={handleAddFriend}>
            <Image
              source={require("../../../assets/call_icons/plus.png")}
              style={styles.addFriendButton}
            />
          </Pressable>
          <Text style={styles.headerContent}>Danh sách bạn bè</Text>
          <ScrollView
            contentContainerStyle={styles.refreshControl}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          ></ScrollView>
        </View>
        <View style={styles.body}>
          <FlatList
            data={friendList}
            keyExtractor={(user) => {
              return user.info._id
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    handleViewProfile(item)
                  }}
                >
                  <View style={styles.box}>
                    <Image
                      style={styles.image}
                      source={
                        item.info.avatar
                          ? { uri: item.info.avatar }
                          : require("../../../assets/imgs/default-avatar.jpg")
                      }
                    />
                    <Text style={styles.username}>{item.info.fullName}</Text>
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
