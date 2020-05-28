import React, { useState, useEffect } from "react"
import { useFirebase } from "gatsby-plugin-firebase"
import { getUser } from "../../utils/auth"

export const FirebaseContext = React.createContext()

export const FirebaseProvider = ({ children }) => {
  const [firebase, setFirebase] = useState()

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

export const UserSavedPostsContext = React.createContext()

export const UserSavedPostsProvider = ({ children }) => {
  const [userSavedPosts, setUserSavedPosts] = React.useState([])
  // useMemo ensures the provider value will only update when userSavedPosts updates
  const value = React.useMemo(() => [userSavedPosts, setUserSavedPosts], [
    userSavedPosts,
  ])

  return (
    <UserSavedPostsContext.Provider value={value}>
      {children}
    </UserSavedPostsContext.Provider>
  )
}

export const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})
  // const [pending, setPending] = useState(true)

  // if (pending) {
  //   return <>Loading...</>
  // }

  useEffect(() => {
    const user = getUser()

    setCurrentUser(user)
  }, [])

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  )
}
