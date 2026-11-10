import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Section from './Section'
import { useI18n } from '../i18n'
import { monoFont } from '../theme'

export default function About() {
  const { t } = useI18n()
  return (
    <Section id="about" index={t.about.index} title={t.about.title}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' },
          gap: { xs: 6, md: 10 },
        }}
      >
        <Box>
          {t.about.bio.map((p) => (
            <Typography key={p} sx={{ fontSize: { xs: 17, md: 18 }, color: 'text.secondary', mb: 2.5 }}>
              {p}
            </Typography>
          ))}
        </Box>

        <Box component="dl" sx={{ m: 0, display: 'grid', gap: 2.5, alignContent: 'start' }}>
          {t.about.facts.map((f) => (
            <Box key={f.label} sx={{ borderTop: 1, borderColor: 'divider', pt: 1.5 }}>
              <Typography
                component="dt"
                sx={{ fontFamily: monoFont, fontSize: 12, color: 'text.secondary', mb: 0.5, letterSpacing: '0.04em' }}
              >
                {f.label}
              </Typography>
              <Typography component="dd" sx={{ m: 0, fontSize: 15 }}>
                {f.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  )
}
