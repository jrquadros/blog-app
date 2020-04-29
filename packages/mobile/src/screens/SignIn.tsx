import React from 'react'
import styled from 'styled-components/native'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Image } from '../components/Image'
import { TouchableText } from '../components/TouchableText'

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
  display: flex;
  flex: 2;
  align-items: center;
  padding: 20px;
`

const SignUpContainer = styled.View`
  flex: 0.5;
  margin-top: 10px;
  align-items: center;
`

export const SignIn = () => {
  return (
    <Wrapper>
      <Center>
        <Image source={womanImage} style={{ aspectRatio: 1 / 2 }} />
      </Center>
      <FormContainer>
        <Input placeholder={'Email'} />
        <Input placeholder={'Password'} secureTextEntry={true} />
        <Button text={'LogIn'} onPress={() => {}} />
      </FormContainer>
      <SignUpContainer>
        <TouchableText text={'SignUp'} onPress={() => {}} />
      </SignUpContainer>
    </Wrapper>
  )
}
