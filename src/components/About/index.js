// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-page">
      <h1>About Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default About
