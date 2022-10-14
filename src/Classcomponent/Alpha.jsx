import React, { Component } from "react";
export default class Alpha extends Component{
    state={
        message:"welcome to hyderabad",
        user:{
            name:'lokesh',
            email:'lokesh123@gmail.com',
            salary:45000
        },
        Cplayers:["sehwag","kohli","dhoni"]
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <h1>{this.state.user.name}</h1>
                <h1>{this.state.user.email}</h1>
                <h1>{this.state.user.salary}</h1>
                <h1>{this.state.Cplayers.map((player)=>{
                    return<p>{player}</p>
                    
                })}</h1>
            </div>
        )
    }

}