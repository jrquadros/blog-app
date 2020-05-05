import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { PostCard } from '../components/PostCard'
import { AddPostButton } from '../components/AddPostButton'
import { Ipost, Api } from '../services/Api'
import { Logout } from '../services/Auth'
import { useHistory } from 'react-router-dom'

const Wrapper = styled.div``

const Container = styled.div`
  padding: 5rem 1rem;
  max-width: 1200px;
  margin: auto;
`

export const Home = () => {
  const [posts, setPosts] = useState<Array<Ipost> | undefined>([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    const token = await localStorage.getItem('token')
    const response = await Api.get('/posts', {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const posts = response.data
    setPosts(posts)
  }

  const history = useHistory()

  const handleLogoutClick = () => {
    Logout()
    history.replace('/login')
  }

  return (
    <Wrapper>
      <Header title={'Home'} items={[{ label: 'Logout', onClick: handleLogoutClick }]} />
      <Container>
        {posts?.map((post) => (
          <PostCard
            title={post.title}
            subtitle={post.description}
            createdAt={post.createdAt}
            key={post._id}
          />
        ))}
        <AddPostButton onClick={() => history.push('/create')} />
      </Container>
    </Wrapper>
  )
}
