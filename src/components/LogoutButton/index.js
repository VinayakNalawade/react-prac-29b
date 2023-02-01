import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const LogoutButton = props => {
  const jwtToken = () => {
    Cookies.remove('jwt_token')

    const {history} = props
    history.replace('/login')
  }
  return (
    <button onClick={jwtToken} type="button">
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
