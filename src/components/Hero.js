import React, { useState } from 'react';
import { Box, Container, Typography, Button, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import '@fontsource/montserrat';

import slide1 from '../assets/t3c-slide-1.png';
import slide2 from '../assets/t3c-slide-2.png';

const MotionTypography = motion(Typography);

const slides = [
  {
    image: slide1,
    title: 'Bienvenido a',
    subtitle: 'Consultoría en desarrollo de software, sistemas y soluciones digitales.',
  },
  {
    image: slide2,
    title: 'CREANDO EXPERIENCIAS DIGITALES',
    subtitle: 'La mejor opción para tu nuevo sitio web.',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      id="hero"
      sx={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Fondo animado sin flash */}
      <Box
        component={motion.div}
        animate={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        sx={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      {/* Capa oscura */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(37, 39, 41, 0.85)',
          zIndex: 1,
        }}
      />

      {/* Contenido */}
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 2,
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
            {currentSlide === 0 || currentSlide === 1 ? (
              <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                <Box component="span" sx={{ color: '#58CC8A', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif' }}>tree</Box>
                <Box component="span" sx={{ color: '#4DD0E1', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif' }}>{'{'}</Box>
                <Box component="span" sx={{ color: '#F4A026', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', mt: 1 }}>3</Box>
                <Box component="span" sx={{ color: '#4DD0E1', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif' }}>{'}'}</Box>
                <Box component="span" sx={{ color: '#F2F2F2', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif' }}>code.</Box>
              </Box>
            ) : null}
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

          {/* Video embebido */}
{/*<Box
  sx={{
    position: 'relative',
    width: '100%',
    maxWidth: 560,
    mx: 'auto',
    aspectRatio: '16/9',
    mb: 4,
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: 3,
  }}
>
  <iframe
    src="#"
    title="Video institucional"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 0,
    }}
  />
</Box>*/}

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              component={Link}
              to="about"
              smooth
              offset={-70}
              duration={500}
              variant="contained"
              //color="warning"
              sx={{
                backgroundColor: '#e39e32',
                '&:hover': {
                  backgroundColor: '#edae4c',
                  color: 'white',
                },
              }}
            >
              Conócenos
            </Button>
            <Button
              component={Link}
              to="contact"
              smooth
              offset={-70}
              duration={500}
              variant="outlined"
              color="primary"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: '#58CC8A',
                  color: '#58CC8A',
                },
              }}
            >
              Contáctanos
            </Button>
          </Stack>
        </Box>

        {/* Botones de navegación */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
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
