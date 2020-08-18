import styled from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

export const TimelineWrapper = styled(VerticalTimeline)`
  .vertical-timeline.vertical-timeline-custom-line::before {
    background: ${({ theme }) => theme.colors.primary} !important;
  }
`;

export const TimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element:after {
    background-color: #2C2C2C;
  }
  .vertical-timeline-element-content {
    background-color: #2C2C2C;
    box-shadow: 0 3px 0 ${({ theme }) => theme.colors.primary};
  }
  .vertical-timeline-element-content-arrow {
    border-right: 7px solid #2C2C2C;
  }
  .vertical-timeline-element-icon {
    background-color: #2C2C2C;
    box-shadow:
      0 0 0 4px ${({ theme }) => theme.colors.primary},
      0 3px 0 4px rgba(0, 0, 0, 0.05);
  }
  
  .vertical-timeline-element-icon svg {
    color: ${({ theme }) => theme.colors.primary};
  }
  .vertical-timeline-element-title,
  .vertical-timeline-element-date {
    font-size: 16px;
    line-height: 1.5;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }
  .vertical-timeline-element-title {
    font-size: 17px;
    font-family: 'Inter', sans-serif;
  }
  .vertical-timeline-element-content p {
    line-height: 1.7;
    font-size: 14px;
    opacity: 0.8;
    font-family: 'Inter', sans-serif;
    color: #fff;
  }
  
`;

export const Wrapper = styled.div`
  width: 100%;
  .vertical-timeline.vertical-timeline-custom-line::before {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
