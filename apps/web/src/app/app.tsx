import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { AppRouter } from './navigation/AppRouter';

export function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <header>
            <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
              The Borroughs Test
            </Typography>
          </header>
        </Toolbar>
      </AppBar>
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
