import React from 'react'
import styled from 'styled-components'
import { PencilAlt } from '@styled-icons/fa-solid/PencilAlt'

interface IAddPostButton {
  onClick: () => void
}

const PencilIcon = styled(PencilAlt)`
  width: 1rem;
  color: #fff;
`

const Wrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 1rem;
  border-radius: 50%;
  position: fixed;
  background-color: tomato;

  :hover {
    cursor: pointer;
  }
`

export const AddPostButton = ({ onClick }: IAddPostButton) => {
  return (
    <Wrapper onClick={onClick}>
      <PencilIcon />
    </Wrapper>
  )
}
