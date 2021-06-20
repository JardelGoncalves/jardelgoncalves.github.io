import styled, { css } from 'styled-components'

const textContent = css`
  max-width: 57.0625rem;
  width: 100%;
  text-align: center;
`

export const Container = styled.section`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  ${({ theme }) => theme.breakpoints.lessThan('small')`
        margin-top: 3rem;
  `}
`

export const BannerTitle = styled.h1`
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.weight.black};
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  line-height: ${({ theme }) => theme.typography.lineHeight.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  ${textContent};

  ${({ theme }) => theme.breakpoints.lessThan('small')`
      font-size: ${theme.typography.sizes['2xl']};
  `}
`

export const BannerDescription = styled.p`
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  ${textContent};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

export const BannerImage = styled.div`
  height: 28rem;
  width: 100%;

  img {
    width: 100%;
    height: 28rem;
    object-fit: cover;
  }

  ${({ theme }) => theme.breakpoints.lessThan('small')`
      height: 19rem;

      img {
        height: 19rem;
      }
  `}
`
