import React from 'react';
import RouterTemplate from './router';
import './styles/app.scss';
import { StoreProvider } from './store';
import Theme from './components/theme';

function App() {
  return (
    <StoreProvider>
      <Theme>
        <RouterTemplate />
      </Theme>
    </StoreProvider>
  );
}
export default App;
