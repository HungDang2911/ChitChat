import React from "react"

import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { ADD_FRIEND, FRIENDS } from "../constants"
import { AddFriendScreen, ListFriendScreen } from "../screens"

export type PrimaryParamList = {
  [FRIENDS]: undefined
  [ADD_FRIEND]: undefined
}

// Documentation: https://github.com/software-mansion/react-native-screens/tree/master/native-stack
const Stack = createNativeStackNavigator<PrimaryParamList>()

export function MessagesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
      initialRouteName={FRIENDS}
    >
      <Stack.Screen name={FRIENDS} component={ListFriendScreen} />
      <Stack.Screen name={ADD_FRIEND} component={AddFriendScreen} />
    </Stack.Navigator>
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
const exitRoutes = [FRIENDS]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
