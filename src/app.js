import React from 'react';
import RouterTemplate from './router';
import './styles/app.scss';
import { StoreProvider } from './store';

function App() {
  return (
    <StoreProvider>
      <RouterTemplate />
    </StoreProvider>
  );
}
export default App;
