import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { IconButton, Switch } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <Switch checked={darkMode} onChange={toggleDarkMode} />
      <IconButton onClick={toggleDarkMode} color="inherit">
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </div>
  );
};

export default ThemeToggle;
