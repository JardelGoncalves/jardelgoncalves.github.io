import Image from 'next/image'
import { Card } from 'components/core/Card'

import * as S from './styles'

export const ArticleCard = () => {
  return (
    <Card noPadding>
      <S.Container sideBySide>
        <S.ImageCover sideBySide>
          <Image
            alt="teste"
            src="https://cdn-images-1.medium.com/max/800/0*4R0hPG95Cv4Rj4S-"
            width={900}
            height={600}
          />
        </S.ImageCover>
        <S.Details>
          <S.Title>Node Clean Architecture Deep Dive</S.Title>
          <S.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            harum dignissimos possimus odio? Laboriosam, voluptas nemo.
            Distinctio sunt expedita aut ut debitis sequi corporis quis impedit,
            accusamus doloremque, sapiente voluptatibus! harum dignissimos
            possimus odio? Laboriosam, voluptas nemo. Distinctio sunt expedita
            aut ut debitis sequi corporis quis impedit, accusamus doloremque,
            sapiente voluptatibus!
          </S.Description>
          <S.TimeToRead>5 min</S.TimeToRead>
        </S.Details>
      </S.Container>
    </Card>
  )
}
