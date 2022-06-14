import React from 'react';
import { MantineProvider as Provider, ColorSchemeProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { config } from './config';

const MantineProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([
    ['mod+J', () => toggleColorScheme()],
  ]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <Provider
        theme={{ colorScheme }}
        {...config}
      >
        <div className={colorScheme}>
          {children}
        </div>
      </Provider>
    </ColorSchemeProvider>
  );
};

export default MantineProvider;
