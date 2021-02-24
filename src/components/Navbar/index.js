import React from 'react';

import { Container } from './styles';
import { Icon } from '../Icon';
import { Switch } from '../Switch';

export const Navbar = () => {
  return (
    <Container>
      <div className="logo">
        <Icon name="logo" size={48} />
        <div className="title">
          <h4>Jardel Gonçalves</h4>
          <span>A Back-end developer in Brazil</span>
        </div>
      </div>
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Posts</a>
        </li>
        <li>
          <a href="/">About me</a>
        </li>
        <li>
          <a href="/">Contact me</a>
        </li>
      </ul>
      <div className="socials">
        <a href="/">
          <Icon name="email" />
        </a>
        <a href="/">
        <Icon name="linkedin" />
        </a>
        <a href="/">
          <Icon name="github" />
        </a>

      </div>
      <div className="theme-toggle">
        <Switch />
      </div>
    </Container>
  )
}