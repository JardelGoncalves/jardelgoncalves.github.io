import { GetServerSideProps } from 'next'
export { default } from 'containers/dashboard'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      isLayoutAuth: true
    }
  }
}
