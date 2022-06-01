import { useContext, createContext, useState } from 'react'
import mockDev from '../mocks/octocat.json'
import useLocalStorage from 'use-local-storage'
import useFetch from 'use-http'

const Endpoint = 'https://api.github.com/users'
const AppContext = createContext()

export function AppProvider({ children }) {
  const prevDev = localStorage.getItem('dev')
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState('')
  const [dev, setDev] = useLocalStorage('dev', prevDev ? prevDev : mockDev)
  const { get, response, loading } = useFetch(Endpoint)

  const handleSearch = async username => {
    setError(false)
    const newDev = await get(username)
    if (response.ok) setDev(newDev)
    if (!response.ok) setError(true)
  }

  return (
    <AppContext.Provider
      value={{
        dev,
        handleSearch,
        setSearchTerm,
        searchTerm,
        loading,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
