
import React, {  } from 'react';
import Main from './components/MainComponent';
import { ThemeProvider } from './components/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


function App() {
  return (
    <Provider store={store}>
    <ThemeProvider>
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
    </ThemeProvider>
    
  </Provider>
  );
}

export default App;
