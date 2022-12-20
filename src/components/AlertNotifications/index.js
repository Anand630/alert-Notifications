import {AiFillCheckCircle} from 'react-icons/ai' // Success
import {RiErrorWarningFill} from 'react-icons/ri' // Error
import {MdWarning, MdInfo} from 'react-icons/md' // Warning, Info

import Notification from '../Notification'
import './index.css'

const notificationsDetailsList = [
  {
    id: 1,
    icon: 'AiFillCheckCircle',
    heading: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    id: 2,
    icon: 'RiErrorWarningFill',
    heading: 'Error',
    description:
      'Sorry, you are not authorized to have the access to delete the file',
  },
  {
    id: 3,
    icon: 'MdWarning',
    heading: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 4,
    icon: 'MdInfo',
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const notificationTypeConstants = ['SUCCESS', 'ERROR', 'WARNING', 'INFO']

const successNotificationDetails = () => (
  <>
    <AiFillCheckCircle className="success-icon" />
    <div className="heading-description-container">
      <h1 className="success-heading">Success</h1>
      <p className="description">You can access all the files in the folder</p>
    </div>
  </>
)

const errorNotificationDetails = () => (
  <>
    <RiErrorWarningFill className="error-icon" />
    <div className="heading-description-container">
      <h1 className="error-heading">Error</h1>
      <p className="description">
        Sorry, you are not authorized to have access to delete the file
      </p>
    </div>
  </>
)

const warningNotificationDetails = () => (
  <>
    <MdWarning className="warning-icon" />
    <div className="heading-description-container">
      <h1 className="warning-heading">Warning</h1>
      <p className="description">
        Viewers of this file can see comments and suggestions
      </p>
    </div>
  </>
)

const infoNotificationDetails = () => (
  <>
    <MdInfo className="info-icon" />
    <div className="heading-description-container">
      <h1 className="info-heading">Info</h1>
      <p className="description">Anyone on the internet can view these files</p>
    </div>
  </>
)

const getResultantView = type => {
  switch (type) {
    case notificationTypeConstants[0]:
      return successNotificationDetails()
    case notificationTypeConstants[1]:
      return errorNotificationDetails()
    case notificationTypeConstants[2]:
      return warningNotificationDetails()
    case notificationTypeConstants[3]:
      return infoNotificationDetails()
    default:
      return null
  }
}

// component

const AlertNotifications = () => (
  <div className="alert-notifications-home-container">
    <h1 className="alert-notifications-heading">Alert Notifications</h1>
    <ul className="all-notifications-container">
      {notificationTypeConstants.map(eachType => (
        <Notification>{getResultantView(eachType)}</Notification>
      ))}
    </ul>
  </div>
)

export default AlertNotifications
