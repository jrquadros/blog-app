import React from 'react'
import styled from 'styled-components'
import { Separator } from '../components/Separator'

interface IPostCardProps {
  title: string
  subtitle?: string
  createdAt: string
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  min-height: 15rem;
  width: 100%;
  align-self: stretch;
  padding: 20px 40px;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.span`
  color: #555;
  font-size: 1.4rem;
`

const Subtitle = styled.p`
  font-size: 1rem;
`

const CreatedAt = styled.span`
  font-size: 0.8rem;
  @media (max-width: 800px) {
    margin-top: 0.5rem;
  }
`

const Cover = styled.img`
  border-radius: 5px;
  max-width: 100%;
  width: 400px;
  height: 300px;
  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }
`

export const PostCard = ({ title, subtitle, createdAt }: IPostCardProps) => {
  return (
    <Wrapper>
      <Container>
        <Container>
          <Title>{title}</Title>
          <Separator size={15} />
          <Subtitle>{subtitle}</Subtitle>
        </Container>
        <CreatedAt>{new Date(createdAt).toLocaleDateString()}</CreatedAt>
      </Container>
      <Cover src={`https://picsum.photos/400/300?blur?random=${Math.random()}`} />
    </Wrapper>
  )
}
