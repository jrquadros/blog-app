import styled from 'styled-components'

interface IInputProps {
  type: 'email' | 'text' | 'password'
}

export const Input = styled.input<IInputProps>`
  background-color: #fff;
  border: none;
  border-radius: 0.3rem;
  font-size: 1rem;
  padding: 0.8rem;
  align-self: stretch;
`
