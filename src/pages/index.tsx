import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaDescription: '',
      metaType: '',
      pageTitle: 'Jardel Goncalves | Blog`s'
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}

export { default } from '../containers/Home'
