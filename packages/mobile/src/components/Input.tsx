import React from 'react'
import styled from 'styled-components/native'

interface IInputProps {
  placeholder?: string
  value?: string
  secureTextEntry?: boolean
  autoCorrect?: boolean
  onChangeText?: (text: string) => void
}

const StyledInput = styled.TextInput`
  padding: 15px;
  background-color: #fff;
  align-self: stretch;
  margin-bottom: 5px;
  font-size: 14px;
`
const Container = styled.View``

export const Input = ({ placeholder, secureTextEntry, value, onChangeText }: IInputProps) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder}
        secyreTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </Container>
  )
}
