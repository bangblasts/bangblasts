import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { NextUIProvider, useDisclosure } from '@nextui-org/react';

import { AppContext } from './context';
import { TTheme } from './types';
import { NavBar, Footer } from './components';
import { Main } from './pages';

import './App.css';



function App() {
  const [theme, setTheme] = useState<TTheme>('dark');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <AppContext.Provider value={{ theme, setTheme, isEmailModalOpen: isOpen, openEmailModal: onOpen, changeEmailModalState: onOpenChange }}>
        <div className={'grid bg-[#0E0B28]'}>
          <main className={`dark text-foreground bg-[#0E0B28] h-[2622px] w-[1440px] pt-1 flex flex-col justify-self-center`}>
            <NavBar />
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AppContext.Provider>
    </NextUIProvider>
  );
}

export default App;
