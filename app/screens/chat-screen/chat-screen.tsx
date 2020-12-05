import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, FlatList, Image, TextInput, TouchableOpacity } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faCamera, faImage, faPaperPlane, faPhoneAlt, faVideo } from "@fortawesome/free-solid-svg-icons"
import { scaledSize } from "../../theme/sizing"
import ImagePicker from 'react-native-image-crop-picker'
import { initiateSocket, disconnectSocket, subscribeToChat, sendMessage } from "../../services/socket/socket"

const ROOT: ViewStyle = {
  flexDirection: "column",
  height: "100%",
  width: "100%",
}

const styles = StyleSheet.create({
  call: {
    height: 25,
    position: "absolute",
    right: 100,
    width: 25,
  },

  cameraInput: {
    color: color.primary,
    marginLeft: 20,
    marginRight: 10,
  },

  containerView: {
    height: "83%",
    marginBottom: 10,
  },

  friendAvatar: {
    borderRadius: 25,
    height: 30,
    margin: 10,
    width: 30,
  },

  friendContainer: {
    flexDirection: "row",
  },

  friendContentImage: {
    maxHeight: 500,
    width: 250,
  },

  friendContentText: {
    backgroundColor: color.backgroundSearch,
    borderRadius: 20,
    fontSize: 18,
    maxWidth: 280,
    padding: 8,
    paddingBottom: 5
  },

  headerView: {
    borderBottomWidth: 2,
    borderColor: color.backgroundSearch,
    height: "10%",
    justifyContent: "center",
    width: "100%",
  },

  iContainer: {
    flexDirection: "row-reverse",
  },

  iContentImage: {
    marginRight: 10,
    maxHeight: 500,
    width: 280,
  },

  iContentText: {
    backgroundColor: color.primary,
    borderRadius: 20,
    color: color.line,
    fontSize: 18,
    marginRight: 10,
    maxWidth: 280,
    padding: 8
  },

  image: {
    borderRadius: 15,
    height: "100%",
    width: "100%",
  },

  imageInput: {
    color: color.primary,
    marginLeft: 10,
    marginRight: 10,
  },

  input: {
    fontSize: 18,
  },

  inputContainerView: {
    borderColor: color.backgroundSearch,
    borderTopWidth: 2,
    bottom: 0,
    flexDirection: "row",
    height: "7%",
    justifyContent: "center",
    paddingTop: 5,
    position: "absolute",
    width: "100%",
  },

  inputContent: {
    bottom: 0,
    height: 40,
    justifyContent: "center",
    width: "92%"
  },

  inputView: {
    alignItems: "center",
    backgroundColor: color.backgroundSearch,
    borderRadius: 25,
    height: 30,
    justifyContent: "center",
    width: "58%",
  },

  messContainer: {
    width: "100%",
  },

  sendInput: {
    color: color.primary,
    marginLeft: 10,
    marginRight: 20,
  },

  time: {
    fontSize: 10,
  },

  timeContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },

  video: {
    height: 25,
    position: "absolute",
    right: 40,
    width: 25,
  }

})

export const ChatScreen = observer(function ChatScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()
  const { userStore } = useStores()
  // Pull in navigation via hook
  // const navigation = useNavigation()

  const roomId = "1"
  const [messageText, setMessageText] = useState('')
  const [chat, setChat] = useState([])

  useEffect(() => {
    if (roomId) initiateSocket(roomId)
    subscribeToChat((err, data) => {
      if (err) return
      setChat(oldChats => [data, ...oldChats])
    })
    return () => {
      disconnectSocket()
    }
  }, [roomId])

  function handelCall() {
    console.log()
  }

  function handelVideoCall() {
    console.log()
  }

  function handelSendMessage() {
    if (messageText.length > 0) {
      const date = new Date()
      const a = chat.slice()
      a.push({ id: userStore._id, type: "text", content: messageText, createAt: date })
      setChat(a)
      sendMessage(roomId, { id: userStore._id, type: "text", content: messageText, createAt: date })
      setMessageText("")
    }
  }

  function sendMessageImage(messageImage) {
    const date = new Date()
    const a = chat.slice()
    a.push({ id: userStore._id, type: "image", content: messageImage, createAt: date })
    setChat(a)
    sendMessage(roomId, { id: userStore._id, type: "image", content: messageImage, createAt: date })
  }

  function handelCamera() {
    ImagePicker.openCamera({
      cropping: false,
    }).then(image => {
      sendMessageImage(image.path)
    })
  }

  function handelImage() {
    ImagePicker.openPicker({
      cropping: true,
    }).then(image => {
      sendMessageImage(image.path)
    })
  }

  function Content(prop) {
    const mess = prop.mess
    if (mess.id === userStore._id) {
      if (mess.type === "text") {
        return (
          <Text style = {styles.iContentText}>{mess.content}</Text>
        )
      } else if (mess.type === "image") {
        return (
          <View style = {styles.iContentImage}>
            <Image source = {{ uri: mess.content }} style = {styles.image} />
          </View>
        )
      }
    } else {
      if (mess.type === "text") {
        return (
          <Text style = {styles.friendContentText}>{mess.content}</Text>
        )
      } else if (mess.type === "image") {
        return (
          <View style = {styles.friendContentImage}>
            <Image source = {{ uri: mess.content }} style = {styles.image} />
          </View>
        )
      }
    }
  }

  function Message(prop) {
    const mess = prop.mess
    if (mess.id === userStore._id) {
      return (
        <View style = {styles.messContainer}>
          <View style = {styles.timeContainer}>
            <Text style = {styles.time}>{`${mess.createAt.toLocaleTimeString('it-IT')} ${mess.createAt.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`}</Text>
          </View>
          <View style = {styles.iContainer}>
            <Content mess = {mess}/>
          </View>
        </View>
      )
    } else {
      return (
        <View style = {styles.messContainer}>
          <View style = {styles.timeContainer}>
            <Text style = {styles.time}>{`${mess.createAt.toLocaleTimeString('it-IT')} ${mess.createAt.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`}</Text>
          </View>
          <View style = {styles.friendContainer}>
            <View>
              <Image style = {styles.friendAvatar} source = {require("../message-screen/people.jpg")}/>
            </View>
            <View style = {styles.friendContainer}>
              <Content mess = {mess}/>
            </View>
          </View>
        </View>
      )
    }
  }

  return (
    <Screen style={ROOT} preset="scroll">
      <View style = {styles.headerView}>
        <TouchableOpacity style = {styles.call} onPress = {handelCall}>
          <FontAwesomeIcon icon={faPhoneAlt} color={color.primary} size={scaledSize(25)} />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.video} onPress = {handelVideoCall}>
          <FontAwesomeIcon icon={faVideo} color={color.primary} size={scaledSize(25)} />
        </TouchableOpacity>
      </View>
      <View style = {styles.containerView}>
        <View>
          <FlatList
            data={chat}
            renderItem={({ item }) => (<Message mess={item} />)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <View style = {styles.inputContainerView}>
        <View>
          <TouchableOpacity onPress = {handelCamera}>
            <FontAwesomeIcon icon={faCamera} style = {styles.cameraInput} size={scaledSize(25)} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress = {handelImage}>
            <FontAwesomeIcon icon={faImage} style = {styles.imageInput} size={scaledSize(25)} />
          </TouchableOpacity>
        </View>
        <View style = {styles.inputView}>
          <View style = {styles.inputContent}>
            <TextInput style= {styles.input} value = {messageText} onChangeText = {setMessageText} />
          </View>
        </View>
        <View>
          <TouchableOpacity onPress = {handelSendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} style = {styles.sendInput} size={scaledSize(25)} />
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  )
})
