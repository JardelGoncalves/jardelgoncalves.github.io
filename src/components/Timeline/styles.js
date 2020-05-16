import styled from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

export const TimelineWrapper = styled(VerticalTimeline)`
  .vertical-timeline.vertical-timeline-custom-line::before {
    background: #5C3BFE !important;
  }
`;

export const TimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element:after {
    background-color: #222222;
  }

  .vertical-timeline-element-content {
    background-color: #222222;
    box-shadow: 0 3px 0 #5C3BFE;
  }

  .vertical-timeline-element-content-arrow {
    border-right: 7px solid #222222;
  }

  .vertical-timeline-element-icon {
    background-color: #191919;
    box-shadow:
      0 0 0 4px #5C3BFE,
      inset 0 2px 0 rgba(0, 0, 0, 0.08),
      0 3px 0 4px rgba(0, 0, 0, 0.05);
  }

  .vertical-timeline-element-icon svg {
    color: #5C3BFE;
  }

  .vertical-timeline-element-title,
  .vertical-timeline-element-date {
    font-size: 20px;
    line-height: 1.5;
    font-family: 'Gilroy ExtraBold';
    color: #5C3BFE
  }

  .vertical-timeline-element-title {
    font-size: 17px;
  }

  .vertical-timeline-element-content p {
    line-height: 1.7;
    font-size: 14px;
    opacity: 0.8;
    font-family: 'Gilroy Light';
    color: #fff;
  }
  
`;

export const Wrapper = styled.div`
  width: 100%;
  .vertical-timeline.vertical-timeline-custom-line::before {
    background: #5C3BFE;
  }
`;
