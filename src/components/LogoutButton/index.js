// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const changeToLoginPage = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="log-out">
      <button type="button" onClick={changeToLoginPage}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
