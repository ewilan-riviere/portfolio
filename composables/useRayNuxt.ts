import type { Ray } from 'node-ray'
// @ts-expect-error no types
import { ray } from 'node-ray/web'

interface IRay extends Ray {
  color: (color: 'green' | 'orange' | 'red' | 'blue' | 'purple' | 'gray') => Ray
}

export function useRayNuxt() {
  if (process.client) {
    return (...args: any[]) =>
      ray(...args) as IRay
  }
  else {
    return () =>
      ray() as IRay
  }
}
