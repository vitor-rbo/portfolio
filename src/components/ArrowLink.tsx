import type { ReactNode } from 'react'
import Link from '@mui/material/Link'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

type ArrowLinkProps = {
  href: string
  children: ReactNode
  external?: boolean
}

export default function ArrowLink({ href, children, external = true }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        color: 'text.primary',
        fontWeight: 500,
        borderBottom: 1,
        borderColor: 'divider',
        pb: '2px',
        transition: 'color .2s, border-color .2s',
        '& svg': { fontSize: 15, transition: 'transform .2s' },
        '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
        '&:hover svg': { transform: 'translate(2px, -2px)' },
      }}
    >
      {children}
      <ArrowOutwardIcon />
    </Link>
  )
}
