import { Wrapper, Title, Description, SocialList } from './styles'
import { SocialButton } from '../../components/Buttons'

export const Hero = () => {
  return (
    <Wrapper>
      <Title>Hey, I&apos;m Jardel</Title>
      <Description>
        I&apos;m a software developer and writer, living in Quixadá/Brazil.
        I&apos;m currently building web and mobile applications on personal
        projects and I work as a <strong>Front-End</strong> at{' '}
        <strong>Ioasys</strong>.
      </Description>
      <SocialList>
        <SocialButton
          icon="github"
          url="https://github.com/jardelgoncalves"
          target="_blank"
        />

        <SocialButton
          icon="linkedin"
          url="https://linkedin.com/in/jardelgoncalves"
          target="_blank"
        />

        <SocialButton icon="email" url="mailto:jardelgoncalves1996@gmail.com" />
      </SocialList>
    </Wrapper>
  )
}
