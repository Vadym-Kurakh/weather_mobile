import React from 'react';
import {store} from './src/store';
import {Provider} from 'react-redux';
import Navigation from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
