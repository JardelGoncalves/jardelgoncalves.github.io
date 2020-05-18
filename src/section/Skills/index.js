import React from 'react';
import { Fade } from 'react-reveal';

import { Wrapper, Col } from './styles';

import Skill from '../../components/Skill';

const Skills = ({ id }) => {
  const skills = {
    left: [
      { label: 'HTML/CSS', percentage: 70 },
      { label: 'Javascript', percentage: 75 },
      { label: 'React', percentage: 80 },
      { label: 'React Native', percentage: 75 },
      { label: 'Gatsby', percentage: 65 },
      { label: 'Next.js', percentage: 70 },
      { label: 'Css-in-Js', percentage: 70 },
    ],
    rigth: [
      { label: 'Express.js', percentage: 80 },
      { label: 'Nest.js', percentage: 30 },
      { label: 'GraphQL', percentage: 55 },
      { label: 'MongoDB', percentage: 70 },
      { label: 'PostgreSQL', percentage: 75 },
      { label: 'MySQL', percentage: 75 },
      { label: 'Docker', percentage: 75 },
    ],
  };
  return (
    <Fade right>
      <Wrapper id={id}>
        <h1 className="title">Habilidades</h1>
        <div className="row">
          <Col className="column">
          {skills.left.map((s) => (
            <Skill
              className="skill__item"
              key={s.label}
              label={s.label}
              percentage={s.percentage}
            />
          ))}
          </Col>
          <Col className="column">
          {skills.rigth.map((s) => (
            <Skill
              className="skill__item"
              key={s.label}
              label={s.label}
              percentage={s.percentage}
            />
          ))}
          </Col>
        </div>
      </Wrapper>
    </Fade>
  );
};

export default Skills;
