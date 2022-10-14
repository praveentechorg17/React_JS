import React from 'react'
import CompB from './CompB'
// import CompB from './CompB'

 const CompA = () => {
    let userdetails={
        id:101,
        name:"lokesh",
        salary:45000
    }
  return (
    <div>
        {/* <h1>{userdetails.id}</h1>
        <h1>{userdetails.name}</h1>
        <h1>{userdetails.salary}</h1> */}
<CompB one={userdetails.id} two={userdetails.name} three={userdetails.salary}/>

    </div>
  )
}
export default CompA
