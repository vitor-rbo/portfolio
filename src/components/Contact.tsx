import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Section from './Section'
import ArrowLink from './ArrowLink'
import { profile } from '../content'
import { useI18n } from '../i18n'

export default function Contact() {
  const { t } = useI18n()
  return (
    <Section id="contact" index={t.contact.index} title={t.contact.title}>
      <Typography sx={{ maxWidth: 520, fontSize: { xs: 17, md: 19 }, color: 'text.secondary', mb: 4 }}>
        {t.contact.lead}
      </Typography>

      <Link
        href={`mailto:${profile.email}`}
        sx={{
          display: 'inline-block',
          fontFamily: '"Space Grotesk Variable", sans-serif',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          fontSize: { xs: 22, sm: 34, md: 44 },
          color: 'text.primary',
          overflowWrap: 'anywhere',
          mb: 5,
          transition: 'color .2s',
          '&:hover': { color: 'primary.main' },
        }}
      >
        {profile.email}
      </Link>

      <Stack direction="row" spacing={3.5} sx={{ alignItems: 'center', flexWrap: 'wrap', rowGap: 2.5 }}>
        <ArrowLink href={profile.linkedin}>LinkedIn</ArrowLink>
        <ArrowLink href={profile.github}>GitHub</ArrowLink>
      </Stack>
    </Section>
  )
}
