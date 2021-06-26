import { rgba } from 'polished'
import styled from 'styled-components'

export const Content = styled.header`
  width: 100%;
  height: 95vh;
  display: flex;
  transition: background-color 0.4s;
  background-color: ${({ theme }) => rgba(theme.colors.bannerProject, 0.4)};

  .scroll-to-anchor {
    position: absolute;
    bottom: 4rem;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const LogoWrapper = styled.div`
  text-align: center;
  svg,
  img {
    height: 180px;
    width: auto;
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-align: center;
`

export const Description = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.description};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
`
