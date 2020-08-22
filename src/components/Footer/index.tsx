import React from 'react';

import {
  Wave,
  SquareFooter,
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  MailIcon,
  TelegramIcon,
  WhatsAppIcon,
} from '../Svg';
import { IconButton } from '../Button';
import { Title } from '../Title';

import { Wrap, Row, ListItems } from './styles';

const config = {
  follow: [
    { icon: <GithubIcon />, link: 'https://github.com/jardelgoncalves' },
    { icon: <LinkedinIcon />, link: 'https://linkedin.com/in/jardelgoncalves' },
    { icon: <MediumIcon />, link: 'https://medium.com/@jardelgoncalves' },
  ],
  contacts: [
    { icon: <MailIcon />, name: 'jardelgoncalves1996@gmail.com', link: 'mailto:jardelgoncalves1996@gmail.com' },
    { icon: <TelegramIcon />, name: 'Telegram', link: 'https://t.me/jardelgoncalves' },
    { icon: <WhatsAppIcon />, name: 'WhatsApp', link: 'https://api.whatsapp.com/send?phone=5588981236663&text=Ol%C3%A1%20Jardel' },
  ],
};

const Footer = ({ t }) => (
  <Wrap>
    <Row>
      <div className="column">
        <Title disableSvg={false} size={55} color="#ffffff" text={t('footer-contacts')} />
        <ListItems>
          {config.contacts.map((c:any) => (
            <li key={c.link}>
              <a
                className="item"
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.icon}
                {c.name || c.link}
              </a>
            </li>

          ))}
        </ListItems>
      </div>
      <div className="column">
        <Title disableSvg={false} size={55} color="#ffffff" text={t('footer-follow-me')} />
        <ListItems row>
          {config.follow.map((f:any) => (
            <li key={f.link}>
              <IconButton
                path={f.link}
                bg="#fff"
                color="#5BCA5D"
                icon={f.icon}
              />
            </li>
          ))}
        </ListItems>
      </div>
    </Row>
    <SquareFooter />
    <Wave />
  </Wrap>
);

export { Footer };
