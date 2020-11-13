import React, {useState} from 'react'
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, Image, FlatList} from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { color } from "../../theme"
import { scaledSize } from "../../theme/sizing"

const ROOT: ViewStyle = {
   position: 'relative',
   width: 375,
   height: 812,
   backgroundColor: '#FFFFFF',
}

const styles = StyleSheet.create({
   messageHeader:{
      position: 'absolute',
      width: 375,
      height: 97,
      left: 0,
      top: 0,
      backgroundColor: '#FCFCFC'
      // position: 'absolute',
      // left: 0,
      // right: 0,
      // top: 0,
      // bottom: 0,
      // backgroundColor: '#FCFCFC',
   },
   messageText:{
      position: 'absolute',
      left: 150,
      top: 50,
      bottom: 24,
      fontFamily: 'Proxima Nova',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 18,
      lineHeight: 22,
      textAlign: 'center',
      color: '#000000',
   },
   messageImage:{
      position: 'absolute',
      left: 16,
      bottom: 24,
   },
   messageContainer:{
      position: 'absolute',
      width: 350,
      height: 597,
      left: 16,
      top: 107,
   },
   messageUser:{
      position: 'relative',
      width: 375,
      height: 75,
      borderBottomWidth:2,
      borderBottomColor:"#E2E2E2"
   },
   messageUserTextName:{
      position: 'absolute',
      left: 71,
      top:5,
      fontFamily: 'Geometria',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 20,
      color: '#000000',
   },
   messageUserAvatar:{
      position: 'absolute',
      width: 55,
      height: 55,
      left:6,
      top:2,
      borderRadius: 50,
   },
   messageUserText:{
      position: 'absolute',
      left:71,
      top:29,
      fontFamily: 'Geometria',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 18,
      color: '#000000',
   },
   messageUserLastTime:{
      position: 'absolute',
      left: 309,
      top: 7,
      fontFamily: 'Proxima Nova',
      fontSize: 14,
      lineHeight: 17,
      textAlign: 'center',
   },
   StatusView:{
      position: 'absolute',
      width: 22,
      height: 22,
      top: 28,
      left: 312,
      borderRadius:20,
      backgroundColor: '#1EBE71',
   },
   StatusContent:{
      position: 'absolute',
      left: 7,
      top: 2,
      fontFamily: 'Geometria',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 18,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: '#FFFFFF',
   }
})

// Test
var users = [
   {
      id:1,
      name:"agdhagd",
      avatar:"./people.jpg",
      message:'hdjshdas',
      status:2,
      last_time:'11:09'
   },
   {
      id:2,
      name:"agdassdhagd",
      avatar:"./people.jpg",
      message:'hdjsdsdas',
      status:3,
      last_time:'11:12'
   }
]

function MessageUser(props){
   const {user} = props
   return(
      <View style = {styles.messageUser}>
         <Text style = {styles.messageUserTextName}>{user.name}</Text>
         <Image source = {{uri:user.avatar}}  style = {styles.messageUserAvatar}/>
         <Text style= {styles.messageUserText}>{user.message}</Text>
         <Text style = {styles.messageUserLastTime}>{user.last_time}</Text>
         <View style = {styles.StatusView}>
            <Text style = {styles.StatusContent}>{user.status}</Text>
         </View>
      </View>
   );
}

export const MessageScreen = observer(function MessageScreen() {
   return (
      <Screen style={ROOT} preset="scroll">
         <FontAwesomeIcon icon={faComments} color={color.primary} size={scaledSize(80)} />
         <View style = {styles.messageHeader}>
            <Text style = {styles.messageText}>Message</Text>
            <Image source = {require("./camera.png")} style = {styles.messageImage}/>
         </View>
         <View style={styles.messageContainer}>
            <FlatList
               data = {users}
               renderItem = {({ item }) => <MessageUser user={item}/>}
               keyExtractor = {item=> `${item.id}`}
            />
         </View>
      </Screen>
   )
})