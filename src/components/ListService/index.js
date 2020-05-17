import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import PropTypes from 'prop-types';

import { CardService, Wrapper } from './styles';

const ListService = ({ className, services = [] }) => (
  <Wrapper className={className}>
    <ScrollContainer
      className="container"
      vertical={false}
      horizontal
    >
      {services.map((service) => (
        <CardService className="card" key={service.key}>
          <div>
            {service.icon}
            <h1>{service.title}</h1>
            <p>
              {service.description}
            </p>
            {service.render && service.render()}
          </div>
        </CardService>
      ))}
    </ScrollContainer>
  </Wrapper>
);

ListService.propTypes = {
  className: PropTypes.string,
  services: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.node,
    render: PropTypes.func,
  })),
};

ListService.defaultProps = {
  services: [],
};


export default ListService;
