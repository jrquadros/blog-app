import React, { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../App'
import styled from 'styled-components/native'
import { Button } from '../components/Button'
import { Image } from '../components/Image'
import { TouchableText } from '../components/TouchableText'
import { Input } from '../components/Input'

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
  const handleSendPress = () => {
    //send
  }

  return (
    <Wrapper contentContainerStype={{ flex: 1 }}>
      <Center>
        <Image source={womanImage} style={{ aspectRatio: 0.5 }} resizeMode="contain" />
      </Center>
      <FormContainer>
        <Input placeholder={'Email'} />
        <Input placeholder={'Username'} />
        <Input placeholder={'Password'} secureTextEntry={true} />
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
