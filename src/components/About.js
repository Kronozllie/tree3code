import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import MotionBox from './MotionBox';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import imageabout from '../assets/about.png';

const About = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  
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
          {/* Podrías agregar una animación de entrada aquí si deseas */}
        </MotionBox>

        <Grid container spacing={5} alignItems="center" mt={4}>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Espacio para una futura animación o contenido */}
            </MotionBox>
          </Grid>
        </Grid>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }} sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', mb: 2 }}>
            <Box position="relative" display="inline-block">

              <img
                src={imageabout}
                alt="Imagen"
                style={{ width: '100%', height: 'auto' }}
              />
              <Box
                sx={{
                  width: { xs: 180, sm: 230, md: 230 },
                  height: { xs: 180, sm: 230, md: 230 },
                  border: '10px solid #f5f5f5',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: { xs: '65%', sm: '65%', md: '60%' },
                  left: { xs: '65%', sm: '65%', md: '65%' },
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#60ce89',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f5f5f5',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                  fontWeight: 'bold',
                  px: 2,
                }}
              >
                <Typography sx={{ fontSize: { xs: '32px', sm: '48px', md: '60px' }, lineHeight: 1 }}>
                  10+
                </Typography>
                <Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' }, textAlign: 'center' }}>
                  {t('about.years')}<br></br>{t('about.years1')}
                </Typography>
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
                {t('about.title')}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align="center"
                sx={{ maxWidth: 600, mx: 'auto', opacity: 0.7 }}
              >
                {t('about.description1')}
              </Typography>
              <Typography variant="h6" fontWeight="bold" align="center" gutterBottom sx={{ mt: 5}}>
                {t('about.subtitle')}
              </Typography>
              <Typography variant="body1" align="center" paragraph sx={{ maxWidth: 600, mx: 'auto', opacity: 0.7 }}>
                {t('about.description2')}
              </Typography>
              <Typography variant="body1" align="center" paragraph sx={{ maxWidth: 600, mx: 'auto', opacity: 0.7 }}>
                {t('about.description3')}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;