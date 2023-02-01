import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

const Login = props => {
  const {history} = props
  const setCookie = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    Cookies.set('jwt_token', data.jwt_token, {expires: 30})

    history.replace('/')
  }

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="mainContainer">
      <h1>Please Login</h1>
      <button type="button" onClick={setCookie}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
