import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Textarea } from '../components/Textarea'
import { Separator } from '../components/Separator'
import { Center } from '../components/Center'
import { Api } from '../services/Api'
import { useHistory } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const CreatePostFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
`

export const CreatePost = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [error, setError] = useState<string>('')
  const history = useHistory()

  const handleTitleChange = (value: string) => {
    setTitle(value)
  }

  const handleContentChange = (value: string) => {
    setContent(value)
  }

  const handleCreateClick = async () => {
    try {
      if (title.length === 0 || content.length === 0) {
        setError('Required fields')
      }

      Api.post(
        '/posts',
        JSON.stringify({ title, description: content }, ['title', 'description']),
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
        .then((result) => history.replace('/'))
        .catch((err) => console.log(err))
    } catch (err) {
      setError(err.message)
      console.log(err)
    }
  }

  return (
    <Wrapper>
      <Header title={'Create'} />
      <Center>
        <CreatePostFormContainer>
          <Input
            type={'text'}
            placeholder={'Title'}
            onChange={(e) => handleTitleChange(e.target.value)}
          />
          <Separator size={5} />
          <Textarea
            rows={8}
            placeholder={'Type something...'}
            onChange={(e) => handleContentChange(e.target.value)}
          />
          <Separator size={10} />
          <Button onClick={handleCreateClick}>Create</Button>
          <Separator size={18} />
        </CreatePostFormContainer>
      </Center>
    </Wrapper>
  )
}
