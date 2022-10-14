import React from "react"
export default class Sample extends React.Component{
Person ={
    name:"lokesh",
    email:"praveen17@gmail.com"
};
message="Welcome to banglore"

users=["praveen", "lokesh"," santhosh","gopi","vijay"]

    render(){
        return (
            <div><h1>{ this.Person.name} </h1>
            <h1>{ this.Person.email}</h1>
            <p>{this.message}</p>
            <h1>{this.users.map((ele,i)=>{
         return <p key={i}>{ele}</p>
            })}</h1>
            </div>
        )
    }
 }
 
 


