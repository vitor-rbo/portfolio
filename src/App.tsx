import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { profile } from './content'

const YEAR = new Date().getFullYear()

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', py: 4 }}>
        <Box sx={{ maxWidth: 1120, mx: 'auto', px: { xs: 2, sm: 4 } }}>
          <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
            © {YEAR} {profile.name}
          </Typography>
        </Box>
      </Box>
    </>
  )
}
