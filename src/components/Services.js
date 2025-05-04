import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import { Code, Build, SupportAgent, Speed, Link, Security } from '@mui/icons-material';
import MotionBox from './MotionBox';

const services = [
  {
    title: 'Desarrollo Web',
    description: 'Creamos sitios web modernos, rápidos y a la medida de tus necesidades.',
    icon: <Code sx={{ fontSize: 50, color: '#60ce89' }} />,
  },
  {
    title: 'Sistemas a Medida',
    description: 'Diseñamos e implementamos sistemas que automatizan y mejoran tus procesos.',
    icon: <Build sx={{ fontSize: 50, color: '#32c4e3' }} />,
  },
  {
    title: 'Consultoría Tecnológica',
    description: 'Te ayudamos a tomar decisiones estratégicas con base en tecnología.',
    icon: <SupportAgent sx={{ fontSize: 50, color: '#e39e32' }} />,
  },
  {
    title: 'Optimización de Rendimiento',
    description: 'Aceleramos tu sitio y reducimos tiempos de carga para una mejor experiencia del usuario.',
    icon: <Speed sx={{ fontSize: 50, color: '#60ce89' }} />,
  },
  {
    title: 'Integración con APIs',
    description: 'Conectamos tus sistemas con servicios externos como pasarelas de pago, CRMs o plataformas de terceros.',
    icon: <Link sx={{ fontSize: 50, color: '#32c4e3' }} />,
  },
  {
    title: 'Mantenimiento y Soporte',
    description: 'Brindamos seguimiento continuo para que tu sitio esté siempre actualizado, seguro y funcionando correctamente.',
    icon: <Security sx={{ fontSize: 50, color: '#e39e32' }} />,
  },
];

const Services = () => {
  const theme = useTheme();

  return (
    <Box
      id="services"
      sx={{
        py: 10,
        backgroundColor: theme.palette.sectionBackgrounds.primary,
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
          <Typography
            variant="h4"
            gutterBottom
            fontWeight="bold"
            textAlign="center"
          >
            Servicios
          </Typography>
          <Typography
            variant="body1"
            paragraph
            textAlign="center"
            sx={{ maxWidth: 600, mx: 'auto', opacity: 0.7 }}
          >
            Ofrecemos soluciones adaptadas a tu empresa, siempre con tecnología de punta y enfoque en resultados.
          </Typography>
        </MotionBox>

        <Grid container spacing={4} mt={1} justifyContent="center">
          {services.map((service, index) => {
            const positionInRow = index % 3;
            const delays = [0.2, 0, 0.2];
            const delay = delays[positionInRow] + Math.floor(index / 3) * 0.6;

            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MotionBox
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 4,
                  }}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay }}
                  viewport={{ once: true }}
                >
                  {service.icon}
                  <Typography
                    variant="subtitle1"
                    sx={{ mt: 2, textTransform: 'uppercase', fontWeight: 900, fontSize: 15 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, maxWidth: 280, opacity: 0.7 }}>
                    {service.description}
                  </Typography>
                </MotionBox>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
