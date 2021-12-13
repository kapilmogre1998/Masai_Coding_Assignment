import { useState } from "react"
import { UseNotification } from "./CustomHooks"
import axios from 'axios'

export const Form = ()=>{
    const [firstName,setFirstName] = useState()
    const [lastName,setLasttName] = useState()
    const [dob,setDob] = useState()
    const [gender,setGender] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault();
        UseNotification({
            firstName,
            lastName,
            dob,
            gender
        })
        axios.post("http://localhost:5000/formdata",{
            firstName,
            lastName,
            dob,
            gender
        })
    }

    return (
        <div className="mx-4">
        <div className="container-fluid border border-dark p-4 my-3">
        <h2 className="text-center text-decoration-underline text-primary">Form</h2>
        <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
            <label>First Name</label>
            <input type="text" className="form-control" placeholder="First name" onInput={(e) => setFirstName(e.target.value)} aria-label="First name"/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
        <label>Last Name</label>
            <input type="text" className="form-control" onInput={(e) => setLasttName(e.target.value)} placeholder="Last name" aria-label="Last name"/>
        </div>
        </div>
        <div className="row">
        <div className="col-12 col-md-6 col-lg-6 mb-3">
            <label>Date Of Birth</label>
            <input type="date" className="form-control" placeholder="First name" onInput={(e) => setDob(e.target.value)} aria-label="First name"/>
        </div>
        <div className="col-12 col-md-6 col-lg-6 mb-3">
            <label>Gender</label>
            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" onInput={(e) => setGender(e.target.value)}>
                <option >Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="3">Others</option>
            </select>
        </div>
        </div>
        <br />
        <div className="row">
        <div className="col-12 d-flex justify-content-md-center">
            <button type="submit" className="btn btn-primary btn-md">Submit</button>
        </div>
        </div>
        </form>
        </div>
        </div>
    )
}