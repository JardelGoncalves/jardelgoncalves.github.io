import { SocialButton } from '../../components/core/Button'

import * as S from './styles'

export default function Home() {
  return (
    <S.PresentationContainer>
      <S.TitleColorize>Hey, eu sou o Jardel</S.TitleColorize>
      <S.Description>
        Eu sou desenvolvedor de software, moro em Quixadá/Brasil. Eu atualmente
        desenvolvo aplicações Web e Mobile em projetos pessoais e trabalho como
        desenvolvedor <strong>Front-End</strong> na <strong>Ioasys</strong>
      </S.Description>
      <S.SocialList>
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
      </S.SocialList>
    </S.PresentationContainer>
  )
}
