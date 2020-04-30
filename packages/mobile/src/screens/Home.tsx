import React from 'react'
import styled from 'styled-components/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../App'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>

type Props = {
  navigation: HomeScreenNavigationProp
  route: HomeScreenRouteProp
  token?: string
}

const Wrapper = styled.ScrollView`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 20px;
  padding-top: 40px;
`

const Text = styled.Text``

export const Home = ({ navigation, route }: Props) => {
  const token = route.params.token

  return (
    <Wrapper>
      <Text>HOME SCREEN</Text>
      <Text>TOKEN: {token}</Text>
    </Wrapper>
  )
}
