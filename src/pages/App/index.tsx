import React, { useState, createContext } from 'react';

import Footer from '../../components/Footer';
import PostsList from '../../components/PostsList';
import Header from '../../components/Header';
import { DefaultTheme, DarkTheme } from '../../style/constants';
import { GlobalStyle } from '../../style';
import { MainContainer } from './styles';

type StateProp = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export const ThemeContext = createContext<StateProp>([false, () => {}]);

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <ThemeContext.Provider value={[checked, setChecked]}>
      <MainContainer>
        <GlobalStyle theme={checked ? DarkTheme : DefaultTheme} />
        <Header />
        <PostsList />
        <Footer />
      </MainContainer>
    </ThemeContext.Provider>
  );
}

export default App;
