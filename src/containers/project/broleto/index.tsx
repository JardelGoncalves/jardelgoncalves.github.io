import { nanoid } from 'nanoid'

import { Banner } from 'components/presentation/project/Banner'
import { Grid } from 'components/core/Grid/'
import { Title } from 'components/core/Title'
import { Layout } from 'components/core/Layout'
import { TableContent } from 'components/core/TableContent'

import * as S from './styles'

import broletoMock from 'static/mocks/broleto.json'
import { Sintax } from 'components/core/Syntax'
import { List } from 'components/presentation/project/List'

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
                <Sintax codes={broletoMock.sections.installation.codes} />
              </S.Content>
              <S.Content id={broletoMock.sections.usage.id}>
                <Title
                  size="xl"
                  text={broletoMock.sections.usage.title}
                  heading="h2"
                  anchorId={broletoMock.sections.usage.id}
                />
                <S.Description>
                  {broletoMock.sections.usage.descriptions[0]}
                  <strong>{broletoMock.sections.usage.descriptions[1]}</strong>
                  {broletoMock.sections.usage.descriptions[2]}
                </S.Description>
                <Sintax codes={broletoMock.sections.usage.codes} />
              </S.Content>
              <S.Content id={broletoMock.sections.functionality.id}>
                <Title
                  size="xl"
                  text={broletoMock.sections.functionality.title}
                  heading="h2"
                  anchorId={broletoMock.sections.functionality.id}
                />
                {broletoMock.sections.functionality.descriptions.map(
                  (description) => (
                    <S.Description key={nanoid()}>{description}</S.Description>
                  )
                )}
                <S.Content
                  isSubsection
                  id={broletoMock.sections.functionality.sections.valid.id}
                >
                  <Title
                    color="subtitle"
                    size="lg"
                    text={
                      broletoMock.sections.functionality.sections.valid.title
                    }
                    heading="h3"
                    anchorId={
                      broletoMock.sections.functionality.sections.valid.id
                    }
                  />
                  <S.Description>
                    {
                      broletoMock.sections.functionality.sections.valid
                        .descriptions[0]
                    }
                    <strong>
                      {
                        broletoMock.sections.functionality.sections.valid
                          .descriptions[1]
                      }
                    </strong>
                    {
                      broletoMock.sections.functionality.sections.valid
                        .descriptions[2]
                    }
                    <strong>
                      {
                        broletoMock.sections.functionality.sections.valid
                          .descriptions[3]
                      }
                    </strong>
                    {
                      broletoMock.sections.functionality.sections.valid
                        .descriptions[4]
                    }
                    <strong>
                      {
                        broletoMock.sections.functionality.sections.valid
                          .descriptions[5]
                      }
                    </strong>
                  </S.Description>
                  <Sintax
                    codes={
                      broletoMock.sections.functionality.sections.valid.codes
                    }
                  />
                </S.Content>
                <S.Content
                  isSubsection
                  id={broletoMock.sections.functionality.sections.type.id}
                >
                  <Title
                    color="subtitle"
                    size="lg"
                    text={
                      broletoMock.sections.functionality.sections.type.title
                    }
                    heading="h3"
                    anchorId={
                      broletoMock.sections.functionality.sections.type.id
                    }
                  />
                  <S.Description>
                    {
                      broletoMock.sections.functionality.sections.type
                        .descriptions[0]
                    }
                  </S.Description>
                  <List
                    items={[
                      <>
                        <strong>
                          {
                            broletoMock.sections.functionality.sections.type
                              .list.first[0]
                          }
                        </strong>
                        {
                          broletoMock.sections.functionality.sections.type.list
                            .first[1]
                        }
                      </>,
                      <>
                        <strong>
                          {
                            broletoMock.sections.functionality.sections.type
                              .list.second[0]
                          }
                        </strong>
                        {
                          broletoMock.sections.functionality.sections.type.list
                            .second[1]
                        }
                        <strong>
                          {
                            broletoMock.sections.functionality.sections.type
                              .list.second[2]
                          }
                        </strong>
                        ou
                        <strong>
                          {
                            broletoMock.sections.functionality.sections.type
                              .list.second[3]
                          }
                        </strong>
                        (vazio)
                      </>
                    ]}
                  />
                  <Sintax
                    codes={
                      broletoMock.sections.functionality.sections.type.codes
                    }
                  />
                </S.Content>

                <S.Content
                  isSubsection
                  id={broletoMock.sections.functionality.sections.codeType.id}
                >
                  <Title
                    color="subtitle"
                    size="lg"
                    text={
                      broletoMock.sections.functionality.sections.codeType.title
                    }
                    heading="h3"
                    anchorId={
                      broletoMock.sections.functionality.sections.codeType.id
                    }
                  />
                  <S.Description>
                    {
                      broletoMock.sections.functionality.sections.codeType
                        .descriptions[0]
                    }
                  </S.Description>
                  <List
                    items={[
                      <>
                        <strong>
                          {
                            broletoMock.sections.functionality.sections.codeType
                              .list.first[0]
                          }
                        </strong>
                        {
                          broletoMock.sections.functionality.sections.codeType
                            .list.first[1]
                        }
                      </>,
                      <>
                        <strong>
                          {
                            broletoMock.sections.functionality.sections.codeType
                              .list.second[0]
                          }
                        </strong>
                        {
                          broletoMock.sections.functionality.sections.codeType
                            .list.second[1]
                        }
                      </>,
                      <>
                        <strong>
                          {
                            broletoMock.sections.functionality.sections.codeType
                              .list.third[0]
                          }
                        </strong>
                        {
                          broletoMock.sections.functionality.sections.codeType
                            .list.third[1]
                        }
                      </>
                    ]}
                  />
                  <Sintax
                    codes={
                      broletoMock.sections.functionality.sections.codeType.codes
                    }
                  />
                </S.Content>
              </S.Content>
            </S.Container>
            <S.Side className="content-table-section">
              <TableContent
                title={broletoMock.tableContent.title}
                contents={broletoMock.tableContent.contents}
                customOffset={100}
              />
            </S.Side>
          </Grid>
        </S.WrapperContainer>
      </Layout>
    </S.Wrapper>
  )
}
