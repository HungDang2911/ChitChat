import React, { useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  StyleSheet,
  ViewStyle,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
  Animated,
  TextInput,
  ScrollView,
} from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faUserPlus, faUserFriends, faUserCheck } from "@fortawesome/free-solid-svg-icons"
import { color } from "../../theme"
import { scaledSize } from "../../theme/sizing"
import { allowStateReadsStart } from "mobx/lib/internal"

const ROOT: ViewStyle = {
  position: "relative",
  flex: 1,
  alignItems: "center",
  // justifyContent: "center"
}

const styles = StyleSheet.create({
  iconView: {
    alignItems: "center",
    backgroundColor: color.primary,
    borderRadius: 25,
    height: 40,
    justifyContent: "center",
    left: 300,
    top: 20,
    width: 40,
  },
  inputText: {
    alignItems: "center",
    backgroundColor: color.backgroundSearch,
    borderColor: color.text,
    borderRadius: 18,
    borderWidth: 2,
    height: 40,
    // justifyContent: "center",
    width: "95%",
  },
  inputTextContent: {
    bottom: -8,
    fontSize: 15,
    position: "absolute",
    width: "95%",
  },
  inputView: {
    alignItems: "center",
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: 2,
    height: 60,
    justifyContent: "center",
    width: "100%",
  },
  messageUserAvatar: {
    borderRadius: 50,
    height: 55,
    left: 6,
    position: "absolute",
    top: 8,
    width: 55,
  },
  messageUserTextName: {
    color: color.text,
    fontFamily: "Geometria",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    left: 71,
    lineHeight: 20,
    position: "absolute",
    top: 14,
  },
  messageUserView: {
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: 2,
    height: 77,
    position: "relative",
    width: 375,
  },
  userConstainer: {
    height: 597,
    position: "absolute",
    top: 58,
  },
})

function MessageUser(props) {
  const { user } = props
  const [isFriend, setIsFriend] = useState(user.isFriend)

  function handelIsFriend() {
    if (isFriend === -1) {
      setIsFriend(0)
      user.isFriend = 0
    }
  }

  return (
    <View style={styles.messageUserView}>
      <Text style={styles.messageUserTextName}>{user.name}</Text>
      <Image source={{ uri: user.avatar }} style={styles.messageUserAvatar} />
      <View style={styles.iconView}>
        <TouchableOpacity onPress={handelIsFriend}>
          <IconIsFriend isFriend={isFriend} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

function IconIsFriend(prop) {
  const isFriend = prop.isFriend
  if (isFriend === 1) {
    return <FontAwesomeIcon icon={faUserFriends} color={"#ffffff"} size={scaledSize(25)}></FontAwesomeIcon>
  }
  if (isFriend === -1) {
    return <FontAwesomeIcon icon={faUserPlus} color={"#ffffff"} size={scaledSize(25)}></FontAwesomeIcon>
  } else {
    return <FontAwesomeIcon icon={faUserCheck} color={"#ffffff"} size={scaledSize(25)}></FontAwesomeIcon>
  }
}

export const AddFriendScreen = observer(function AddFriendSrceen() {
  const users = [
    {
      id: 1,
      lastTime: "11:09",
      name: "agdhagd",
      message: "hdjshdas",
      status: 3,
      isFriend: -1,
    },
    {
      id: 2,
      avatar: ".people.jpg",
      lastTime: "11:12",
      name: "agdassdhagd",
      message: "hdjsdsdas",
      status: 0,
      isFriend: -1,
    },
  ]
  const [searchTerm, setSearchTerm] = useState("")
  const typingTimeoutRef = useRef(null)

  function handelSearchTermChange(e) {
    setSearchTerm(e)

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      // API lấy dữ liệu
      console.log(e)
    }, 300)
  }

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={styles.inputView}>
        <View style={styles.inputText}>
          <TextInput
            style = {styles.inputTextContent}
            placeholder="Tìm kiếm bạn bè bằng tên người dùng"
            value={searchTerm}
            onChangeText={handelSearchTermChange}
          ></TextInput>
        </View>
      </View>
      <View style={styles.userConstainer}>
        <FlatList
          data={users}
          renderItem={({ item }) => <MessageUser user={item} />}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </Screen>
  )
})
