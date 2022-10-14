import React from "react"
const CompB=(Props)=>{
    console.log(Props);
return(
    <div>
      <h1>{Props.one}</h1>
      <h1>{Props.two}</h1>
      <h1>{Props.three}</h1>
    </div>
)
}
export default CompB