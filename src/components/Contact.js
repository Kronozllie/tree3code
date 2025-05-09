import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
  useTheme,
} from '@mui/material';
import MotionBox from './MotionBox';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const { t } = useTranslation();

  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = t('contact.reqname');
    if (!formData.email.trim()) {
      newErrors.email = t('contact.reqemail');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.emailerror');
    }
    if (!formData.asunto.trim()) newErrors.asunto = t('contact.reqsubject');
    if (!formData.mensaje.trim()) newErrors.mensaje = t('contact.reqmessage');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!validate()) return;

    setLoading(true);

    const res = await fetch('https://formspree.io/f/xyzwpwlz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setStatus('success');
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    } else {
      setStatus('error');
    }
  };

  const theme = useTheme();

  return (
    <Box id="contact" sx={{
      py: 10,
      backgroundColor: theme.palette.sectionBackgrounds.primary,
      color: theme.palette.text.primary,
    }}>
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
            {t('contact.title')}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            textAlign="center"
            sx={{ mx: 'auto', opacity: 0.7 }}
          >
            {t('contact.description')}
          </Typography>
        </MotionBox>

        <Grid  sx={{width: '1200' }}>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 3, sm: 5 },
                  borderRadius: 1,
                  backgroundColor: theme.palette.background.paper,
                  '& .MuiTextField-root': {
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 0,
                      '& fieldset': {
                        borderColor: theme.palette.divider,
                        borderWidth: '2px',
                      },
                    },
                  },
                }}
              >
                {status === 'success' && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    {t('contact.success')}
                  </Alert>
                )}
                {status === 'error' && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {t('contact.error')}
                  </Alert>
                )}

                {/* First row: Name and Email */}
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Grid size={{ xs: 12, md: 12 }}>
                        <TextField
                          fullWidth
                          label={t('contact.labelname')}
                          variant="outlined"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          error={!!errors.nombre}
                          helperText={errors.nombre}
                          color="warning"
                          required
                          InputLabelProps={{
                            shrink: true,
                            style: { fontWeight: 'bold' },
                          }}
                        />
                      </Grid>

                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Grid size={{ xs: 12, md: 12 }}>
                        <TextField
                          fullWidth
                          label={t('contact.labelemail')}
                          variant="outlined"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          error={!!errors.email}
                          helperText={errors.email}
                          color="warning"
                          required
                          InputLabelProps={{
                            shrink: true,
                            style: { fontWeight: 'bold' },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>

                {/* Second row: Subject (full width) */}
                <Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('contact.labelsubject')}
                      variant="outlined"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      error={!!errors.asunto}
                      helperText={errors.asunto}
                      color="warning"
                      required
                      InputLabelProps={{
                        shrink: true,
                        style: { fontWeight: 'bold' },
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Third row: Message (full width) */}
                <Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('contact.labelmessage')}
                      variant="outlined"
                      multiline
                      rows={6}
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      error={!!errors.mensaje}
                      helperText={errors.mensaje}
                      color="warning"
                      required
                      InputLabelProps={{
                        shrink: true,
                        style: { fontWeight: 'bold' },
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Submit button */}
                <Grid container justifyContent="center" sx={{ mt: 4 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    disabled={loading}
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
                    {loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      t('contact.submit')
                    )}
                  </Button>
                </Grid>
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;