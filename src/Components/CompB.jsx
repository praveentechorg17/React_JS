import React from "react"
const CompB=(Props)=>{
    console.log(Props);
return(
    <div>
        <h1>{Props.userid}</h1>
        <h1>{Props.username}</h1>
        <h1>{Props.usersalary}</h1>
    </div>
)
}
export default CompB