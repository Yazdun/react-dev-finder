import { useContext, createContext } from 'react'
import useLocalStorage from 'use-local-storage'

const AppContext = createContext()

export function AppProvider({ children }) {
  return <AppContext.Provider value={'hello'}>{children}</AppContext.Provider>
}

export function useApp() {
  return useContext(AppContext)
}
