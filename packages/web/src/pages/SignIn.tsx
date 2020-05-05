import React, { useState } from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Separator } from '../components/Separator'
import { Center } from '../components/Center'
import { Link } from '../components/Link'
import { Login } from '../services/Auth'
import { useHistory } from 'react-router-dom'

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
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const history = useHistory()

  const handleUsernameChange = (value: string) => {
    setUsername(value)
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
  }

  const handleLoginClick = async () => {
    try {
      const token = await Login(username, password)

      if (!token) {
        setError('invalid login')
        return
      }
      console.log(token)

      await localStorage.setItem('token', token)
      history.push('/home')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Wrapper>
      <Header title={'SignIn'} />
      <Center>
        <LoginFormContainer>
          <Input
            type={'text'}
            placeholder={'Username'}
            onChange={(e) => handleUsernameChange(e.target.value)}
          />
          <Separator size={5} />
          <Input
            type={'password'}
            placeholder={'Password'}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
          <Separator size={10} />
          <Button onClick={handleLoginClick}>Login</Button>
          <Separator size={18} />
          <Link to={'register'}>Register</Link>
        </LoginFormContainer>
      </Center>
    </Wrapper>
  )
}
