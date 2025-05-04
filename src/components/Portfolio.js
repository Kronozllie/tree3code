import React, { useState } from 'react';
import { Box, Container, Typography, Grid, IconButton, useTheme } from '@mui/material';
import Slider from 'react-slick';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import MotionBox from './MotionBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectModal from './ProjectModal'; // importa tu nuevo modal

const projects = [
  {
    title: 'Sistema de Reservas',
    description: 'Aplicación web para gestionar reservas de clientes.',
    image: '/images/reservas.png',
    longDescription: 'Este sistema permite a los usuarios reservar habitaciones, mesas o servicios a través de un calendario interactivo en línea. Incluye confirmaciones automáticas por correo electrónico, gestión de disponibilidad en tiempo real y reportes avanzados para los administradores.',
    client: 'Hotel Premium Suites',
    website: 'https://hotelpremiumsuites.com',
    skills: ['React', 'Node.js', 'MySQL', 'Email API'],
    author: 'Carlos Mendoza',
    avatar: '/images/carlos.jpg',
  },
  {
    title: 'Control de Inventario',
    description: 'Herramienta personalizada para administración de stock.',
    image: '/images/inventario.png',
    longDescription: 'Sistema integral que permite controlar entradas y salidas de productos, generar reportes de stock, recibir alertas automáticas por niveles bajos y gestionar múltiples almacenes desde una única plataforma. Integración con lectores de código de barras y exportación a Excel.',
    client: 'Logística Xpress',
    website: 'https://logisticaxpress.com',
    skills: ['Laravel', 'Vue.js', 'MariaDB', 'Excel API'],
    author: 'Ana Torres',
    avatar: '/images/ana.jpg',
  },
  {
    title: 'E-commerce Básico',
    description: 'Tienda en línea responsiva con pasarela de pago integrada.',
    image: '/images/ecommerce.png',
    longDescription: 'Diseño de una tienda online moderna y minimalista. Incluye carrito de compras, gestión de usuarios, reseñas de productos, panel de administración completo y pago seguro mediante Stripe y PayPal. Optimizada para móviles y SEO friendly.',
    client: 'Fashion Store Online',
    website: 'https://fashionstoreonline.com',
    skills: ['Shopify', 'Liquid', 'JavaScript', 'Stripe API'],
    author: 'Luis Pérez',
    avatar: '/images/luis.jpg',
  },
  {
    title: 'CRM para PyMEs',
    description: 'Sistema de gestión de clientes para empresas pequeñas.',
    image: '/images/crm.png',
    longDescription: 'Este CRM fue desarrollado para ayudar a las pequeñas y medianas empresas a gestionar relaciones con clientes, ventas y seguimientos. Permite personalizar pipelines de ventas, enviar correos masivos y crear reportes de desempeño comercial con métricas clave.',
    client: 'PyME Solutions',
    website: 'https://pymesolutions.com',
    skills: ['PHP', 'Bootstrap', 'MongoDB', 'SMTP Email'],
    author: 'Valeria Gómez',
    avatar: '/images/valeria.jpg',
  },
  {
    title: 'Portal Educativo',
    description: 'Plataforma interactiva para cursos en línea.',
    image: '/images/educativo.png',
    longDescription: 'Plataforma de e-learning que permite a instructores crear cursos, exámenes interactivos y emitir certificados digitales. Los alumnos pueden llevar un control de su progreso, participar en foros y acceder a contenido multimedia adaptado a cada nivel de dificultad.',
    client: 'LearnOnline Academy',
    website: 'https://learnonlineacademy.com',
    skills: ['Next.js', 'PostgreSQL', 'AWS S3', 'SCORM'],
    author: 'Andrea Castillo',
    avatar: '/images/andrea.jpg',
  },
  {
    title: 'Dashboard Financiero',
    description: 'Panel con métricas y gráficos para su análisis financiero.',
    image: '/images/finanzas.png',
    longDescription: 'Dashboard completo con KPIs financieros, integración de gráficos en tiempo real, predicciones basadas en IA y reportes descargables en PDF. Soporte para diferentes monedas, integración bancaria y visualización de tendencias históricas.',
    client: 'FinTech Global',
    website: 'https://fintechglobal.com',
    skills: ['Django', 'Chart.js', 'Pandas', 'REST API'],
    author: 'Fernando Díaz',
    avatar: '/images/fernando.jpg',
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
            Portafolio
          </Typography>
          <Typography
            variant="body1"
            paragraph
            textAlign="center"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Algunos proyectos destacados que hemos desarrollado recientemente.
          </Typography>
        </MotionBox>

        <Box mt={5} position="relative">
          <Slider {...sliderSettings}>
            {projects.map((project, index) => (
              <Box key={index} px={0.03} onClick={() => handleOpen(project)} sx={{ cursor: 'pointer' }}>
                <Grid container spacing={4}>
                    <MotionBox
                      sx={{
                        position: 'relative',
                        borderRadius: 2,
                        overflow: 'hidden',
                        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        m: 1, // <<< 🔥 Aquí margen para separar las tarjetas
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
                          width: 500,
                          height: 300,
                          objectFit: 'cover',
                        }}
                      />

                      {/* Overlay oscuro */}
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
                          {project.title}
                        </Typography>
                        <Box
                          sx={{
                            mt: 1,
                            bgcolor: 'primary.main',
                            display: 'inline-block',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: '#1c1c1e'
                          }}
                        >
                          {project.category || 'Proyecto'}
                        </Box>
                      </Box>
                    </MotionBox>
                </Grid>
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