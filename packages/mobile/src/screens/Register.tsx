import React, { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../App'
import styled from 'styled-components/native'
import { Button } from '../components/Button'
import { Image } from '../components/Image'
import { TouchableText } from '../components/TouchableText'
import { Input } from '../components/Input'
import { Api } from '../services/Api'

const womanImage = require('../assets/woman.png')

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>

type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>

type Props = {
  navigation: RegisterScreenNavigationProp
  route: RegisterScreenRouteProp
}

const Wrapper = styled.ScrollView`
  flex: 1;
  padding: 40px 20px;
`

const Center = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 20px;
  height: 300px;
`

const FormContainer = styled.KeyboardAvoidingView`
  display: flex;
  flex: 1.2;
`

const GoBackContainer = styled.View`
  align-items: center;
  margin-top: 40px;
`

export const Register = ({ navigation, route }: Props) => {
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleEmailChange = (value: string) => {
    setEmail(value)
  }

  const handleUsernameChange = (value: string) => {
    setUsername(value)
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
  }

  const handleErrorChange = () => {}

  const handleSendPress = async () => {
    try {
      if (username.length === 0 || password.length === 0 || email.length === 0) {
        setError('Required fields')
      }

      const result = await Api.post(
        '/auth/register',
        JSON.stringify({ username, password, email }, ['username', 'password', 'email']),
        { headers: { 'Content-Type': 'application/json' } }
      )

      const user = result.data
      // TODO confirm screen
      navigation.navigate('SignIn')
    } catch (error) {
      setError(error.message)
      console.log(error)
    }
  }

  return (
    <Wrapper contentContainerStype={{ flex: 1 }}>
      <Center>
        <Image source={womanImage} style={{ aspectRatio: 0.5 }} resizeMode="contain" />
      </Center>
      <FormContainer>
        <Input
          placeholder={'Email'}
          value={email}
          onChangeText={(value) => handleEmailChange(value)}
        />
        <Input
          placeholder={'Username'}
          value={username}
          onChangeText={(value) => handleUsernameChange(value)}
        />
        <Input
          placeholder={'Password'}
          value={password}
          onChangeText={(value) => handlePasswordChange(value)}
          secureTextEntry={true}
        />
        <Button text={'Cadastrar'} onPress={handleSendPress} />
      </FormContainer>
      <GoBackContainer>
        <TouchableText
          text={'Voltar'}
          onPress={() => {
            navigation.goBack()
          }}
        />
      </GoBackContainer>
    </Wrapper>
  )
}
