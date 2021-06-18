import Image from 'next/image'
import * as S from './styles'

type ImageProps = {
  url: string
  alt: string
}

interface BannerProps {
  banner: {
    title: string
    description: string
    image: ImageProps
  }
}

export const Banner = ({ banner }: BannerProps) => {
  return (
    <S.Container>
      <S.BannerTitle>{banner.title}</S.BannerTitle>
      <S.BannerDescription>{banner.description}</S.BannerDescription>
      <S.BannerImage>
        <Image
          alt={banner.image.alt}
          src={banner.image.url}
          objectFit="cover"
          width={1400}
          height={660}
        />
      </S.BannerImage>
    </S.Container>
  )
}
