import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Grid, CardMedia, Chip, Link, Avatar, Box } from '@mui/material';
import { Facebook, Twitter, LinkedIn, GitHub } from '@mui/icons-material';

const ProjectModal = ({ open, project, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ fontWeight: 'bold', textAlign: 'center', color:'#1c1c1e' }}>
        {project.title}
      </DialogTitle>

      <DialogContent dividers>
        {/* Imagen principal */}
        <CardMedia
          component="img"
          height="300"
          image={project.image}
          alt={project.title}
          sx={{ mb: 3, borderRadius: 2 }}
        />

        {/* Contenido dividido en 2 columnas */}
        <Grid container spacing={4}>
          {/* Columna izquierda: Descripción */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              Descripción del Proyecto
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.longDescription || "Descripción no disponible en este momento."}
            </Typography>

            {/* Compartir */}
            <Box mt={4}>
              <Typography variant="subtitle2" gutterBottom>Compartir</Typography>
              <Box display="flex" gap={1}>
                <Facebook color="primary" />
                <Twitter color="primary" />
                <LinkedIn color="primary" />
                <GitHub />
              </Box>
            </Box>
          </Grid>

          {/* Columna derecha: Detalles */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Detalles del Proyecto
            </Typography>

            {/* Cliente */}
            <Typography variant="body2" gutterBottom>
              <b>Cliente:</b> {project.client || "Cliente no especificado"}
            </Typography>

            {/* Website */}
            <Typography variant="body2" gutterBottom>
              <b>Website:</b>{' '}
              {project.website ? (
                <Link href={project.website} target="_blank" rel="noopener">
                  Visitar sitio
                </Link>
              ) : (
                "No disponible"
              )}
            </Typography>

            {/* Skills */}
            {project.skills && project.skills.length > 0 && (
              <Box mt={2}>
                <Typography variant="subtitle2" gutterBottom>Skills</Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {project.skills.map((skill, idx) => (
                    <Chip key={idx} label={skill} color="primary" />
                  ))}
                </Box>
              </Box>
            )}

            {/* Autor */}
            <Box mt={4}>
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar src={project.avatar || '/images/default-avatar.jpg'} />
                <Box>
                  <Typography variant="subtitle2">{project.author || "Autor desconocido"}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    CEO & Founder
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectModal;
