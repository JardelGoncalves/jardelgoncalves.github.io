import { Banner } from 'components/presentation/project/Banner'
import * as S from './styles'

export default function Broleto() {
  return (
    <S.Container>
      <Banner
        title="broleto"
        description="Valide e obtenha dados de boleto bancário/arrecadação de forma fácil"
        image={{
          url: '/images/broleto.png',
          alt: 'Barras verticais semelhantes ao um codigo de barra nas cores verde, amarelo e azul representando a bandeira do Brasil'
        }}
      />
    </S.Container>
  )
}
