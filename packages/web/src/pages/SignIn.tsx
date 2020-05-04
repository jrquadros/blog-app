import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Separator } from '../components/Separator'
import { Center } from '../components/Center'
import { Link } from '../components/Link'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
`

export const SignIn = () => {
  return (
    <Wrapper>
      <Header title={'SignIn'} />
      <Center>
        <LoginFormContainer>
          <Input type={'text'} placeholder={'Username'} />
          <Separator size={5} />
          <Input type={'password'} placeholder={'Password'} />
          <Separator size={10} />
          <Button>Login</Button>
          <Separator size={18} />
          <Link to={'register'}>Register</Link>
        </LoginFormContainer>
      </Center>
    </Wrapper>
  )
}
