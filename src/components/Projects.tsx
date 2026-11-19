import { useState } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Section from './Section'
import ArrowLink from './ArrowLink'
import { projects, type ProjectId } from '../content'
import { useI18n } from '../i18n'
import { monoFont } from '../theme'

/** Browser-style frame around the project screenshot, with a fallback if the image is missing. */
function Screenshot({ image, alt }: { image: string; alt: string }) {
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
          src={image}
          alt={alt}
          onError={() => setFailed(true)}
          sx={{ display: 'block', width: '100%', height: 'auto' }}
        />
      )}
    </Box>
  )
}

function ProjectItem({ project, flip }: { project: (typeof projects)[number]; flip: boolean }) {
  const { t } = useI18n()
  const p = t.projects
  const text = p.items[project.id satisfies ProjectId]
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: flip ? '1fr 1.2fr' : '1.2fr 1fr' },
        gap: { xs: 5, md: 8 },
        alignItems: 'center',
      }}
    >
      <Box sx={{ order: { xs: 0, md: flip ? 1 : 0 } }}>
        <Screenshot image={project.image} alt={text.screenshotAlt} />
      </Box>

      <Box sx={{ order: { xs: 1, md: flip ? 0 : 1 } }}>
        <Typography sx={{ fontFamily: monoFont, fontSize: 12, color: 'text.secondary', mb: 1.5, letterSpacing: '0.04em' }}>
          {text.kind.toUpperCase()}
        </Typography>
        <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 38 }, mb: 0.5 }}>
          {project.name}
        </Typography>
        <Typography sx={{ color: 'primary.main', fontWeight: 500, mb: 3 }}>{text.tagline}</Typography>

        {text.description.map((para) => (
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
  )
}

export default function Projects() {
  const { t } = useI18n()
  const p = t.projects
  return (
    <Section id="projects" index={p.index} title={p.title}>
      <Stack spacing={{ xs: 10, md: 14 }}>
        {projects.map((project, i) => (
          <ProjectItem key={project.id} project={project} flip={i % 2 === 1} />
        ))}
      </Stack>
    </Section>
  )
}
