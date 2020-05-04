import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

interface ILinkProps {
  to: string
}

export const Link = styled(RouterLink)<ILinkProps>`
  text-decoration: none;
  font-size: 1rem;
  color: #555;
`
