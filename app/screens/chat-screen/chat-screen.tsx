/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import {
  faArrowLeft,
  faCamera,
  faImage,
  faPaperPlane,
  faPhoneAlt,
  faVideo,
} from "@fortawesome/free-solid-svg-icons"
import ImagePicker from "react-native-image-crop-picker"
import {
  initiateSocket,
  disconnectSocket,
  subscribeToChat,
  sendMessage,
} from "../../services/socket/socket"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { MessageTime } from "./components/time"

const ROOT: ViewStyle = {
  flex: 1,
}

const dummyConversation = [
  {
    _id: "1",
    type: "text",
    sender: "1",
    content: "Hello",
    createdAt: "2020-12-26T14:20:09.495Z",
  },
  {
    _id: "2",
    type: "text",
    sender: "2",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: "2020-12-26T14:32:10.495Z",
  },
  {
    _id: "3",
    type: "text",
    sender: "1",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: "2020-12-26T14:45:11.495Z",
  },
  {
    _id: "4",
    type: "text",
    sender: "1",
    content: "Hello",
    createdAt: "2020-12-26T14:46:12.495Z",
  },
  {
    _id: "5",
    type: "text",
    sender: "2",
    content: "Hello",
    createdAt: "2020-12-26T15:02:13.495Z",
  },
  {
    _id: "6",
    type: "text",
    sender: "1",
    content: "Hello",
    createdAt: "2020-12-26T15:03:13.495Z",
  },
  {
    _id: "7",
    type: "text",
    sender: "1",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: "2020-12-26T15:12:11.495Z",
  },
  {
    _id: "8",
    type: "text",
    sender: "1",
    content: "Hello",
    createdAt: "2020-12-26T15:13:12.495Z",
  },
  {
    _id: "9",
    type: "text",
    sender: "2",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: "2020-12-26T15:20:11.495Z",
  },
  {
    _id: "10",
    type: "text",
    sender: "2",
    content: "Hello",
    createdAt: "2020-12-26T15:21:12.495Z",
  },
  {
    _id: "11",
    type: "text",
    sender: "2",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: "2020-12-26T15:23:11.495Z",
  },
  {
    _id: "12",
    type: "text",
    sender: "2",
    content: "Hello",
    createdAt: "2020-12-26T15:24:12.495Z",
  },
  {
    _id: "13",
    type: "text",
    sender: "1",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: "2020-12-26T15:25:11.495Z",
  },
  {
    _id: "14",
    type: "text",
    sender: "2",
    content: "Hello",
    createdAt: "2020-12-26T15:26:12.495Z",
  },
]

export const ChatScreen = observer(function ChatScreen() {
  const { userStore, navigationStore, conversationStore } = useStores()

  const [messageText, setMessageText] = useState("")

  const [isInputFocused, setInputFocused] = useState<boolean>(false)

  const [conversation, setConversation] = useState({
    _id: "0",
    displayName: "",
    avatar: "",
    members: [],
    messages: [],
  })

  const navigation = useNavigation()

  useEffect(() => {
    const conversationInStore = conversationStore.conversations.find(
      (conversation) => conversation._id === navigationStore.chatScreenParams.conversationId,
    )
    setConversation({ ...conversationInStore })
  }, [])

  // useEffect(() => {
  //   subscribeToChat((err, data) => {
  //     if (err) return
  //     console.log(data)
  //   })
  // }, [conversation._id])

  function handleCall() {
    console.log()
  }

  function handleVideoCall() {
    console.log()
  }

  function handleSendMessage() {
    if (messageText.length > 0) {
      // const a = conversation.messages.slice()
      // a.push({ id: userStore._id, type: "text", content: messageText, createdAt: date })
      // setChat(a)
      sendMessage(conversation._id, {
        sender: userStore._id,
        type: "text",
        content: messageText,
      })
      setMessageText("")
    }
  }

  function sendMessageImage(messageImage) {
    // const a = conversation.messages.slice()
    // a.push({ id: userStore._id, type: "image", content: messageImage, createdAt: date })
    // setChat(a)
    sendMessage(conversation._id, {
      sender: userStore._id,
      type: "image",
      content: messageImage,
    })
  }

  function handleCamera() {
    ImagePicker.openCamera({
      height: 1928,
      width: 1080,
      cropping: false,
    }).then((image) => {
      sendMessageImage(image.path)
    })
  }

  function handleImage() {
    ImagePicker.openPicker({
      height: 1928,
      width: 1080,
      cropping: true,
    }).then((image) => {
      sendMessageImage(image.path)
    })
  }

  const handleViewProfile = () => {
    console.log("View profile")
  }

  return (
    conversation && (
      <Screen style={ROOT}>
        <View style={styles.header}>
          <View style={styles.headerSection}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.goBack()
              }}
            >
              <FontAwesomeIcon color={color.primary} icon={faArrowLeft} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleViewProfile()
              }}
              style={styles.headerInfo}
            >
              <Image
                source={
                  conversation.avatar
                    ? { uri: conversation.avatar }
                    : require("./../../../assets/imgs/default-avatar.jpg")
                }
                style={styles.avatar}
              />
              <Text numberOfLines={1} style={styles.displayName}>
                {conversation.displayName}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerSection}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                handleCall()
              }}
            >
              <FontAwesomeIcon color={color.primary} icon={faPhoneAlt} size={18} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleVideoCall()
              }}
            >
              <FontAwesomeIcon color={color.primary} icon={faVideo} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dummyConversation}
            renderItem={({ item, index }) => {
              if (item.sender === "1") {
                return (
                  <>
                    {dummyConversation[index - 1] ? (
                      <MessageTime
                        time={item.createdAt}
                        preTime={dummyConversation[index - 1].createdAt}
                      />
                    ) : (
                      <MessageTime time={item.createdAt} />
                    )}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: Dimensions.get("window").width * 0.2,
                        marginTop:
                          dummyConversation[index - 1] &&
                          dummyConversation[index - 1].sender === item.sender
                            ? 3
                            : 10,
                      }}
                    >
                      <Image
                        source={
                          conversation.avatar
                            ? { uri: conversation.avatar }
                            : require("./../../../assets/imgs/default-avatar.jpg")
                        }
                        style={{ height: 30, width: 30, borderRadius: 15 }}
                      />
                      <View
                        style={{
                          marginLeft: 10,
                          backgroundColor: "#EFEFEF",
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          borderRadius: 20,
                        }}
                      >
                        <Text>{item.content}</Text>
                      </View>
                    </View>
                  </>
                )
              } else {
                return (
                  <>
                    {dummyConversation[index - 1] ? (
                      <MessageTime
                        time={item.createdAt}
                        preTime={dummyConversation[index - 1].createdAt}
                      />
                    ) : (
                      <MessageTime time={item.createdAt} />
                    )}
                    <View style={{ flexDirection: "row-reverse" }}>
                      <View
                        style={{
                          backgroundColor: color.primary,
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          borderRadius: 20,
                          marginLeft: Dimensions.get("window").width * 0.2,
                          marginTop:
                            dummyConversation[index - 1] &&
                            dummyConversation[index - 1].sender === item.sender
                              ? 3
                              : 10,
                        }}
                      >
                        <Text style={{ color: "#FFF" }}>{item.content}</Text>
                      </View>
                    </View>
                  </>
                )
              }
            }}
            keyExtractor={(message) => message._id}
          />
        </View>
        <View style={styles.footer}>
          {!isInputFocused && (
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() => {
                handleCamera()
              }}
            >
              <FontAwesomeIcon color={color.primary} icon={faCamera} size={22} />
            </TouchableOpacity>
          )}
          {!isInputFocused && (
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() => {
                handleImage()
              }}
            >
              <FontAwesomeIcon color={color.primary} icon={faImage} size={22} />
            </TouchableOpacity>
          )}
          <View style={{ flex: 1, paddingVertical: 10 }}>
            <TextInput
              style={styles.input}
              value={messageText}
              onChangeText={setMessageText}
              placeholder={isInputFocused ? "Type a message..." : "Aa"}
              placeholderTextColor={"grey"}
              underlineColorAndroid="transparent"
              onBlur={() => {
                setInputFocused(false)
              }}
              onFocus={() => {
                setInputFocused(true)
              }}
            />
          </View>
          <TouchableOpacity
            style={{ marginLeft: 20 }}
            onPress={() => {
              handleSendMessage()
            }}
          >
            <FontAwesomeIcon color={color.primary} icon={faPaperPlane} size={22} />
          </TouchableOpacity>
        </View>
      </Screen>
    )
  )
})
