import React, { useState } from 'react';
import { Box, Container, Typography, Button, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import '@fontsource/montserrat';
import { useTranslation } from 'react-i18next';

import slide1 from '../assets/t3c-slide-1.png';
import slide2 from '../assets/t3c-slide-2.png';

const MotionTypography = motion(Typography);

const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slide1,
      title: t('hero.slide1Title'),
      subtitle: t('hero.slide1Subtitle'),
    },
    {
      image: slide2,
      title: t('hero.slide2Title'),
      subtitle: t('hero.slide2Subtitle'),
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box id="hero" sx={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Box
        component={motion.div}
        animate={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        sx={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          bgcolor: 'rgba(37, 39, 41, 0.85)',
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: 'relative', zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Box>
          <MotionTypography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ color: 'white' }}
          >
            {slides[currentSlide].title}{' '}
            {(currentSlide === 0 || currentSlide === 1) && (
              <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                <Box component="span" sx={{ color: '#58CC8A', fontWeight: 'bold', fontFamily: 'Montserrat' }}>tree</Box>
                <Box component="span" sx={{ color: '#4DD0E1', fontWeight: 'bold', fontFamily: 'Montserrat' }}>{'{'}</Box>
                <Box component="span" sx={{ color: '#F4A026', fontWeight: 'bold', fontFamily: 'Montserrat' }}>3</Box>
                <Box component="span" sx={{ color: '#4DD0E1', fontWeight: 'bold', fontFamily: 'Montserrat' }}>{'}'}</Box>
                <Box component="span" sx={{ color: '#F2F2F2', fontWeight: 'bold', fontFamily: 'Montserrat' }}>code.</Box>
              </Box>
            )}
          </MotionTypography>

          <MotionTypography
            variant="h6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            sx={{ color: 'white', mb: 4 }}
          >
            {slides[currentSlide].subtitle}
          </MotionTypography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              component={Link}
              to="about"
              smooth offset={-70} duration={500}
              variant="contained"
              sx={{
                px: 6,
                py: 1.5,
                borderRadius: 0,
                fontWeight: 'bold',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: 'none',
                backgroundColor: '#e39e32',
                '&:hover': {
                  backgroundColor: '#edae4c',
                  boxShadow: 'none',
                },
              }}
            >
              {t('hero.buttonAbout')}
            </Button>
            <Button
              component={Link}
              to="contact"
              smooth offset={-70} duration={500}
              variant="outlined"
              sx={{
                borderColor: 'white',
                px: 6,
                py: 1.5,
                borderRadius: 0,
                fontWeight: 'bold',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: 'none',
                color: 'white',
                '&:hover': { borderColor: '#58CC8A', color: '#58CC8A' },
              }}
            >
              {t('hero.buttonContact')}
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: '50%', left: 0, right: 0,
            transform: 'translateY(-50%)',
            zIndex: 3,
            display: 'flex',
            justifyContent: 'space-between',
            px: 2,
          }}
        >
          <IconButton onClick={handlePrevSlide} sx={{ color: 'white', bgcolor: 'rgba(0,0,0,0.4)', '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' } }}>
            <ArrowBackIosNew />
          </IconButton>
          <IconButton onClick={handleNextSlide} sx={{ color: 'white', bgcolor: 'rgba(0,0,0,0.4)', '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' } }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
