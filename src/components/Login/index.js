import React from 'react'

function Login(){
  const baseUrl = `https://accounts.spotify.com/authorize`
  const clientId = `9d970c471e104a17a5d533ce0458c4f6`
  const responseType = `token`
  const redirectUri = `http://localhost:3000/dashboard`
  const scope = `user-read-recently-played`

  return(
    <a href={`${baseUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`}>Login</a>
  )
}

export default Login