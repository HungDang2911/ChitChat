/* eslint-disable react/display-name */
/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import { faAddressBook, faComments, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React, { useEffect } from "react"

import { FRIENDS, MESSAGES, PROFILE_USER } from "../constants"
import { AddFriendScreen, ProfileUserScreen } from "../screens"
import ListFriendScreen from "../screens/list-friend-screen/list-friend-screen"
import { MessageScreen } from "../screens/message-screen/message-screen"
import { initiateSocket } from "../services/socket/socket"
import { color } from "../theme"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  [MESSAGES]: undefined
  [PROFILE_USER]: undefined
  [FRIENDS]: undefined
}

// Documentation: https://github.com/software-mansion/react-native-screens/tree/master/native-stack
const Tab = createBottomTabNavigator<PrimaryParamList>()

export function PrimaryNavigator() {
  useEffect(() => {
    initiateSocket([])
  }, [])

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon

          switch (route.name) {
            case MESSAGES:
              icon = faComments
              break
            case FRIENDS:
              icon = faAddressBook
              break
            case PROFILE_USER:
              icon = faUserCircle
              break
          }

          return <FontAwesomeIcon icon={icon} color={color} size={size} />
        },
      })}
      tabBarOptions={{ activeTintColor: color.primary, inactiveTintColor: color.palette.grey }}
    >
      <Tab.Screen name={MESSAGES} component={MessageScreen} />
      <Tab.Screen name={FRIENDS} component={AddFriendScreen} />
      <Tab.Screen name={PROFILE_USER} component={ProfileUserScreen} />
    </Tab.Navigator>
  )
}
/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = [MESSAGES]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
