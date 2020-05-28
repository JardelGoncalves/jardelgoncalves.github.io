import styled from 'styled-components';

export const Wrapper = styled.p`
  font-family: 'Gilroy ExtraBold';
  color: ${({ color }) => color || '#ff0000'};
  font-size: 12px; 
  line-height: 1.6;
`;
