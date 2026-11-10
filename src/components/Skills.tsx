import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Section from './Section'
import { useI18n } from '../i18n'
import { monoFont } from '../theme'

export default function Skills() {
  const { t } = useI18n()
  return (
    <Section id="skills" index={t.skills.index} title={t.skills.title}>
      <Box>
        {t.skills.groups.map((group) => (
          <Box
            key={group.label}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
              gap: { xs: 1.5, md: 10 },
              py: 3,
              borderTop: 1,
              borderColor: 'divider',
              '&:last-of-type': { borderBottom: 1 },
            }}
          >
            <Typography sx={{ fontFamily: monoFont, fontSize: 13, color: 'text.secondary', letterSpacing: '0.04em' }}>
              {group.label}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', columnGap: 3, rowGap: 1 }}>
              {group.items.map((item) => (
                <Typography key={item} sx={{ fontSize: { xs: 17, md: 19 }, fontWeight: 500 }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  )
}
