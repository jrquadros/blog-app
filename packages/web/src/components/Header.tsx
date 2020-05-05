import React from 'react'
import styled from 'styled-components'

interface IHeaderProps {
  title?: string
}

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  background-color: #fff;
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #f5f5f5;
  justify-content: center;
`

const Title = styled.span`
  font-size: 1.2rem;
  color: #555;
  font-weight: 500;
`

export const Header = ({ title }: IHeaderProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  )
}
