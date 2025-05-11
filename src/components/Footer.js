import React from 'react';
import { Box, Container, Typography, Stack, IconButton, Divider, Link } from '@mui/material';
import { Facebook, Instagram, LinkedIn, WhatsApp, Email, LocationOn } from '@mui/icons-material';
import fiverrLogo from '../assets/fiverr.png';
import linktrLogo from '../assets/linktree-50x50.png';
import logoWhite from '../assets/logo_white.png';
import { useTranslation } from 'react-i18next';

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#121212', // Fondo más oscuro y profesional
        color: '#858585',
        pt: 6,
        pb: 2,
      }}
    >
      <Container maxWidth="lg">
        {/* Grid principal */}
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          }}
          gap={4}
          mb={4}
        >
          {/* Columna 1: Información de contacto */}
          <Box>
            <Box component="img" src={logoWhite} alt="tree3code" sx={{ width: 200, height: 'auto' }}/>
            {/* <Typography 
              variant="h6" 
              component="h3"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: 'primary.main',
                fontSize: '1.1rem',
                mb: 2,
                color: '#ffffff'
              }}
            >
              Enlaces
            </Typography>
            
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover" variant="body2">
                Inicio
              </Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">
                Servicios
              </Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">
                Portafolio
              </Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">
                Blog
              </Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">
                Contacto
              </Link>
            </Stack> */}
          </Box>

          {/* Columna 2: Enlaces rápidos */}
          <Box>
            <Typography 
              variant="h6" 
              component="h3"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: '1.1rem',
                mb: 2,
                color: '#ffffff'
              }}
            >
              {t('footer.title1')}
            </Typography>
            
            <Stack spacing={1.5}>
              <Box display="flex" alignItems="center">
                <WhatsApp sx={{ mr: 1.5, color: '#25D366' }} />
                <Link href="https://wa.me/5216694196131" color="inherit" underline="hover">
                  +52 1 669 419 6131
                </Link>
              </Box>
              
              <Box display="flex" alignItems="center">
                <Email sx={{ mr: 1.5, color: '#EA4335' }} />
                <Link href="mailto:contact.tree3code@gmail.com" color="inherit" underline="hover">
                  contact.tree3code@gmail.com
                </Link>
              </Box>
              
              <Box display="flex" alignItems="flex-start">
                <LocationOn sx={{ mr: 1.5, color: '#4285F4', mt: 0.5 }} />
                <Typography variant="body1">
                  {t('footer.global')} 🌎
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Columna 3: Redes sociales */}
          <Box>
            <Typography 
              variant="h6" 
              component="h3"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: '1.1rem',
                mb: 2,
                color: '#ffffff'
              }}
            >
              {t('footer.title2')}
            </Typography>
            
            <Typography variant="body2" mb={2}>
            {t('footer.message1')}
            </Typography>
            
            <Stack direction="row" spacing={1}>
              <IconButton 
                href="https://www.facebook.com/tree3code" 
                target="_blank" 
                sx={{ 
                  backgroundColor: '#4267B2',
                  '&:hover': { backgroundColor: '#365899' }
                }}
              >
                <Facebook sx={{ color: '#fff' }} />
              </IconButton>
              
              <IconButton 
                href="https://x.com/tree3code" 
                target="_blank" 
                sx={{ 
                  backgroundColor: '#000000',
                  '&:hover': { backgroundColor: '#333333' },
                  width: 40
                }}
              >
                <XIcon sx={{
                  color: 'white'
                }} />
              </IconButton>
              
              <IconButton 
                href="https://www.instagram.com/tree3code" 
                target="_blank" 
                sx={{ 
                  background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)',
                  '&:hover': { opacity: 0.9 }
                }}
              >
                <Instagram sx={{ color: '#fff' }} />
              </IconButton>
              
              <IconButton 
                href="https://www.linkedin.com/company/tree3code" 
                target="_blank" 
                sx={{ 
                  backgroundColor: '#0077B5',
                  '&:hover': { backgroundColor: '#006097' }
                }}
              >
                <LinkedIn sx={{ color: '#fff' }} />
              </IconButton>
              
              <IconButton 
                href="https://wa.me/5216694196131" 
                target="_blank" 
                sx={{ 
                  backgroundColor: '#25D366',
                  '&:hover': { backgroundColor: '#128C7E' }
                }}
              >
                <WhatsApp sx={{ color: '#fff' }} />
              </IconButton>


            </Stack>

            <Typography variant="body2" mt={2} mb={2}>
              {t('footer.message2')}
            </Typography>

            <Stack direction="row" spacing={1}>
              
              {/* Directo al perfil */}
              <IconButton 
                href="https://es.fiverr.com/tree3code" 
                target="_blank" 
                sx={{ 
                  backgroundColor: '#1cbf73',
                  '&:hover': { backgroundColor: '#279b65' },
                  width: 40,
                  height: 40
                }}
              >

              {/* Directo al servicio */}
              {/*<IconButton 
                href="http://www.fiverr.com/s/ljNKQ9a" 
                target="_blank" 
                sx={{ 
                  backgroundColor: '#1cbf73',
                  '&:hover': { backgroundColor: '#279b65' },
                  width: 40,
                  height: 40
                }}
              >*/}
                <Box component="img" src={fiverrLogo} sx={{ width: 20, height: 20, filter: 'brightness(0) invert(1)',}}/>
              </IconButton>

              <IconButton 
                href="https://linktr.ee/tree3code" 
                target="_blank" 
                sx={{ 
                  backgroundColor: '#3bd559',
                  '&:hover': { backgroundColor: '#279b65' },
                  width: 40,
                  height: 40
                }}
              >

              {/* Directo al servicio */}
              {/*<IconButton 
                href="http://www.fiverr.com/s/ljNKQ9a" 
                target="_blank" 
                sx={{ 
                  backgroundColor: '#1cbf73',
                  '&:hover': { backgroundColor: '#279b65' },
                  width: 40,
                  height: 40
                }}
              >*/}
                <Box component="img" src={linktrLogo} sx={{ width: 20, height: 20, filter: 'brightness(0) invert(1)',}}/>
              </IconButton>

            </Stack>


          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 3 }} />

        {/* Derechos reservados y política */}
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="#f5f5f5">
            © {new Date().getFullYear()} tree3code. {t('footer.copyright')}
          </Typography>
          
          {/* <Stack direction="row" spacing={2} mt={{ xs: 2, sm: 0 }}>
            <Link href="#" color="#f5f5f5" underline="hover" variant="body2">
              Términos de servicio
            </Link>
            <Link href="#" color="#f5f5f5" underline="hover" variant="body2">
              Política de privacidad
            </Link>
            <Link href="#" color="#f5f5f5" underline="hover" variant="body2">
              Cookies
            </Link>
          </Stack> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;