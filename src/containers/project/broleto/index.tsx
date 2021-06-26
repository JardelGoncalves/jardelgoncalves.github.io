import { Banner } from 'components/presentation/project/Banner'
import * as S from './styles'

export default function Broleto() {
  return (
    <S.Container>
      <Banner
        title="Broleto"
        description="Valide e/ou obtenha dados de boletos bancário ou arrecadação de forma fácil"
        image={{
          url: '/images/broleto.png',
          alt: 'Barras lateral e vertical com imitando a bandeira do Brasil'
        }}
      />
    </S.Container>
  )
}
