import styled from 'styled-components'

export const Button = styled.button`
  padding: 1rem;
  color: #fff;
  background-color: tomato;
  transition: 0.3s opacity;
  border: none;
  border-radius: 0.3rem;
  font-size: 1rem;
  align-self: stretch;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
