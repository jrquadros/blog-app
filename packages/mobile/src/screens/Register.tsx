import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../App'

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>

type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>

type Props = {
  navigation: RegisterScreenNavigationProp
  route: RegisterScreenRouteProp
}

export const Register = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>HOME</Text>
    </View>
  )
}
