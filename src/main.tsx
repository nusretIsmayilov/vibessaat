import './i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { IconCheck } from '@tabler/icons-react';
import './i18n'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider defaultColorScheme="light"
    theme={{
      components: {
        Checkbox: {
          defaultProps: {
            icon: IconCheck,
          },
        },
      },
    }}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MantineProvider>
);


