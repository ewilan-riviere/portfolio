export function useSidebar() {
  return useState<boolean>('sidebar', () => false)
}
