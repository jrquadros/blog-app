import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Image } from '../components/Image'
import { TouchableText } from '../components/TouchableText'
import { NativeSyntheticEvent } from 'react-native'

import { Auth } from '../services/Auth'
import { AsyncStorage } from 'react-native'
import { Enviroment } from '../config/Enviroment'

const womanImage = require('../assets/woman.png')

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
  flex: 0.5;
  margin-top: 10px;
  align-items: center;
`

export const SignIn = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<Error | null>(null)

  const handleSignInPress = async () => {
    if (username.length === 0 || password.length === 0) {
      setError(Error('fill the required fields'))
    }

    try {
      const result = await Auth.post(
        '/login',
        JSON.stringify({ username: username, password: password }, ['username', 'password']),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      const { token } = result.data

      await AsyncStorage.setItem('@BlogApp:token', token)
    } catch (error) {}
  }

  const handleSignUpPres = () => {}

  const handleEmailChange = (value: string) => {
    setUsername(value)
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
  }

  return (
    <Wrapper>
      <Center>
        <Image source={womanImage} style={{ aspectRatio: 0.5 }} />
      </Center>
      <FormContainer>
        <Input
          placeholder={'Username'}
          value={username}
          onChangeText={(value) => handleEmailChange(value)}
          autoCorrect={false}
        />
        <Input
          placeholder={'Password'}
          value={password}
          onChangeText={(value) => handlePasswordChange(value)}
          secureTextEntry={true}
          autoCorrect={false}
        />
        <Button text={'LogIn'} onPress={handleSignInPress} />
      </FormContainer>
      <SignUpContainer>
        <TouchableText text={'SignUp'} onPress={() => {}} />
      </SignUpContainer>
    </Wrapper>
  )
}
