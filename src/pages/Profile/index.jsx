import React from 'react'
import { Auth } from 'aws-amplify'

export const Profile = () => {
  const {
    user: {
      username,
      attributes: { email },
    },
  } = Auth

  return (
    <div className="profile">
      <div>{username}</div>
      <div>{email}</div>
    </div>
  )
}
