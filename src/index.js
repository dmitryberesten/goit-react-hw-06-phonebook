import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // це для того щоб після перезавантаження стора не втрачались дані
import { store, persistor } from './redux/store';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* Передаємо store в Provider */}
    <Provider store={store}>
      {/* показуємо спінер поки не завантажиться стор */}
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// Діма Берестень
