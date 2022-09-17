import React  from 'react'
function UserInfo() {
 
  return (
    <div>Name :{localStorage.getItem('name')}</div>
  )
}

export default UserInfo