import { useContext } from 'react'
import UserContext from '../context/UserContext'

function ChangeUser() {
  const { userName, setUserName } = useContext(UserContext)

  return (
    <>
      <button
        onClick={() => setUserName(userName === 'Pavel' ? 'Alice' : 'Pavel')}>
        Change User
      </button>
    </>
  )
}

export default ChangeUser
