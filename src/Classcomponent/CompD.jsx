import React from "react";
class CompD extends React.Component{

    render(){
        return(
      <div>
        <pre>
            {JSON.stringify(this.props)}
        </pre>
        <h1>{this.props.one.id}</h1>
        <h1>{this.props.one.name}</h1>  
        <h1>{this.props.one.salary}</h1>  

        <h2>{this.props.two[2]}</h2>
        <h2>{this.props.msg}</h2>
      </div>
        )
        
    }
}
export default CompD