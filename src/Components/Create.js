import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [password, setpassword] = useState("")
    const [date, setdate] = useState("");


   const navigate = useNavigate();
    const header = {"Accesss-Control-Allow-Origin": ""}
    const handleSubmit =(e) =>{
        e.preventDefault();
      axios.post('https://64c1207ffa35860baea00693.mockapi.io/crud_react',{
                email: email,
                name: name,
                number: number,
                password: password,
                date : date,
                header
            })
            .then(()=>{
                navigate('/read');
            });
    }
  return <>
  <div className='d-flex justify-content-between m-3'>
  <h2>Create</h2> 
  <Link to={'/read'} ><button className='btn btn-success'>Show Data</button></Link>
  </div>
  <form>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control"  onChange={(e)=> setname(e.target.value)} />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={(e)=> setemail(e.target.value)} />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  onChange={(e)=> setpassword(e.target.value)} />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Mobile Number</label>
    <input type="number" className="form-control"  onChange={(e)=> setnumber(e.target.value)} />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Birth Date</label>
    <input type="date" className="form-control"  onChange={(e)=> setdate(e.target.value)} />
  </div> 
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
  </>
    
  
}

export default Create