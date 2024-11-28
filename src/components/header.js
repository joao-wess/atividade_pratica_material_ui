import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#673ab7' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gerenciamento de Projetos - Modificado por João Vitor
          </Typography>
          <Button color="inherit">Novo Botão</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sobre</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 2, backgroundColor: '#ede7f6', textAlign: 'center' }}>
        <Typography variant="subtitle1" color="text.secondary">
          Sistema para gerenciamento eficiente de tarefas e projetos
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
