import React from "react"
import { getUser } from "../utils/auth"

const Profile = () => {
  const user = getUser()
  const { displayName, email, emailVerified } = user
  const accessToken = user.stsTokenManager.accessToken

  return (
    <div>
      <ul>
        <li>
          <div className="text-sm">
            <b>Name</b>:
          </div>
          <div className="pl-2 ">{`${displayName}`}</div>
        </li>
        <li>
          <div className="text-sm">
            <b>Email</b>:
          </div>
          <div className="pl-2 ">{`${email}`}</div>
        </li>
        <li>
          <div className="text-sm">
            <b>Email Verified</b>:
          </div>
          <div className="pl-2 ">{`${emailVerified}`}</div>
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
