import styled from 'styled-components'

export const BannerWrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4rem 0;
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
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
`

export const Description = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.description};
`
