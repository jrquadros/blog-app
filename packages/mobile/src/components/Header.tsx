import React from 'react'
import { Appbar } from 'react-native-paper'
import styled from 'styled-components/native'

interface IHeaderProps {
  title: string
}

const AppBar = styled(Appbar.Header)`
  background-color: #ff595d;
`

const Content = styled(Appbar.Content)`
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
`

export const Header = ({ title }: IHeaderProps) => {
  return (
    <AppBar>
      <Content title={title}></Content>
    </AppBar>
  )
}
