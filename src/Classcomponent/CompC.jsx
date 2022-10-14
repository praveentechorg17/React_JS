import React from "react";
import CompD from "./CompD";
class CompC extends React.Component{

    state={
    message:"welcome ",
        employee_details:{
            id:101,
            name:"Rahul Gandhi",
            salary:45000,
        },
        Persons:["sehwag","kohli","dhoni"],
        

    }
    render(){
        return(
      <div>
        {/* <h1>class Component</h1>
        <h1>{this.state.employee_details.id}  </h1>
        <h1>{this.state.employee_details.name}</h1>
        <h1>{this.state.employee_details.salary}</h1>
        <h1>{this.state.Persons.map((ele)=>{
            return            <p>{ele}</p>

        })}</h1> */}
        <CompD msg={this.state.message} one={this.state.employee_details} two={this.state.Persons}/>
      </div>

        )
        
    }
}
export default CompC