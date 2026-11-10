import type { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { monoFont } from '../theme'

type SectionProps = {
  id: string
  index: string
  title: string
  children: ReactNode
}

export default function Section({ id, index, title, children }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ scrollMarginTop: 72, py: { xs: 9, md: 14 }, borderTop: 1, borderColor: 'divider' }}
    >
      <Box sx={{ maxWidth: 1120, mx: 'auto', px: { xs: 2, sm: 4 } }}>
        <Typography
          sx={{ fontFamily: monoFont, fontSize: 13, color: 'primary.main', mb: 1.5, letterSpacing: '0.04em' }}
        >
          {index}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 }, mb: { xs: 5, md: 7 } }}>
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  )
}
