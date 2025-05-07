import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import { Code, Build, SupportAgent, Speed, Link, Security } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import MotionBox from './MotionBox';

const iconList = [
  <Code sx={{ fontSize: 50, color: '#60ce89' }} />,
  <Build sx={{ fontSize: 50, color: '#32c4e3' }} />,
  <SupportAgent sx={{ fontSize: 50, color: '#e39e32' }} />,
  <Speed sx={{ fontSize: 50, color: '#60ce89' }} />,
  <Link sx={{ fontSize: 50, color: '#32c4e3' }} />,
  <Security sx={{ fontSize: 50, color: '#e39e32' }} />,
];

const Services = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const services = t('services.items', { returnObjects: true });

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
            {t('services.title')}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            textAlign="center"
            sx={{ maxWidth: 600, mx: 'auto', opacity: 0.7 }}
          >
            {t('services.subtitle')}
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
                  {iconList[index]}
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
