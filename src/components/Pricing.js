import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider, 
  useTheme,
} from '@mui/material';
import MotionBox from './MotionBox';

const plans = [
  {
    title: 'Básico',
    price: '$5,000 MXN',
    features: [
      '1 página',
      'Responsive',
      'Formulario de contacto',
      'Dominio y hosting por 1 año',
    ],
    buttonText: 'Elegir Básico',
  },
  {
    title: 'Estándar',
    price: '$10,000 MXN',
    features: [
      'Hasta 3 secciones',
      'Animaciones',
      'SEO básico',
      'Formulario de contacto',
    ],
    buttonText: 'Elegir Estándar',
    highlight: true, // Resaltarlo como en la imagen
  },
  {
    title: 'Profesional',
    price: '$20,000 MXN',
    features: [
      'Hasta 5 secciones',
      'Integración con redes sociales',
      'Galería de imágenes',
      'Optimización de velocidad',
    ],
    buttonText: 'Elegir Profesional',
  },
  {
    title: 'Avanzado',
    price: '$30,000 MXN',
    features: [
      'Sitio personalizado',
      'Integraciones (API, pagos)',
      'Panel de administración',
      'SEO avanzado',
    ],
    buttonText: 'Elegir Avanzado',
  },
];

const Pricing = () => {
  const theme = useTheme();
  return (
    <Box id="pricing" sx={{
      py: 10,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    }}>
      <Container maxWidth={false} disableGutters>
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
            Paquetes
          </Typography>
          <Typography
            variant="body1"
            paragraph
            textAlign="center"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Escoge el paquete que se adapta mejor a tus necesidades. Todos nuestros planes incluyen desarrollo profesional y soporte.
          </Typography>
        </MotionBox>

        <Grid container spacing={2} justifyContent="center" sx={{ px: 2 }}>
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <MotionBox
  component={Card}
  elevation={plan.highlight ? 8 : 4}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, delay: index * 0.1 }}
  viewport={{ once: true }}
  sx={{
    borderRadius: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderTop: plan.highlight ? '6px solid #007bff' : 'none',
    backgroundColor: '#d4d4d4',
    color: '#1c1c1e',
  }}
>
  <CardContent sx={{ flexGrow: 1, textAlign: 'center', color: '#1c1c1e' }}>

                  <Typography
                    variant="overline"
                    fontWeight="bold"
                    display="block"
                    gutterBottom
                    color="#1c1c1e"
                  >
                    {plan.title}
                  </Typography>
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    gutterBottom
                    color="#1c1c1e"
                  >
                    {plan.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#1c1c1e"
                    mb={2}
                  >
                    por proyecto
                  </Typography>

                  <Divider color="#1c1c1e" sx={{ my: 2}} />

                  <Box component="ul" sx={{ listStyle: 'none', p: 0, mb: 3 }}>
                    {plan.features.map((feature, i) => (
                      <Typography
                        component="li"
                        key={i}
                        variant="body2"
                        sx={{ my: 1 }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>

                  <Button
                    variant={plan.highlight ? 'contained' : 'outlined'}
                    color="#cfcfcf"
                    fullWidth
                    size="large"
                    sx={{ mt: 'auto' }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
