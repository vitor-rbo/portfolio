import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowLink from './ArrowLink'
import { profile } from '../content'
import { useI18n } from '../i18n'
import { monoFont } from '../theme'

export default function Hero() {
  const { t } = useI18n()
  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 'calc(100svh - 56px)', md: 'calc(100svh - 64px)' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Decorative background: faint dot grid and a soft accent glow. */}
      <Box
        aria-hidden
        sx={(theme) => ({
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          '--dot': 'rgba(255, 255, 255, 0.14)',
          ...theme.applyStyles('light', { '--dot': 'rgba(20, 24, 26, 0.34)' }),
          backgroundImage: 'radial-gradient(var(--dot) 1.2px, transparent 1.2px)',
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 75% 45%, #000 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 75% 45%, #000 20%, transparent 75%)',
        })}
      />
      <Box
        aria-hidden
        sx={(theme) => ({
          position: 'absolute',
          width: { xs: 360, md: 620 },
          height: { xs: 360, md: 620 },
          right: { xs: -180, md: '4%' },
          top: { xs: '8%', md: '12%' },
          borderRadius: '50%',
          pointerEvents: 'none',
          '--glow': '22%',
          ...theme.applyStyles('light', { '--glow': '11%' }),
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--mui-palette-primary-main) var(--glow), transparent), transparent 68%)',
          filter: 'blur(20px)',
          animation: 'drift 14s ease-in-out infinite alternate',
          '@keyframes drift': {
            from: { transform: 'translate(0, 0) scale(1)' },
            to: { transform: 'translate(-30px, 24px) scale(1.08)' },
          },
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        })}
      />

      <Box sx={{ position: 'relative', width: '100%', maxWidth: 1120, mx: 'auto', px: { xs: 2, sm: 4 }, py: 10 }}>
        <Typography sx={{ fontFamily: monoFont, fontSize: 13, color: 'text.secondary', mb: 2.5, letterSpacing: '0.04em' }}>
          {t.hero.role}
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: 52, sm: 76, md: 92 }, mb: 3.5 }}>
          {profile.name}
          <Box component="span" sx={{ color: 'primary.main' }}>.</Box>
        </Typography>
        <Typography sx={{ maxWidth: 560, fontSize: { xs: 17, md: 19 }, color: 'text.secondary', mb: 5 }}>
          {t.hero.intro}
        </Typography>

        <Stack direction="row" spacing={3.5} sx={{ alignItems: 'center', flexWrap: 'wrap', rowGap: 2.5 }}>
          <ArrowLink href={profile.github}>{t.hero.github}</ArrowLink>
          <ArrowLink href={profile.linkedin}>{t.hero.linkedin}</ArrowLink>
          <ArrowLink href="#contact" external={false}>{t.hero.contact}</ArrowLink>
        </Stack>
      </Box>
    </Box>
  )
}
