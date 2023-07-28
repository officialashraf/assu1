import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setdata] = useState([])
    const [tabledark, setTableDark] = useState("");
    function getData() {
        axios.get("https://64c1207ffa35860baea00693.mockapi.io/crud_react")
            .then((res) => {
                console.log(res.data);
                setdata(res.data);
            })
    }

    useEffect(() => {
        getData();
    }, []);

    const setLocalStorage = (id, email, password, name, number, date) => {
        return (
            localStorage.setItem("id", id),
            localStorage.setItem("email", email),
            localStorage.setItem("password", password),
            localStorage.setItem("name", name),
            localStorage.setItem("number", number),
            localStorage.setItem("date", date)
        )
    }

    const handleDelete = (id) => {
        axios.delete(`https://64c1207ffa35860baea00693.mockapi.io/crud_react/${id}`)
            .then(() => {
                getData();
            })
    }
    return (
        <>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" 
                          onClick={() => {
                            if (tabledark === "table-dark") setTableDark("");
                            else setTableDark("table-dark");
                          }}
                />

            </div>
            <div className='d-flex justify-content-between m-3'>
                <h2>Read Data</h2>
                <Link to={'/'} ><button className='btn btn-warning'> +Create Data</button></Link>
            </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Birth Date</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {
                    data.map((eachData) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>{eachData.password}</td>
                                        <td>{eachData.number}</td>
                                        <td>{eachData.date}</td>
                                        <td>
                                            <Link to={'/update'}>
                                                <button className="btn-success" onClick={() => setLocalStorage(eachData.id, eachData.email, eachData.passsword, eachData.name, eachData.number, eachData.date)}> Edit</button>
                                            </Link>
                                        </td>
                                        <td><button className="btn-danger" onClick={() => handleDelete(eachData.id)}> Delete</button></td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Read