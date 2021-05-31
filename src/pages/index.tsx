import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaDescription:
        'Sou desenvolvedor Front-End, tenho experiência também com tecnlogias de Back-End como Node.js. Este site foi desenvolvido com o intuito de ajudar pessoas que querem entrar no mundo da programação.',
      metaType: '',
      pageTitle: 'Jardel Goncalves'
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}

export { default } from '../containers/Home'
