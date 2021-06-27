import { nanoid } from 'nanoid'

import { Banner } from 'components/presentation/project/Banner'
import { Grid } from 'components/core/Grid/'
import { Title } from 'components/core/Title'
import { Layout } from 'components/core/Layout'
import { TableContent } from 'components/core/TableContent'

import * as S from './styles'

import broletoMock from 'static/mocks/broleto.json'
import { Sintax } from 'components/core/Syntax'

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
              <S.Content id={broletoMock.sections.introduction.id}>
                <Title
                  size="xl"
                  text={broletoMock.sections.introduction.title}
                  heading="h2"
                  anchorId={broletoMock.sections.introduction.id}
                />
                {broletoMock.sections.introduction.descriptions.map(
                  (description) => (
                    <S.Description key={nanoid()}>{description}</S.Description>
                  )
                )}
              </S.Content>
              <S.Content id={broletoMock.sections.installation.id}>
                <Title
                  size="xl"
                  text={broletoMock.sections.installation.title}
                  heading="h2"
                  anchorId={broletoMock.sections.installation.id}
                />
                {broletoMock.sections.installation.descriptions.map(
                  (description) => (
                    <S.Description key={nanoid()}>{description}</S.Description>
                  )
                )}
                <Sintax
                  codes={[
                    {
                      label: 'JS/TS',
                      language: 'bash',
                      code: 'npm i broleto'
                    },
                    {
                      label: 'Dart',
                      language: 'yaml',
                      code: `dependencies:\n  ...\n  broleto: ^0.0.11`
                    }
                  ]}
                />
              </S.Content>
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
