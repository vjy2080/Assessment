import React from 'react';
import { AppProvider } from './AppContext';
import ThemeToggle from './ThemeToggle';
import Content from './Content';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="shape">

        <ThemeToggle />
        <Content />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
