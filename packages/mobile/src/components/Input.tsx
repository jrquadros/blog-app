import React from 'react'
import styled from 'styled-components/native'
import { TextInput } from 'react-native-paper'
import { Text } from 'react-native'

interface IInputProps {
  placeholder?: string
  value?: string
  secureTextEntry?: boolean
  autoCorrect?: boolean
  onChangeText?: (text: string) => void
  errorMessage?: string
}

const Container = styled.View``

const StyledInput = styled.TextInput`
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
`

export const Input = ({ placeholder, secureTextEntry, value, onChangeText }: IInputProps) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        mode={'flat'}
        secureTextEntry={secureTextEntry}
      />
    </Container>
  )
}
