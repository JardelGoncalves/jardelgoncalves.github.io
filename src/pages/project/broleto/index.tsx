import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaDescription:
        'broleto: Valide e obtenha dados de boleto bancário/arrecadação de forma fácil.',
      metaType: '',
      pageTitle: 'Jardel Goncalves | broleto',
      fullLayout: true
    },
    revalidate: 60 * 60 * 24 * 5 // 5 days
  }
}

export { default } from 'containers/project/broleto'
