import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 100px;

  .swiper-wrapper {
    display: flex;
  }

  .swiper-slide {
    width: auto !important;
  }
`

export const CardBox = styled.div`
  height: 240px;
  width: 220px;
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: ${({ theme }) => theme.shapes.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export const Label = styled.h4`
  font-size: ${({ theme }) => theme.typography.sizes.md};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.typography.weight.black};
  color: ${({ theme }) => theme.colors.description};
`

export const Count = styled.h4`
  margin-top: 12px;
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
`
