import React, { useStatem, Component } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, Image, FlatList, TouchableOpacity, ScrollView, Alert } from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { color } from "../../theme"
import { scaledSize } from "../../theme/sizing"
import { palette } from "../../theme/palette"

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
    flexDirection: 'row',
    height: 100,
    marginBottom: 5,
    marginTop: 5,
    padding: 5,
    shadowColor: palette.black,
    shadowOffset: {
      height: 1,
      width: -2
    },
    shadowOpacity: 0.2
  },
  header: {
    backgroundColor: color.primary,
    height: 60,
    top: 5,

  },
  headerContent: {
    alignItems: 'center',
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
  }
})
const user = [{
  id: 1,
  image: "https://bootdey.com/img/Content/avatar/avatar6.png",
  username: "thanh1",
},

{
  id: 2,
  image: "https://bootdey.com/img/Content/avatar/avatar2.png",
  username: "thanh2",
},
{
  id: 3,
  image: "https://bootdey.com/img/Content/avatar/avatar3.png",
  username: "thanh3",
},
{
  id: 4,
  image: "https://bootdey.com/img/Content/avatar/avatar4.png",
  username: "thanh4",
},
{
  id: 5,
  image: "https://bootdey.com/img/Content/avatar/avatar1.png",
  username: "thanh5",
},
{
  id: 6,
  image: "https://bootdey.com/img/Content/avatar/avatar6.png",
  username: "thanh6",
},
{
  id: 7,
  image: "https://bootdey.com/img/Content/avatar/avatar1.png",
  username: "thanh7",
},
{
  id: 8,
  image: "https://bootdey.com/img/Content/avatar/avatar1.png",
  username: "thanh8",
},
{
  id: 9,
  image: "https://bootdey.com/img/Content/avatar/avatar6.png",
  username: "thanh9",
},
{
  id: 10,
  image: "https://bootdey.com/img/Content/avatar/avatar1.png",
  username: "thanh10",
}
]
function handleAddFriend() {
  Alert.alert("abcdef")
}
function handleViewProfile() {
  Alert.alert("abcd")
}
export default class ListFriendScreen extends Component {
  render () {
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
              enableEmptySections={true}
              data={user}
              keyExtractor= {(user) => {
                return user.id
              }}
              renderItem={(user) => {
                return (
                  <TouchableOpacity onPress={handleViewProfile}>
                    <View style={styles.box}>
                      <Image style={styles.image} source={{ uri: user.item.image }}/>
                      <Text style={styles.username}>{user.item.username}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }}/>
          </View>
        </View>
      </Screen>
    )
  }
}
