import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Nav } from './components/Header';
import Router from './routes/routes';
import { GlobalStyles } from './styles/GlobalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      {/* <Nav /> */}
      {/* Injetando rotas  */}
      <Router />
    </BrowserRouter>


  </StrictMode>,
);
