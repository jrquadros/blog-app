import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn } from './screens/SignIn'

type RootStackParamList = {
  SignIn: undefined
}

const RootStack = createStackNavigator<RootStackParamList>()

export const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="SignIn">
        <RootStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
