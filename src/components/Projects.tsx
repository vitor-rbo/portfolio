import { useState } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Section from './Section'
import ArrowLink from './ArrowLink'
import { project } from '../content'
import { useI18n } from '../i18n'
import { monoFont } from '../theme'

/** Browser-style frame around the project screenshot, with a fallback if the image is missing. */
function Screenshot() {
  const { t } = useI18n()
  const [failed, setFailed] = useState(false)
  return (
    <Box
      sx={{
        border: 1,
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        boxShadow: '0 24px 60px -30px rgba(0,0,0,0.5)',
      }}
    >
      <Box sx={{ display: 'flex', gap: 0.75, px: 1.5, py: 1.25, borderBottom: 1, borderColor: 'divider' }}>
        {[0, 1, 2].map((i) => (
          <Box key={i} sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: 'divider' }} />
        ))}
      </Box>
      {failed ? (
        <Box
          sx={{
            aspectRatio: '16 / 10',
            display: 'grid',
            placeItems: 'center',
            color: 'text.secondary',
            fontFamily: monoFont,
            fontSize: 13,
          }}
        >
          {t.projects.screenshotSoon}
        </Box>
      ) : (
        <Box
          component="img"
          src={project.image}
          alt={t.projects.screenshotAlt}
          onError={() => setFailed(true)}
          sx={{ display: 'block', width: '100%', height: 'auto' }}
        />
      )}
    </Box>
  )
}

export default function Projects() {
  const { t } = useI18n()
  const p = t.projects
  return (
    <Section id="projects" index={p.index} title={p.title}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' },
          gap: { xs: 5, md: 8 },
          alignItems: 'center',
        }}
      >
        <Screenshot />

        <Box>
          <Typography sx={{ fontFamily: monoFont, fontSize: 12, color: 'text.secondary', mb: 1.5, letterSpacing: '0.04em' }}>
            {p.kind.toUpperCase()}
          </Typography>
          <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 38 }, mb: 0.5 }}>
            {project.name}
          </Typography>
          <Typography sx={{ color: 'primary.main', fontWeight: 500, mb: 3 }}>{p.tagline}</Typography>

          {p.description.map((para) => (
            <Typography key={para} sx={{ color: 'text.secondary', mb: 2 }}>
              {para}
            </Typography>
          ))}

          <Typography sx={{ fontFamily: monoFont, fontSize: 13, color: 'text.secondary', mt: 3, mb: 3 }}>
            {project.tags.join('  ·  ')}
          </Typography>

          <Stack direction="row" spacing={3.5}>
            <ArrowLink href={project.live}>{p.live}</ArrowLink>
            <ArrowLink href={project.repo}>{p.source}</ArrowLink>
          </Stack>
        </Box>
      </Box>
    </Section>
  )
}
