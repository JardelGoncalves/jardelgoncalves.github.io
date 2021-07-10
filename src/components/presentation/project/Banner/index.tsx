import { Image } from 'interfaces/image'

import * as S from './styles'
import { ScrollTo } from '../../../core/ScrollTo/index'

interface BannerProps {
  image: Image
  title: string
  description: string
}

export const Banner = ({ title, description, image }: BannerProps) => {
  return (
    <S.Content>
      <S.BannerWrapper>
        <S.LogoWrapper>
          <img src={image.url} alt={image.alt} />
        </S.LogoWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.BannerWrapper>
      <ScrollTo anchorId="introduction" />
    </S.Content>
  )
}
