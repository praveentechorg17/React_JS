import React, { useEffect,useState } from 'react'
import axios from "axios"
function Example1() {
      let [data,setdata]=useState([])
      
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((Response) => {
            console.log(Response.data)
            setdata(Response.data)
            
        })
    
    
    },[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>email</th>
                                <th>price</th>
                                <th>username</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                data.length>0?<> {
                                    data.map((mmmm)=>{
                                        return <tr key={mmmm.id}>
                                            <td>{mmmm.id}</td>
                                            <td>{mmmm.name}</td>
                                            <td>{mmmm.email}</td>
                                            <td>{mmmm.phone}</td>
                                            <td>{mmmm.username}</td>
                                        </tr>
                                    })
                                }</>:null
                                }

                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Example1