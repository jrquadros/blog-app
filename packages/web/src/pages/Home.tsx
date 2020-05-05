import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { PostCard } from '../components/PostCard'
import { Ipost, Api } from '../services/Api'

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
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const posts = response.data
    setPosts(posts)
  }

  return (
    <Wrapper>
      <Header title={'Home'} />
      <Container>
        {posts?.map((post) => (
          <PostCard
            title={post.title}
            subtitle={post.description}
            createdAt={post.createdAt}
            key={post._id}
          />
        ))}
      </Container>
    </Wrapper>
  )
}
