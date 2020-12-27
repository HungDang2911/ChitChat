import React, { useState } from "react"
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
  TextInput,
} from "react-native"
import { Button, Screen, Text, TextField, Checkbox } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { scaledSize } from "../../theme/sizing"
import ImagePicker from "react-native-image-crop-picker"
import { Value } from "react-powerplug"
import { cloudinaryUpload } from "../../services/api/cloudinaryAPI"
import { editProfile } from "../../services/api/usersAPI"

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
  alignItems: "center",
}

const styles = StyleSheet.create({
  checkboxFemaleSex: {
    left: 160,
    position: "absolute",
    top: 15,
  },
  checkboxMaleSex: {
    left: 80,
    position: "absolute",
    top: 15,
  },
  containerView: {
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  emailView: {
    alignItems: "center",
    backgroundColor: color.backgroundSearch,
    borderRadius: 15,
    height: 60,
    justifyContent: "center",
    marginBottom: 5,
    width: "95%",
  },
  iconCameraView: {
    alignItems: "center",
    backgroundColor: color.backgroundSearch,
    borderRadius: 25,
    height: 45,
    justifyContent: "center",
    position: "absolute",
    right: 15,
    top: 310,
    width: 45,
  },
  imageAvatar: {
    height: 375,
    top: 0,
    width: "100%",
  },
  nameView: {
    alignItems: "center",
    backgroundColor: color.backgroundSearch,
    borderRadius: 15,
    height: 60,
    justifyContent: "center",
    marginBottom: 5,
    width: "95%",
  },
  saveButton: {
    borderRadius: 24,
    height: 48,
    marginBottom: 5,
    width: 274,
  },
  saveButtonText: {
    fontSize: 18,
  },
  scrollView: {
    width: "100%",
  },
  sexView: {
    alignItems: "center",
    backgroundColor: color.backgroundSearch,
    borderRadius: 15,
    height: 60,
    justifyContent: "center",
    marginBottom: 5,
    width: "95%",
  },
  titleView: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    left: 16,
    position: "absolute",
  },
  userTextName: {
    color: color.primary,
    // fontFamily: "Roboto",
    fontSize: 24,
    // fontStyle: "normal",
    // fontWeight: 'normal',
    marginBottom: 10,
    marginTop: 10,
  },
  value: {
    borderBottomWidth: 1,
    borderColor: color.primary,
    fontSize: 16,
    fontStyle: "normal",
    height: 40,
    left: 16,
    width: 270,
  },
})

export const EditProfileScreen = observer(function EditProfileScreen() {
  const { userStore } = useStores()

  const [pickedImage, setPickedImage] = useState(null)
  const [avatarSrc, setAvatarSrc] = useState(userStore.avatar)

  const [name, setName] = useState(userStore.fullName)
  const [email, setEmail] = useState(userStore.email)

  async function handleSave() {
    let newUserInfo

    try {
      if (pickedImage) {
        const file = `data:${pickedImage.mime};base64,${pickedImage.data}`
        const uploadedImageUrl = await cloudinaryUpload(file)
        newUserInfo = {
          fullName: name,
          email,
          avatar: uploadedImageUrl,
        }
      } else {
        newUserInfo = {
          fullName: name,
          email,
        }
      }

      console.log(newUserInfo)

      await editProfile(newUserInfo)
      userStore.editProfile(newUserInfo)

      Alert.alert("New profile saved")
    } catch (err) {
      Alert.alert("Upload user profile failed")
    }
  }

  function handleSourceImage() {
    ImagePicker.openPicker({
      width: 1080,
      height: 1080,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      setPickedImage(image)
      setAvatarSrc(image.path)
    })
  }

  return (
    <Screen style={ROOT} preset="scroll">
      <ScrollView style={styles.scrollView}>
        <View style={styles.containerView}>
          <Image
            source={
              avatarSrc ? { uri: avatarSrc } : require("../../../assets/imgs/default-avatar.jpg")
            }
            style={styles.imageAvatar}
          />
          <TouchableOpacity style={styles.iconCameraView} onPress={handleSourceImage}>
            <FontAwesomeIcon icon={faCamera} size={scaledSize(20)} />
          </TouchableOpacity>
          <Text style={styles.userTextName}>{userStore.username}</Text>
          <View style={styles.nameView}>
            <Text style={styles.titleView}>Name</Text>
            {/* <Text style = {styles.value}>{user.name}</Text> */}
            <TextInput style={styles.value} value={name} onChangeText={setName} />
          </View>
          <View style={styles.emailView}>
            <Text style={styles.titleView}>Email</Text>
            <TextInput
              style={styles.value}
              textContentType="emailAddress"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <Button
            style={styles.saveButton}
            onPress={handleSave}
            textStyle={styles.saveButtonText}
            text="Save"
          />
        </View>
      </ScrollView>
    </Screen>
  )
})
