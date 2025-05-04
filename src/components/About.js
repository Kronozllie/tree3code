import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import MotionBox from './MotionBox';
import { useTheme } from '@mui/material';
import imageabout from '../assets/about.png';


const About = () => {
  const theme = useTheme();
  return (
    <Box id="about" sx={{
      py: 10,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    }}>
      <Container>
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
        </MotionBox>

        <Grid container spacing={5} alignItems="center" mt={4}>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
            </MotionBox>
          </Grid>
        </Grid>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
            <Box position="relative" display="inline-block">

              <img
                src={imageabout}
                alt="Imagen"
                style={{ width: '100%', height: 'auto' }}
              />
              <Box
                sx={{
                  width: 230,
                  height: 230,
                  border: '10px solid #f5f5f5',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '250px',
                  left: '250px',
                  backgroundColor: '#60ce89',
                  display: 'flex',
                  flexDirection: 'column', // Para que el texto esté en columna
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '66px',
                  color: '#f5f5f5',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                }}
              >
              <span style={{ fontSize: '66px' }}>10+</span>
                <span style={{ fontSize: '18px' }}>Años de<br/>experiencia</span>
              </Box>
            </Box>

            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ 
                width: '100%',
                height: 'auto',
                mt: 1.2,
                display: 'block',
                pr: 2,
                pl: 2
              }} >
              <Typography
                variant="h4"
                gutterBottom
                fontWeight="bold"
                align="center"
              >
                Sobre Nosotros
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align="center"
                sx={{ maxWidth: 600, mx: 'auto', opacity: 0.7 }}
              >
                Somos una consultora de desarrollo especializada en crear soluciones digitales modernas
                para empresas de todos los tamaños. Combinamos experiencia, pasión y tecnología para
                impulsar tus ideas al siguiente nivel.
              </Typography>
              <Typography variant="h6" fontWeight="bold" align="center" gutterBottom>
                ¿Qué nos diferencia?
              </Typography>
              <Typography variant="body1" align="center" paragraph sx={{ maxWidth: 600, mx: 'auto', opacity: 0.7 }}>
                No solo desarrollamos software, construimos soluciones a la medida. Nos enfocamos en
                entender tu negocio para ofrecerte herramientas que realmente generen valor. Ya sea
                una app, un sistema interno o una plataforma completa, lo hacemos con calidad y
                compromiso.
              </Typography>
              <Typography variant="body1" align="center" paragraph sx={{ maxWidth: 600, mx: 'auto', opacity: 0.7 }}>
                Con experiencia en múltiples sectores y tecnologías, somos el aliado ideal para tus
                proyectos digitales.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;