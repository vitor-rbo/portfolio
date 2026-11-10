import { Suspense, lazy } from 'react'
import Box from '@mui/material/Box'
import SilentBoundary from './SilentBoundary'
import type { GradientBackdrop } from './useGradientBackdrop'

// three.js comes with this package, so keep it in its own chunk, loaded after the first paint.
const ShaderBackground = lazy(() => import('./ShaderBackground'))

// Keeps the hero text readable: fades the gradient out on the left and at the bottom.
const READABILITY_OVERLAY = `
  linear-gradient(to bottom, transparent 65%, var(--mui-palette-background-default) 100%),
  linear-gradient(90deg,
    var(--mui-palette-background-default) 0%,
    color-mix(in srgb, var(--mui-palette-background-default) 75%, transparent) 40%,
    transparent 85%)`

/** The animated gradient plus a readability overlay. Fills its positioned parent. */
export default function GradientLayers({ backdrop }: { backdrop: GradientBackdrop }) {
  const { mounted, ready, onReady, onFailed } = backdrop
  const fade = ready ? 'opacity 2s ease-in-out' : 'none'

  return (
    <>
      <Box
        aria-hidden
        sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: ready ? 1 : 0, transition: fade }}
      >
        {mounted && (
          <SilentBoundary onError={onFailed}>
            <Suspense fallback={null}>
              <ShaderBackground onReady={onReady} />
            </Suspense>
          </SilentBoundary>
        )}
      </Box>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: ready ? 1 : 0,
          transition: fade,
          background: READABILITY_OVERLAY,
        }}
      />
    </>
  )
}
