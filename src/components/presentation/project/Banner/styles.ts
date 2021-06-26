import styled from 'styled-components'

export const BannerWrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem 0;
  border-radius: 1rem;
  margin-top: 2rem;
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
  font-weight: ${({ theme }) => theme.typography.weight.xBold};
  text-align: center;
`

export const Description = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.description};
`
