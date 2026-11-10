import { useEffect } from 'react'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'
import { useColorScheme } from '@mui/material/styles'

const palettes = {
  dark: { color1: '#0f4f47', color2: '#2dd4bf', color3: '#0a0c0d', brightness: 1.1 },
  // Light: tints of the light-mode accent green (#0f766e), no white, so the green carries the gradient.
  // Earlier versions: #8fe0d3 / #f6f5f1 / #5cc9ba (brightness 1.1), #9fe3d6 / #fbf3e6 / #b9cdfa (1.3),
  // #b4ecd9 / #effaf5 / #7dd6ba (1.3), and sage #b5cca6 / #d6e5cb / #8db07f (1.15).
  light: { color1: '#5fb3a9', color2: '#8ccfc3', color3: '#3e9d93', brightness: 1.1 },
}

type Props = { onReady?: () => void }

/** Animated 3D gradient behind the hero. Loaded lazily, so it never blocks the first paint. */
export default function ShaderBackground({ onReady }: Props) {
  const { mode, systemMode } = useColorScheme()
  const resolved = (mode === 'system' ? systemMode : mode) === 'light' ? 'light' : 'dark'
  const colors = palettes[resolved]

  // Setting up WebGL briefly blocks the browser. Wait until it has settled and the first
  // frames are drawn before announcing "ready", so the fade-in doesn't stutter.
  useEffect(() => {
    const timer = window.setTimeout(() => requestAnimationFrame(() => onReady?.()), 350)
    return () => window.clearTimeout(timer)
  }, [onReady])

  return (
    <ShaderGradientCanvas
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      pixelDensity={1}
      fov={45}
      pointerEvents="none"
      lazyLoad={false} // Hero.tsx decides when to mount and unmount, so the fade-in can replay
    >
      <ShaderGradient
        control="props"
        type="plane"
        animate="on"
        uSpeed={0.2}
        uStrength={4}
        uDensity={1.3}
        uFrequency={5.5}
        uAmplitude={1}
        uTime={0}
        range="disabled"
        grain="off"
        lightType="3d"
        brightness={colors.brightness}
        reflection={0.1}
        cAzimuthAngle={180}
        cPolarAngle={90}
        cDistance={3.6}
        cameraZoom={1}
        positionX={-1.4}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={10}
        rotationZ={50}
        color1={colors.color1}
        color2={colors.color2}
        color3={colors.color3}
      />
    </ShaderGradientCanvas>
  )
}
