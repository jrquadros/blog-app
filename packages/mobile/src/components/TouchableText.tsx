import React from 'react'
import { TouchableOpacity, GestureResponderEvent } from 'react-native'
import styled from 'styled-components/native'

interface ISignUpLinkProps {
  text: string
  onPress: (event: GestureResponderEvent) => any
}

const Text = styled.Text`
  font-size: 16px;
`

export const TouchableText = ({ onPress, text }: ISignUpLinkProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}
