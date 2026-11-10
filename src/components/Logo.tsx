import Box from '@mui/material/Box'

const V_PATH = 'M2 6 L10 26 L18 6'

/**
 * "VO" mark: a V and an O, both complete letters, interlocked like chain links.
 * The V sits in front and breaks the ring where they cross.
 * The V follows the text colour, the ring uses the accent colour.
 */
export default function Logo({ size = 30 }: { size?: number }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 33 32"
      width={(size * 33) / 32}
      height={size}
      fill="none"
      aria-hidden
      sx={{
        display: 'block',
        overflow: 'visible',
        '& .v': { stroke: 'var(--mui-palette-text-primary)' },
        '& .o': {
          stroke: 'var(--mui-palette-primary-main)',
          fill: 'transparent',
          transformOrigin: '21.5px 16px',
          transition: 'fill .25s, transform .25s',
        },
        'a:hover & .o': {
          fill: 'color-mix(in srgb, var(--mui-palette-primary-main) 22%, transparent)',
          transform: 'scale(1.06)',
        },
      }}
    >
      <defs>
        <mask id="vo-gap" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="32">
          <rect width="33" height="32" fill="white" />
          <path d={V_PATH} stroke="black" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </mask>
      </defs>
      <circle className="o" cx="21.5" cy="16" r="10" strokeWidth="2.6" mask="url(#vo-gap)" />
      <path className="v" d={V_PATH} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  )
}
