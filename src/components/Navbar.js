import React, { useState, useEffect, useContext } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, 
  useTheme, useMediaQuery, Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '../context/ThemeContext';
import logoLight from '../assets/logo_light.png';
// import logoDark from '../assets/logo_dark.png';
import _ from 'lodash';

const navItems = [
  { label: 'Inicio', to: 'hero' },
  { label: 'Sobre Nosotros', to: 'about' },
  { label: 'Servicios', to: 'services' },
  { label: 'Portafolio', to: 'portfolio' },
  // { label: 'Precios', to: 'pricing' },
  { label: 'Contacto', to: 'contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const { mode, toggleColorMode } = useContext(ThemeContext);

  // Detección de sección activa con offset dinámico
  useEffect(() => {
    const handleScroll = _.throttle(() => {
      const scrollPosition = window.scrollY + (window.innerHeight * 0.3);
      
      navItems.forEach(item => {
        const element = document.getElementById(item.to);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          let detectionOffset = offsetHeight * 0.2;
          
          // Ajustes especiales por sección
          if (item.to === 'contact') {
            detectionOffset = window.innerHeight * 0.1;
          } else if (item.to === 'pricing') {
            detectionOffset = window.innerHeight * 0.3;
          }

          if (scrollPosition >= offsetTop - detectionOffset && 
              scrollPosition < offsetTop + offsetHeight - detectionOffset) {
            setActiveSection(item.to);
          }
        }
      });
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto de navbar scrollado
  useEffect(() => {
    const handleScroll = _.throttle(() => {
      setScrolled(window.scrollY > 10);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (state) => () => setOpen(state);
  const logo = mode === 'light' ? (scrolled ? logoLight : logoLight) : logoLight;

  // Scroll suave con offset personalizado
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      let offset = -70;
      if (id === 'contact') offset = -100;
      else if (id === 'pricing') offset = -50;

      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition + offset,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled
          ? (mode === 'light' ? '#2a2a2a' : '#2a2a2a')
          : 'transparent',
        color: scrolled
          ? (mode === 'light' ? '#f5f5f5' : '#f5f5f5')
          : '#ffffff',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        boxShadow: 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ 
          px: { xs: 2, sm: 3, md: 19 },
          py: { xs: 1, sm: 1, md: scrolled ? 0 : 1.2 },
          transition: theme.transitions.create('padding', {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
        }}>
          <Box sx={{ flexGrow: 1 }}>
            <Box component="img" src={logo} alt="Logo" sx={{ height: 60, mt: 1.2 }} />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {navItems.map(item => (
                  <Button
                    key={item.to}
                    onClick={() => handleSmoothScroll(item.to)}
                    sx={{
                      px: { xs: 1, sm: 2 },
                      fontSize: { xs: '0.7rem', sm: '0.8rem' },
                      fontWeight: 900,
                      color: activeSection === item.to ? '#60ce89' : 'inherit',
                      '&:hover': {
                        color: '#60ce89'
                      },
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            <IconButton 
              onClick={toggleColorMode} 
              color="inherit" 
              sx={{ ml: { xs: 0.5, sm: 1 } }}
            >
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer móvil */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, mt: 2 }} role="presentation">
          <List>
            {navItems.map((item) => (
              <ListItem 
                button 
                key={item.to}
                onClick={() => {
                  handleSmoothScroll(item.to);
                  setOpen(false);
                }}
                sx={{
                  color: activeSection === item.to ? '#60ce89' : 'inherit',
                  fontWeight: activeSection === item.to ? 700 : 400
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;