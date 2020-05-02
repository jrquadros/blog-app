import React from 'react'
import styled from 'styled-components/native'
import { Card } from 'react-native-paper'

interface IPostCardProps {
  title: string
  subtitle: string
  createdAt: string
}

const PostCardContainer = styled.TouchableOpacity`
  margin-bottom: 20px;
`

const Title = styled(Card.Title)`
  padding: 10px;
`

const DateInfo = styled.Text`
  font-size: 10px;
  margin-top: 10px;
  color: #555;
`

export const PostCard = ({ title, subtitle, createdAt }: IPostCardProps) => {
  return (
    <PostCardContainer>
      <Card>
        <Title title={title} subtitle={subtitle} />
        <Card.Content>
          <Card.Cover source={{ uri: `https://picsum.photos/500/300?random=${Math.random()}` }} />
          <DateInfo>{new Date(createdAt).toLocaleDateString()}</DateInfo>
        </Card.Content>
      </Card>
    </PostCardContainer>
  )
}
