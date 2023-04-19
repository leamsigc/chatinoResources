import type { User } from 'lucia-auth'

export default function useUser () {
  return useState<User | null>('user', () => null)
}
