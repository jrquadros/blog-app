import React from 'react'
import styled from 'styled-components'

interface IHeaderProps {
  title?: string
  items?: IItem[]
}

interface IItem {
  onClick?: () => void
  label: string
}

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #f5f5f5;
`

const Title = styled.span`
  font-size: 1.2rem;
  color: #555;
  font-weight: 500;
  align-self: center;
`

const Item = styled.span`
  font-size: 1rem;
  color: #555;
  font-weight: 500;
  justify-self: flex-start;
  :hover {
    cursor: pointer;
  }
`

export const Header = ({ title, items }: IHeaderProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {items?.map((item) => (
        <Item onClick={item.onClick}>{item.label}</Item>
      ))}
    </Wrapper>
  )
}
