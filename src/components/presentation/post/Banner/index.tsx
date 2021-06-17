import Image from 'next/image'
import * as S from './styles'

export const Banner = () => {
  return (
    <S.Container>
      <S.BannerTitle>Node Clean Architecture Deep Dive</S.BannerTitle>
      <S.BannerDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        sollicitudin velit leo, eget efficitur neque fermentum at. Fusce sapien
        tortor, vestibulum a vehicula at, cursus id ligula. Donec a blandit
        quam, sed dapibus ex.
      </S.BannerDescription>
      <S.BannerImage>
        <Image
          alt="test"
          src="https://cdn-images-1.medium.com/max/800/0*4R0hPG95Cv4Rj4S-"
          objectFit="cover"
          width={1400}
          height={660}
        />
      </S.BannerImage>
    </S.Container>
  )
}
