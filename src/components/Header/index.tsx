import React, { useContext } from 'react';

import avatar from '../../assets/man.jpeg';
import SwitchToggle from '../SwitchToggle';
import BlogInfo from '../BlogInfo';
import { ThemeContext } from '../../pages/App/index';
import { TitleContainer, InfoContainer } from './styles';

function Header() {
  const [checked, setChecked] = useContext(ThemeContext);

  return (
    <header>
      <TitleContainer>
        <h1>Two Themes Demo</h1>
        <SwitchToggle
          checked={checked}
          changeHandler={() => setChecked(!checked)}
        />
      </TitleContainer>
      <InfoContainer>
        <img src={avatar} alt="John Doe" />
        <BlogInfo />
      </InfoContainer>
    </header>
  );
}

export default Header;
