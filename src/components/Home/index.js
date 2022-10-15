// Write your code here
import {Component} from 'react'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClick = () => {
    this.setState(previous => ({isLoggedIn: !previous.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="main-container">
        <div className="card-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onClick} />
          ) : (
            <Login login={this.onClick} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
