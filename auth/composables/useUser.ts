import type { User } from 'lucia-auth'

export const useUser = () => {
  return useState<User | null>('user', () => null)
}
