import { create } from "zustand"
import { persist } from "zustand/middleware"

interface UserStore {
  token: string | null
  setToken: (token: string | null) => void
}

export const userState = create<UserStore>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
    }),
    {
      name: "user-storage",
    }
  )
)