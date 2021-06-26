import { Banner } from 'components/presentation/project/Banner'
import { Grid } from 'components/core/Grid/'
import { TableContent } from 'components/core/TableContent/index'
import { Title } from 'components/core/Title'
import { Layout } from 'components/core/Layout/index'

import * as S from './styles'

const contents = [
  {
    title: 'Introdução',
    anchor: '#introduction'
  },
  {
    title: 'Instalação',
    anchor: '#installation'
  }
]

export default function Broleto() {
  return (
    <S.Wrapper>
      <Banner
        title="broleto"
        description="Valide e obtenha dados de boleto bancário/arrecadação de forma fácil"
        image={{
          url: '/images/broleto.png',
          alt: 'Barras verticais semelhantes ao um codigo de barra nas cores verde, amarelo e azul representando a bandeira do Brasil'
        }}
      />
      <Layout>
        <div style={{ width: '100%' }}>
          <Grid column="1fr 250px">
            <S.Container className="content">
              <Title text="Test" heading="h2" anchorId="test" />
              <Title text="Test" heading="h3" anchorId="test2" />
            </S.Container>
            <S.Side className="content-table-section">
              <TableContent
                title="Conteudo"
                contents={contents}
                customOffset={200}
              />
            </S.Side>
          </Grid>
        </div>
      </Layout>
    </S.Wrapper>
  )
}
