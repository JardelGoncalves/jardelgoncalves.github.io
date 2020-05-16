import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';


import GilroyLight from '../assets/fonts/Gilroy-Light.otf';
import GilroyRegular from '../assets/fonts/Gilroy-Regular.ttf';
import GilroyMedium from '../assets/fonts/Gilroy-Medium.ttf';
import GilroyExtraBold from '../assets/fonts/Gilroy-ExtraBold.otf';

export default createGlobalStyle`
  ${reset};

  @font-face {
    font-family: "Gilroy Light";
    src: url('${GilroyLight}') format('opentype');
  }

  @font-face {
    font-family: "Gilroy Regular";
    src: url('${GilroyRegular}') format('truetype');
  }

  @font-face {
    font-family: "Gilroy Medium";
    src: url('${GilroyMedium}') format('truetype');
  }

  @font-face {
    font-family: "Gilroy ExtraBold";
    src: url('${GilroyExtraBold}') format('opentype');
  }

  body {
    font-family: 'Gilroy ExtraBold';
    font-weight: 500;
    background-color: #191919;
    width: 100%;
  }

  ::placeholder {
    font-size: 17px;
    font-family: 'Gilroy ExtraBold';
    color: #ffffffb3;
  }
`;
