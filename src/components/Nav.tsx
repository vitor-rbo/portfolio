import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import { useColorScheme } from '@mui/material/styles'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from './Logo'
import { useI18n } from '../i18n'
import { monoFont } from '../theme'
import type { Lang } from '../content'

function ThemeToggle() {
  const { t } = useI18n()
  const { mode, systemMode, setMode } = useColorScheme()
  if (!mode) return <Box sx={{ width: 34, height: 34 }} />
  const resolved = mode === 'system' ? systemMode : mode
  const next = resolved === 'dark' ? 'light' : 'dark'
  return (
    <IconButton
      aria-label={next === 'light' ? t.nav.toLight : t.nav.toDark}
      onClick={() => setMode(next)}
      size="small"
      sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
    >
      {resolved === 'dark' ? <LightModeOutlinedIcon fontSize="small" /> : <DarkModeOutlinedIcon fontSize="small" />}
    </IconButton>
  )
}

function LanguageToggle() {
  const { lang, setLang, t } = useI18n()
  const options: Lang[] = ['en', 'pt']
  return (
    <Box
      role="group"
      aria-label={t.nav.language}
      sx={{ display: 'flex', alignItems: 'center', gap: 0.75, fontFamily: monoFont, fontSize: 12, mr: 0.5 }}
    >
      {options.map((l, i) => (
        <Box key={l} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          {i > 0 && <Box component="span" sx={{ color: 'divider' }}>/</Box>}
          <ButtonBase
            lang={l}
            aria-pressed={lang === l}
            onClick={() => setLang(l)}
            sx={{
              fontFamily: 'inherit',
              fontSize: 'inherit',
              fontWeight: lang === l ? 600 : 400,
              color: lang === l ? 'text.primary' : 'text.secondary',
              px: 0.25,
              borderRadius: 0.5,
              transition: 'color .2s',
              '&:hover': { color: 'text.primary' },
            }}
          >
            {l.toUpperCase()}
          </ButtonBase>
        </Box>
      ))}
    </Box>
  )
}

export default function Nav() {
  const { t } = useI18n()
  const [anchor, setAnchor] = useState<HTMLElement | null>(null)

  const links = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        backdropFilter: 'blur(14px)',
        backgroundColor: 'color-mix(in srgb, var(--mui-palette-background-default) 80%, transparent)',
        borderBottom: 1,
        borderColor: 'divider',
        backgroundImage: 'none',
      }}
    >
      <Toolbar sx={{ width: '100%', maxWidth: 1120, mx: 'auto', px: { xs: 2, sm: 4 } }} disableGutters>
        <Link href="#top" sx={{ display: 'flex', mr: 'auto' }} aria-label={t.nav.backToTop}>
          <Logo />
        </Link>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3.5, mr: 3 }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              sx={{ fontSize: 14, color: 'text.secondary', transition: 'color .2s', '&:hover': { color: 'text.primary' } }}
            >
              {l.label}
            </Link>
          ))}
        </Box>

        <LanguageToggle />
        <ThemeToggle />

        <IconButton
          aria-label={t.nav.openMenu}
          size="small"
          onClick={(e) => setAnchor(e.currentTarget)}
          sx={{ display: { xs: 'inline-flex', sm: 'none' }, ml: 1, color: 'text.secondary' }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
          {links.map((l) => (
            <MenuItem key={l.href} component="a" href={l.href} onClick={() => setAnchor(null)}>
              {l.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
