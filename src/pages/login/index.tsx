import { GetServerSideProps } from 'next'

import Login from 'containers/login'
import { SignInProvider } from 'contexts/sign-in'
import { parseCookies } from 'nookies'
import { TOKEN } from '../../utils/constants/cookies'
import { DASHBOARD } from '../../utils/constants/site'

export default function LoginPage() {
  return (
    <SignInProvider>
      <Login />
    </SignInProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { [TOKEN]: token } = parseCookies(ctx)
  if (token) {
    return {
      redirect: {
        destination: DASHBOARD,
        permanent: false
      }
    }
  }
  return {
    props: {
      metaDescription: 'Faça login e acesse sua conta!',
      metaType: 'website',
      pageTitle: 'Jardel Goncalves | Login'
    }
  }
}
