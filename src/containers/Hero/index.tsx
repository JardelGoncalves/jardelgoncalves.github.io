import { Wrapper, Title, Description, SocialList } from './styles'
import { SocialButton } from '../../components/Buttons'

export const Hero = () => {
  return (
    <Wrapper>
      {/* <Title>Hey, I&apos;m Jardel</Title> */}
      <Title>Hey, eu sou o Jardel</Title>
      <Description>
        Eu sou desenvolvedor de software, moro em Quixadá/Brasil. Eu atualmente
        desenvolvo aplicações Web e Mobile em projetos pessoais e trabalho como
        desenvolvedor <strong>Front-End</strong> at <strong>Ioasys</strong>
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
