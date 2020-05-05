import React, { useState } from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Separator } from '../components/Separator'
import { Center } from '../components/Center'
import { Api } from '../services/Api'
import { useHistory } from 'react-router-dom'
import { Link } from '../components/Link'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
`

export const Register = () => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const history = useHistory()

  const handleEmailChange = (value: string) => {
    setEmail(value)
  }

  const handleUsernameChange = (value: string) => {
    setUsername(value)
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
  }

  const handleSubmitClick = async () => {
    try {
      if (username.length === 0 || password.length === 0 || email.length === 0) {
        setError('Required fields')
      }

      const result = await Api.post(
        '/auth/register',
        JSON.stringify({ username, password, email }, ['username', 'password', 'email']),
        { headers: { 'Content-Type': 'application/json' } }
      )

      const user = result.data
      if (user) {
        history.replace('/login')
      }
    } catch (err) {
      setError(err.message)
      console.log(err)
    }
  }

  return (
    <Wrapper>
      <Header title={'Register'} />
      <Center>
        <RegisterFormContainer>
          <Input
            type={'email'}
            placeholder={'Email'}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
          <Separator size={5} />
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
          <Button onClick={handleSubmitClick}>Submit</Button>
          <Separator size={18} />
          <Link to={'/login'}>Go back</Link>
        </RegisterFormContainer>
      </Center>
    </Wrapper>
  )
}
