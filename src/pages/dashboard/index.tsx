import { GetServerSideProps } from 'next'
import { TOKEN } from '../../utils/constants/cookies'
import { parseCookies } from 'nookies'
import { LOGIN } from '../../utils/constants/site'
export { default } from 'containers/dashboard'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { [TOKEN]: token } = parseCookies(ctx)
  if (!token) {
    return {
      redirect: {
        destination: LOGIN,
        permanent: false
      }
    }
  }
  return {
    props: {
      metaDescription: 'Gerencie seus conteudos!',
      metaType: 'website',
      pageTitle: 'Jardel Goncalves | Dashboard',
      isLayoutAuth: true
    }
  }
}
