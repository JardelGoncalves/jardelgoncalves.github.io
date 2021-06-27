import { nanoid } from 'nanoid'

import { Banner } from 'components/presentation/project/Banner'
import { Grid } from 'components/core/Grid/'
import { TableContent } from 'components/core/TableContent/index'
import { Title } from 'components/core/Title'
import { Layout } from 'components/core/Layout/index'

import * as S from './styles'

import broletoMock from 'static/mocks/broleto.json'

export default function Broleto() {
  return (
    <S.Wrapper>
      <Banner
        title={broletoMock.banner.title}
        description={broletoMock.banner.description}
        image={broletoMock.banner.image}
      />
      <Layout>
        <S.WrapperContainer>
          <Grid column="1fr 220px">
            <S.Container className="content">
              {broletoMock.sections.map((section) => (
                <S.Content id={section.id} key={nanoid()}>
                  <Title
                    size="xl"
                    text={section.title}
                    heading="h2"
                    anchorId={section.id}
                  />
                  {section.descriptions.map((description) => (
                    <S.Description key={nanoid()}>{description}</S.Description>
                  ))}
                </S.Content>
              ))}
            </S.Container>
            <S.Side className="content-table-section">
              <TableContent
                title={broletoMock.tableContent.title}
                contents={broletoMock.tableContent.contents}
                customOffset={200}
              />
            </S.Side>
          </Grid>
        </S.WrapperContainer>
      </Layout>
    </S.Wrapper>
  )
}
