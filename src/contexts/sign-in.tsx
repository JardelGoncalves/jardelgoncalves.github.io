import { createContext, useState, useEffect } from 'react'

import { User } from 'interfaces/user'
import { AuthService } from '../services/auth'
import Router from 'next/router'
import { DASHBOARD } from '../utils/constants/site'

type CredentialsData = {
  email: string
  password: string
}

interface SignInProps {
  user: User | null
  loading: boolean
  signIn: (credentials: CredentialsData) => void
}

export const SignInContext = createContext({} as SignInProps)

type SignInProviderProps = {
  children?: React.ReactNode
}

export const SignInProvider = ({ children }: SignInProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const userRecovered = AuthService.recoveryUser()
    setUser(userRecovered)
  }, [])

  const signIn = async (credentials: CredentialsData) => {
    setLoading(true)
    const result = await AuthService.signIn(credentials)
    setLoading(false)

    if (result?.success) {
      setUser(result.data)
      Router.push(DASHBOARD)
      return
    }
    setUser(null)
  }

  return (
    <SignInContext.Provider
      value={{
        user,
        signIn,
        loading
      }}
    >
      {children}
    </SignInContext.Provider>
  )
}
