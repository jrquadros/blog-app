import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-community/async-storage'

import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { PostCard } from '../components/PostCard'
import { Header } from '../components/Header'
import { RootStackParamList } from '../App'
import { Api } from '../services/Api'
import { AxiosResponse } from 'axios'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>

type Props = {
  navigation: HomeScreenNavigationProp
  route: HomeScreenRouteProp
  token?: string
}

interface Ipost {
  _id: string
  title: string
  author: string
  createdAt: string
  description: string
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
`

const ContentContainer = styled.ScrollView`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 20px;
`

export const Home = ({ navigation, route }: Props) => {
  const [posts, setPosts] = useState<Array<Ipost>>()

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    try {
      const token = await AsyncStorage.getItem('@BlogApp:token', (err, result) => {})
      const response: AxiosResponse<Array<Ipost>> = await Api.get('/posts', {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })
      const posts = response.data

      setPosts(posts)
    } catch (error) {}
  }

  return (
    <Wrapper>
      <Header title={'Posts'} />
      <ContentContainer>
        {posts?.map((post) => (
          <PostCard
            key={post._id}
            createdAt={post.createdAt}
            title={post.title}
            subtitle={post.description}
          />
        ))}
      </ContentContainer>
    </Wrapper>
  )
}
