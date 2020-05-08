import React, { useState } from "react"
import { useFirebase } from "gatsby-plugin-firebase"

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [pending, setPending] = useState(true)

  if (pending) {
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const FirebaseContext = React.createContext()

export const FirebaseProvider = ({ children }) => {
  const [firebase, setFirebase] = useState()
  //   const [pending, setPending] = useState(true)

  //   if (pending) {
  //     return <>Loading...</>
  //   }

  useFirebase(fb => {
    console.log("setting firebase")
    setFirebase(fb)
  }, [])

  return (
    <FirebaseContext.Provider value={[firebase, setFirebase]}>
      {children}
    </FirebaseContext.Provider>
  )
}
