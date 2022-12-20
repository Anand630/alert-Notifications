import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)
  return (
    <li className="notification-container">
      {children}
      <GrFormClose className="close-button" />
    </li>
  )
}

export default Notification
