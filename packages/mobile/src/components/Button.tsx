import React from 'react'
import styled from 'styled-components/native'
import { GestureResponderEvent } from 'react-native'

interface IButtonProps {
  text: string
  onPress: (event: GestureResponderEvent) => any
}

const ButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  text-align: center;
`

const ButtonContainer = styled.TouchableOpacity`
  margin-top: 5px;
  padding: 18px;
  align-self: stretch;
  border-radius: 5px;
  background-color: #ff595d;
`

export const Button = ({ text, onPress }: IButtonProps) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{text}</ButtonText>
  </ButtonContainer>
)
