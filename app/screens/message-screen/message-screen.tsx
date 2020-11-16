import React, {useState} from 'react'
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, Image, FlatList, TouchableOpacity, Alert, Animated} from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faCamera, faComment, faThumbtack, faEllipsisH, faCheck } from "@fortawesome/free-solid-svg-icons"
import { color } from "../../theme"
import { scaledSize } from "../../theme/sizing"
import { State } from 'react-powerplug'
import { renderOnly } from '@storybook/addon-storyshots'
import { createInstanceofPredicate } from 'mobx/lib/internal'
import { construct } from 'ramda'
import { setInternetCredentials } from 'react-native-keychain'

const ROOT: ViewStyle = {
   position: 'relative',
   flex: 1,
   alignItems: "center",
   justifyContent: "center",
   backgroundColor: '#FFFFFF',
}

const styles = StyleSheet.create({
   messageHeader:{
      position: 'absolute',
      width: "100%",
      height: 97,
      left: 0,
      top: 0,
      backgroundColor: '#FCFCFC',
      alignItems: "center",
      justifyContent: "center",
   },
   messageText:{
      position: 'absolute',
      fontFamily: 'Proxima Nova',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 18,
      lineHeight: 22,
      textAlign: 'center',
      justifyContent:"center",
      color: '#000000',
      
   },
   messageImage:{
      position: 'absolute',
      left: 16,
      bottom: 32,
   },
   messageContainer:{
      position: 'absolute',
      height: 597,
      top: 107,
   },
   messageUser:{
      position: 'relative',
      width: 375,
      height: 77,
      // borderWidth:2,
      borderBottomWidth:2,
      borderBottomColor:"#E2E2E2"
   },
   messageUserTextName:{
      position: 'absolute',
      left: 71,
      top:12,
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
      top:8,
      borderRadius: 50,
   },
   messageUserText:{
      position: 'absolute',
      left:71,
      top:39,
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
      top: 12,
      fontFamily: 'Proxima Nova',
      fontSize: 14,
      lineHeight: 17,
      textAlign: 'center',
   },
   statusView:{
      position: 'absolute',
      width: 22,
      height: 22,
      top: 33,
      left: 315,
      borderRadius:20,
      backgroundColor: '#1EBE71',
      justifyContent:"center",
      alignItems: 'center',
   },
   statusViewSend:{
      position: 'absolute',
      width:19,
      height:11,
      top:40,
      left:317,
   },
   statusContent:{
      position: 'absolute',
      fontFamily: 'Geometria',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 18,
      color: '#FFFFFF',
   },
   messageOption:{
      position: 'relative',
      height: 77,
      width:"100%",
      borderBottomWidth:2,
      borderBottomColor:"#E2E2E2"
   },
   messageUserOptionLastTime:{
      position: 'absolute',
      right: 293,
      top: 17,
      fontFamily: 'Proxima Nova',
      fontSize: 14,
      lineHeight: 17,
      textAlign: 'center',
   },
   statusOptionView:{
      position: 'absolute',
      width: 22,
      height: 22,
      top: 38,
      right: 298,
      borderRadius:20,
      justifyContent:"center",
      alignItems: 'center',
      backgroundColor: '#1EBE71',
   },
   optionView:{
      position: 'absolute',
      height:77,
      width:261,
      right: 0,
      top:0,
      backgroundColor: '#1EBE71',
   },
   unReadView:{
      position: 'absolute',
      height:52,
      width:52,
      top:14,
      left:21,
   },
   iconUnRead:{
      top:1,
      left:13
   },
   textUnRead:{
      position: 'absolute',
      top:31,
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 21,
      textAlign: 'center',
      color: '#FFFFFF', 
   },
   gimView:{
      position: 'absolute',
      height:52,
      width:25,
      top:14,
      left:122,
   },
   textGim:{
      position: 'absolute',
      top:31,
      left:4,
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 21,
      textAlign: 'center',
      color: '#FFFFFF',
   },
   moreView:{
      position: 'absolute',
      height:42,
      width:35,
      left:207,
      top:20,
   },
   moreText:{
      position: 'absolute',
      top:21,
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 21,
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
      status:3,
      last_time:'11:09',
   },
   {
      id:2,
      name:"agdassdhagd",
      avatar:"./people.jpg",
      message:'hdjsdsdas',
      status:0,
      last_time:'11:12',
   }
]

function MessageUser(props){
   const {user} = props
   const [isShowing, setIsShowing] = useState(false)
   return(
      <TouchableOpacity activeOpacity={0.2} 
                        onLongPress = {() => setIsShowing(!isShowing)} 
                        onPress = {HandelTouch}>
         <View style = {styles.messageUser}>
            <Text style = {styles.messageUserTextName}>{user.name}</Text>
            <Image source = {{uri:user.avatar}}  style = {styles.messageUserAvatar}/>
            <Text style= {styles.messageUserText}>{user.message}</Text>
            <Text style = {styles.messageUserLastTime}>{user.last_time}</Text>
            <StatusMessage status = {user.status}/>
         </View>
         <TouchOption option = {isShowing} user = {user}/>
      </TouchableOpacity>
   );
}

function TouchOption(prop){
   const user = prop.user
   if(prop.option === false) {
      return(<View></View>)
   }
   else
      return(
         <View style = {styles.messageUser}>
            <Text style = {styles.messageUserOptionLastTime}>{user.last_time}</Text>
            <View style = {styles.statusOptionView}>
               <Text style = {styles.statusContent}>{user.status}</Text>
            </View>
            <View style = {styles.optionView}>
               <TouchableOpacity onPress = {() => {Alert.alert("ajhdasjk")}}>
                  <View style = {styles.unReadView}>
                     <FontAwesomeIcon icon={faComment} color = {'#FFFFFF'} style = {styles.iconUnRead} size={scaledSize(25)}/>
                     <Text style = {styles.textUnRead}>Unread</Text>
                  </View>
               </TouchableOpacity>
               <View style = {{position: 'absolute', backgroundColor: '#4DC98D', height:37, width:1, top:22, left:95}}/>
               <View style = {styles.gimView}>
                  <FontAwesomeIcon icon={faThumbtack} color = {'#FFFFFF'}  size={scaledSize(25)}/>
                  <Text style = {styles.textGim}>Pin</Text>
               </View>
               <View style = {{position: 'absolute', backgroundColor: '#4DC98D', height:37, width:1, top:22, left:178}}/>
               <View style={styles.moreView}>
                  <FontAwesomeIcon icon={faEllipsisH} color = {'#FFFFFF'} style = {{left : 3}}  size={scaledSize(25)}/>
                  <Text style = {styles.moreText}>More</Text>
               </View>
            </View>
         </View>
      )
}

function HandelTouch(){
   // Alert.alert("sjgjg")
}

function StatusMessage(prop){
   var status = prop.status
   if(status > 0){
      return (
         <View style = {styles.statusView}>
            <Text style = {styles.statusContent}>{status}</Text>
         </View>
      )
   }
   else {
      return(
         <View style = {styles.statusViewSend}>
            <FontAwesomeIcon icon={faCheck} color = {'#1E98BE'} style = {{top:0}}  size={scaledSize(11)}/>
            <FontAwesomeIcon icon={faCheck} color = {'#1E98BE'} style = {{bottom:0,left:8,top:-11}}  size={scaledSize(11)}/>
         </View>
      )
   }
}

export const MessageScreen = observer(function MessageScreen() {
   return (
      <Screen style={ROOT} preset="scroll">
         <View style = {styles.messageHeader}>
            <Text style = {styles.messageText}>Message</Text>
            <FontAwesomeIcon icon={faCamera} style = {styles.messageImage} size={scaledSize(25)}/>
         </View>
         <View style={styles.messageContainer}>
            <FlatList
               data = {users}
               renderItem = {({ item }) => <MessageUser user={item} />}
               keyExtractor = {item=> `${item.id}`}
            />
         </View>
      </Screen>
   )
})