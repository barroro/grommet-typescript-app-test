import React, { useState } from 'react';
import { Box, Button, Grommet, Heading, Collapsible } from 'grommet';
import { Notification } from 'grommet-icons';

interface ITheme {
  global: {
    colors: {
      brand: string;
      secondary: string;
      text: string;
    };
    font: {
      family: string;
      size?: string;
      height?: string;
    };
  };
}

const theme: ITheme = {
  global: {
    colors: {
      brand: '#34bbb4',
      secondary: '#3f24d8',
      text: '#424242'
    },
    font: {
      family: 'Poppins',
      size: '18px',
      height: '20px'
    }
  }
};

const AppBar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} themeMode="dark">
      <AppBar>
        <Heading level="3" margin="none">
          My App
        </Heading>
        <Button
          icon={<Notification />}
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </AppBar>
      <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
        <Box flex align="center" justify="center">
          app body
        </Box>
        {showSidebar && (
          <Collapsible direction="horizontal" open={showSidebar}>
            <Box
              width="medium"
              background="light-2"
              elevation="small"
              align="center"
              justify="center"
            >
              sidebar
            </Box>
          </Collapsible>
        )}
      </Box>
    </Grommet>
  );
}

export default App;
