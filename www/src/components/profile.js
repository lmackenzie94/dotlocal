import React, { useContext } from "react"
import { UserContext } from "./auth/context"

const Profile = () => {
  const user = useContext(UserContext)
  const accessToken = user.stsTokenManager.accessToken

  return (
    <div>
      <ul>
        <li>
          <div className="text-sm">
            <b>Name</b>:
          </div>
          <div className="pl-2 ">{`${user.displayName}`}</div>
        </li>
        <li>
          <div className="text-sm">
            <b>Email</b>:
          </div>
          <div className="pl-2 ">{`${user.email}`}</div>
        </li>
        <li>
          <div className="text-sm">
            <b>Email Verified</b>:
          </div>
          <div className="pl-2 ">{`${user.emailVerified}`}</div>
        </li>
        <li>
          <div className="text-sm">
            <b>Firebase Access Token</b>:
          </div>
          <div className="pl-2 truncate">{`${accessToken}`}</div>
        </li>
      </ul>
    </div>
  )
}

export default Profile
