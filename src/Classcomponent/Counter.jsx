import React from "react";
class Counter extends React.Component{
    state={
        qty:1
    }
    incrhandler=()=>{
        this.setState({qty:this.state.qty+1})
    }
    decrhandler=()=>{
        this.setState({qty:this.state.qty-1})
    }
    render(){
        return <div>
                    <h3>Product Counter/Qty:{this.state.qty}</h3>
                    &nbsp;&nbsp;<button onClick={this.decrhandler}>-</button>&nbsp;&nbsp;&nbsp;
                    <button onClick={this.incrhandler}>+</button>




        </div>
            
            
        
    }
}
export default Counter
