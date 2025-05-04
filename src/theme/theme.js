import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette:{
        primary: { main: '#0050b3' },
        secondary: { main: '#009688' },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
});

export default theme;