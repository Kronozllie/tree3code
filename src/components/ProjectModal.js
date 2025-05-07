import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
  CardMedia,
  Chip,
  Box,
} from '@mui/material';
//import { Facebook, Twitter, LinkedIn, GitHub } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const ProjectModal = ({ open, project, onClose }) => {
  const { t } = useTranslation();

  if (!project) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        {t(`portfolio.projects.${project.key}.title`)}
      </DialogTitle>

      <DialogContent dividers>
        {/* Imagen principal */}
        <CardMedia
          component="img"
          height="300"
          image={project.image}
          alt={t(`portfolio.projects.${project.key}.title`)}
          sx={{ mb: 3, borderRadius: 2 }}
        />

        {/* Contenido dividido en 2 columnas */}
        <Grid container spacing={4}>
          {/* Columna izquierda: Descripción */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              {t('portfolio.modal.descriptionTitle')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t(`portfolio.projects.${project.key}.long`)}
            </Typography>

            {/* Compartir */}
            {/* <Box mt={4}>
              <Typography variant="subtitle2" gutterBottom>{t('portfolio.modal.share')}</Typography>
              <Box display="flex" gap={1}>
                <Tooltip title={t('portfolio.modal.social.facebook')}>
                  <Facebook color="primary" />
                </Tooltip>
                <Tooltip title={t('portfolio.modal.social.twitter')}>
                  <Twitter color="primary" />
                </Tooltip>
                <Tooltip title={t('portfolio.modal.social.linkedin')}>
                  <LinkedIn color="primary" />
                </Tooltip>
                <Tooltip title={t('portfolio.modal.social.github')}>
                  <GitHub />
                </Tooltip>
              </Box>
            </Box> */}
          </Grid>

          {/* Columna derecha: Detalles */}
          <Grid item xs={12} md={4}>
            {/* <Typography variant="h6" gutterBottom>
              {t('portfolio.modal.details')}
            </Typography>

            <Typography variant="body2" gutterBottom>
              <b>{t('portfolio.modal.client')}:</b> {project.client || t('portfolio.modal.clientUnknown')}
            </Typography> */}

            {/* <Typography variant="body2" gutterBottom>
              <b>{t('portfolio.modal.website')}:</b>{' '}
              {project.website ? (
                <Link href={project.website} target="_blank" rel="noopener">
                  {t('portfolio.modal.visitSite')}
                </Link>
              ) : (
                t('portfolio.modal.notAvailable')
              )}
            </Typography> */}

            {project.skills && project.skills.length > 0 && (
              <Box mt={2}>
                <Typography variant="subtitle2" gutterBottom>{t('portfolio.modal.skills')}</Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {project.skills.map((skill, idx) => (
                    <Chip key={idx} label={skill} color="warning"
                    sx={{
                      boxShadow: 'none',
                      backgroundColor: '#e39e32',
                      '&:hover': {
                        backgroundColor: '#edae4c',
                        boxShadow: 'none',
                      },
                    }} />
                  ))}
                </Box>
              </Box>
            )}

            {/* <Box mt={4}>
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar src={project.avatar || '/images/default-avatar.jpg'} />
                <Box>
                  <Typography variant="subtitle2">{project.author || t('portfolio.modal.unknownAuthor')}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    CEO & Founder
                  </Typography>
                </Box>
              </Box>
            </Box> */}
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="warning" variant="contained"
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
        }}>
          {t('portfolio.modal.close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectModal;
