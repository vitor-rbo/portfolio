import { Component } from 'react'
import type { ReactNode } from 'react'

type Props = { children: ReactNode; onError?: () => void }

/** Renders nothing if the children throw, so a decorative effect can never break the page. */
export default class SilentBoundary extends Component<Props, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch() {
    this.props.onError?.()
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}
