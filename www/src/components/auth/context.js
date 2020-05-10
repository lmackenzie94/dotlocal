import React, { useState, useEffect } from "react"
import { useFirebase } from "gatsby-plugin-firebase"
import { getUser } from "../../utils/auth"

// export const AuthContext = React.createContext()

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null)
//   const [pending, setPending] = useState(true)

//   // if (pending) {
//   //   return <>Loading...</>
//   // }

//   useEffect(() => {
//     const user = getUser()

//     setCurrentUser(user)
//   }, [])

//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

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
