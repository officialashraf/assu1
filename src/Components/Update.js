import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export const Update = () => {
    const [id, setid] = useState(0)
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [password, setpassword] = useState("")
    const [date, setdate] = useState("");

    const navigate = useNavigate();
     
    useEffect(() => {
      setid(localStorage.getItem("id"));
      setemail(localStorage.getItem("email"));
      setpassword(localStorage.getItem("password"));
      setnumber(localStorage.getItem("number"));
      setname(localStorage.getItem("name"));
      setdate(localStorage.getItem("date"));
     }, []);

     const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(
            `https://64c1207ffa35860baea00693.mockapi.io/crud_react/${id}`,
            {
                name: name,
                email: email,
                password: password,
                number: number,
                date: date
            })
            .then(() => {
            navigate('/read');
        });
     }
     
  return (
   <>
   <h2>Update Data</h2>
   <form>
   <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=> setname(e.target.value)} />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=> setemail(e.target.value)} />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={(e)=> setpassword(e.target.value)}  />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Mobile Number</label>
    <input type="number" className="form-control" value={number}  onChange={(e)=> setnumber(e.target.value)} />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Birth Date</label>
    <input type="date" className="form-control" value={date} onChange={(e)=> setdate(e.target.value)} />
  </div> 
  <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate} >Update</button>
  <Link to={'/read'}><button className='btn btn-secondary mx-2'>Back</button></Link>
</form>
   </>
  )
}
