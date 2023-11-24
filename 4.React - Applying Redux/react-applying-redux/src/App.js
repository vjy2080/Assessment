import React from 'react';
import { AppProvider } from './AppContext';
import ThemeToggle from './ThemeToggle';
import Content from './Content';

function App() {
  return (
    <AppProvider>
      <h4 className='text-center'>Context API in React Components</h4>
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
