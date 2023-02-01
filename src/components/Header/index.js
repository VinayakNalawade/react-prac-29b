import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <Link className="link" to="/">
      Home
    </Link>
    <Link className="link" to="/about">
      About
    </Link>
  </div>
)

export default Header
