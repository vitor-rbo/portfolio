import { createTheme } from '@mui/material/styles'

const headingFont = '"Space Grotesk Variable", "Inter Variable", system-ui, sans-serif'
const bodyFont = '"Inter Variable", system-ui, -apple-system, "Segoe UI", sans-serif'
export const monoFont = '"JetBrains Mono Variable", ui-monospace, "SFMono-Regular", Consolas, monospace'

export const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'data' },
  colorSchemes: {
    dark: {
      palette: {
        primary: { main: '#2dd4bf' },
        background: { default: '#0a0c0d', paper: '#111517' },
        text: { primary: '#e9eeee', secondary: '#9aa6a8' },
        divider: 'rgba(255, 255, 255, 0.09)',
      },
    },
    light: {
      palette: {
        primary: { main: '#0f766e' },
        background: { default: '#f6f5f1', paper: '#ffffff' },
        text: { primary: '#14181a', secondary: '#586366' },
        divider: 'rgba(20, 24, 26, 0.12)',
      },
    },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: bodyFont,
    h1: { fontFamily: headingFont, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.02 },
    h2: { fontFamily: headingFont, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.1 },
    h3: { fontFamily: headingFont, fontWeight: 600, letterSpacing: '-0.02em' },
    h4: { fontFamily: headingFont, fontWeight: 600, letterSpacing: '-0.02em' },
    h5: { fontFamily: headingFont, fontWeight: 600, letterSpacing: '-0.01em' },
    body1: { lineHeight: 1.7 },
    button: { textTransform: 'none', fontWeight: 500, letterSpacing: 0 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        '@media (prefers-reduced-motion: reduce)': { html: { scrollBehavior: 'auto' } },
        '::selection': { background: 'rgba(45, 212, 191, 0.3)' },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 8, padding: '10px 20px' } },
    },
    MuiLink: {
      defaultProps: { underline: 'none' },
    },
  },
})
