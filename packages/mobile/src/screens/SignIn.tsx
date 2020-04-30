import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Image } from '../components/Image'
import { TouchableText } from '../components/TouchableText'
import AsyncStorage from '@react-native-community/async-storage'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { Auth } from '../services/Auth'
import { RootStackParamList } from '../App'

import { AxiosResponse } from 'axios'

const womanImage = require('../assets/woman.png')

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>

type SignInScreenRouteProp = RouteProp<RootStackParamList, 'SignIn'>

type Props = {
  navigation: SignInScreenNavigationProp
  route: SignInScreenRouteProp
}

interface IResponse {
  token: string
}

const Wrapper = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 20px;
  padding-top: 40px;
`

const FormContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`

const Center = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`

const SignUpContainer = styled.View`
  flex: 0.3;
  margin-top: 10px;
  align-items: center;
`

export const SignIn = ({ navigation, route }: Props) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSignInPress = async () => {
    if (username.length === 0 || password.length === 0) {
      setError('Required fields')
    }

    try {
      const result: AxiosResponse<IResponse> = await Auth.post(
        '/login',
        JSON.stringify({ username: username, password: password }, ['username', 'password']),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      const token = result.data.token

      await AsyncStorage.setItem('@BlogApp:token', token)

      navigation.navigate('Home', { token })
    } catch (error) {}
  }

  const handleSignUpPress = () => {
    navigation.navigate('Register')
  }

  const handleEmailChange = (value: string) => {
    setUsername(value)
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
  }

  return (
    <Wrapper>
      <Center>
        <Image source={womanImage} style={{ aspectRatio: 0.5 }} resizeMode="contain" />
      </Center>
      <FormContainer>
        <Input
          placeholder={'Username'}
          value={username}
          onChangeText={(value: string) => handleEmailChange(value)}
          autoCorrect={false}
        />
        <Input
          placeholder={'Password'}
          value={password}
          onChangeText={(value: string) => handlePasswordChange(value)}
          secureTextEntry={true}
          autoCorrect={false}
        />
        <Button text={'LogIn'} onPress={handleSignInPress} />
      </FormContainer>
      <SignUpContainer>
        <TouchableText text={'SignUp'} onPress={handleSignUpPress} />
      </SignUpContainer>
    </Wrapper>
  )
}
