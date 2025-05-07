import React, { useState } from 'react';
import { Box, Container, Typography, IconButton, Chip, useTheme } from '@mui/material';
import Slider from 'react-slick';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import MotionBox from './MotionBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectModal from './ProjectModal'; // importa tu nuevo modal
import { useTranslation } from 'react-i18next';
import imagen1 from '../assets/1080_1.png';
import imagen2 from '../assets/1080_3.png';
import imagen3 from '../assets/1080_4.png';
import imagen4 from '../assets/1080_5.png';
import imagen5 from '../assets/1080_6.png';

const projects = [
  {
    key: 'reserves',
    //title: 'Sistema de Reservas',
    //description: 'Aplicación web para gestionar reservas de clientes.',
    image: imagen1,
    //longDescription: 'Este sistema permite a los usuarios reservar habitaciones, mesas o servicios a través de un calendario interactivo en línea. Incluye confirmaciones automáticas por correo electrónico, gestión de disponibilidad en tiempo real y reportes avanzados para los administradores.',
    client: 'Hotel Premium Suites',
    website: 'https://hotelpremiumsuites.com',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'MySQL', 'Email API'],
    author: 'Carlos Mendoza',
    avatar: '/images/carlos.jpg',
  },
  {
    key: 'inventory',
    //title: 'Control de Inventario',
    //description: 'Herramienta personalizada para administración de stock.',
    image: imagen2,
    //longDescription: 'Sistema integral que permite controlar entradas y salidas de productos, generar reportes de stock, recibir alertas automáticas por niveles bajos y gestionar múltiples almacenes desde una única plataforma. Integración con lectores de código de barras y exportación a Excel.',
    client: 'Logística Xpress',
    website: 'https://logisticaxpress.com',
    skills: ['React', 'Next.js', 'Stripe API', 'Tailwind CSS', 'Firebase'],
    author: 'Ana Torres',
    avatar: '/images/ana.jpg',
  },
  {
    key: 'ecommerce',
    //title: 'E-commerce Básico',
    //description: 'Tienda en línea responsiva con pasarela de pago integrada.',
    image: imagen3,
    //longDescription: 'Diseño de una tienda online moderna y minimalista. Incluye carrito de compras, gestión de usuarios, reseñas de productos, panel de administración completo y pago seguro mediante Stripe y PayPal. Optimizada para móviles y SEO friendly.',
    client: 'Fashion Store Online',
    website: 'https://fashionstoreonline.com',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Chart.js', 'JWT', 'Bootstrap', 'AWS'],
    author: 'Luis Pérez',
    avatar: '/images/luis.jpg',
  },
  {
    key: 'crm',
    //title: 'CRM para PyMEs',
    //description: 'Sistema de gestión de clientes para empresas pequeñas.',
    image: imagen4,
    //longDescription: 'Este CRM fue desarrollado para ayudar a las pequeñas y medianas empresas a gestionar relaciones con clientes, ventas y seguimientos. Permite personalizar pipelines de ventas, enviar correos masivos y crear reportes de desempeño comercial con métricas clave.',
    client: 'PyME Solutions',
    website: 'https://pymesolutions.com',
    skills: ['PHP', 'Bootstrap', 'MongoDB', 'Angular', 'SMTP Email'],
    author: 'Valeria Gómez',
    avatar: '/images/valeria.jpg',
  },
  {
    key: 'education',
    //title: 'Portal Educativo',
    //description: 'Plataforma interactiva para cursos en línea.',
    image: imagen5,
    //longDescription: 'Plataforma de e-learning que permite a instructores crear cursos, exámenes interactivos y emitir certificados digitales. Los alumnos pueden llevar un control de su progreso, participar en foros y acceder a contenido multimedia adaptado a cada nivel de dificultad.',
    client: 'LearnOnline Academy',
    website: 'https://learnonlineacademy.com',
    skills: ['HTML5', 'CSS3', 'Angular', 'Node.js', 'SQL Server'],
    author: 'Andrea Castillo',
    avatar: '/images/andrea.jpg',
  },
];


const PrevArrow = ({ onClick }) => {
  const theme = useTheme();
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left: -20,
        zIndex: 1,
        transform: 'translateY(-50%)',
        backgroundColor: 'white',
        boxShadow: 2,
        '&:hover': { backgroundColor: '#f9f9f9' },
      }}
    >
      <ArrowBackIos sx={{ color: theme.palette.mode === 'dark' ? '#000' : '#000' }} />
    </IconButton>
  );
};

const NextArrow = ({ onClick }) => {
  const theme = useTheme();
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: -20,
        zIndex: 1,
        transform: 'translateY(-50%)',
        backgroundColor: 'white',
        boxShadow: 2,
        '&:hover': { backgroundColor: '#eee' },
      }}
    >
      <ArrowForwardIos sx={{ color: theme.palette.mode === 'dark' ? '#000' : '#000' }} />
    </IconButton>
  );
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  centerMode: false,
  centerPadding: '0px',
  swipe: false,
  draggable: false,
  touchMove: false,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerPadding: '30px',
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerPadding: '20px',
      },
    },
  ],
};

const Portfolio = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box id="portfolio" sx={{
      py: 10,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    }}
    >
      <Container>
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
            {t('portfolio.title')}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            textAlign="center"
            sx={{ maxWidth: 600, mx: 'auto', opacity: 0.7 }}
          >
            {t('portfolio.description')}
          </Typography>
        </MotionBox>

        <Box mt={5} position="relative">
          <Slider {...sliderSettings}>
            {projects.map((project, index) => (
              <Box key={index} px={0.03} onClick={() => handleOpen(project)} sx={{ cursor: 'pointer' }}>
              <MotionBox
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  m: 1,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                {/* Imagen */}
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: 300,
                    objectFit: 'cover',
                  }}
                />
            
                {/* Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    p: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {t(`portfolio.projects.${project.key}.title`)}
                  </Typography>
                  <Chip label={project.category || t('portfolio.category')} color="warning"
                    sx={{
                      boxShadow: 'none',
                      backgroundColor: '#e39e32',
                      '&:hover': {
                        backgroundColor: '#edae4c',
                        boxShadow: 'none',
                      },
                    }} />
                    
                </Box>
              </MotionBox>
            </Box>
            
            ))}
          </Slider>
        </Box>

        <ProjectModal open={open} project={selectedProject} onClose={handleClose} />
      </Container>
    </Box>
  );
};

export default Portfolio;