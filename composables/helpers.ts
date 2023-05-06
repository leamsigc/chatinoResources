import { breakpointsTailwind, useBreakpoints, useMemoize } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

export const useIsMobile = () => {
  return useMemoize(() => {
    return breakpoints.sm
  })
}

export const useIsTablet = () => {
  return useMemoize(() => {
    return breakpoints.md
  })
}

export const useIsSmallDesktop = () => {
  return useMemoize(() => {
    return breakpoints.lg
  })
}
