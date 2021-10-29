import { useState } from 'react'
import axios from "axios";
//use of this formdata to show what are the value in the form
const formData = {
    "name": "",
    "age": "",
    "address": "",
    "department": "",
    "salary": "",
    "isMarried": ""
}

export const Form = () => {
    const [data, setData] = useState(formData);
    const [form, setForm] = useState([])

    const handleChange = (e) => {
        //For checkbox e.target.type and e.target.checked
        let { name, value, type, checked } = e.target
        setData({
            ...data,
            [name]: type === "checkbox" ? checked ? "married" : "notmarried" : value
        })
    }

    const getData = async() => {
        //console.log("hi")
        const data = await fetch(" http://localhost:4000/form");
        const res = await data.json();
        setForm(res)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(name);
        fetch(" http://localhost:4000/form", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "content-Type": "application/json" }
        })
        getData()   
    }

    const handleDepartment = async (e) => {
        // console.log(e.target.value)
        const data = await fetch(`http://localhost:4000/form?department=${e.target.value}&_sort=salary`)
        const res = await data.json();
        setForm(res)
    }

    const handleSort = async (sort)=>{
        let data="";
        if(sort === "descending")
        data = await fetch(`http://localhost:4000/form?_sort=salary&_order=desc`)
        else
        data = await fetch(`http://localhost:4000/form?_sort=salary`)
        const res = await data.json();
        setForm(res)
    }

    let handleDelete = async(id)=>{
        await axios.delete(`http://localhost:4000/form/${id}`);
        const data = await fetch(`http://localhost:4000/form`)
        const res = await data.json();
        setForm(res)
    }
    console.log()
    // const { name,age,address } = data
    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <label >Name</label>
                <input type="text" name="name" onChange={handleChange} />
                <br />
                <label >Age</label>
                <input type="Number" name="age" onChange={handleChange} />
                <br />
                <label >Address</label>
                <input type="text" name="address" onChange={handleChange} />
                <br />
                <select name="department" onChange={handleChange}>
                    <option value="Administration">Administration</option>
                    <option value="Technical support">Technical support</option>
                    <option value="Communication">Communication</option>
                    <option value="Programming">Programming</option>
                </select>
                <br />
                <label htmlFor="">Salary</label>
                <input type="Number" name="salary" onChange={handleChange} />
                <br />
                <input type="checkbox" name="isMarried" onChange={handleChange} />
                <label htmlFor="">Marital status</label>
                <button>submit</button>
            </form>
            <select name="department" onChange={handleDepartment}>
                <option value="Administration">Administration</option>
                <option value="Programming">Programming</option>
                <option value=""></option>
            </select>
            <button  onClick={getData}>Show all</button>
            <br />
            <button onClick={()=>handleSort('ascending')}> Increasing salary</button>
            <button onClick={()=>handleSort("descending")}> Decreasing salary</button>

            {
                form.map(d =>
                    <div key={d.id}>
                            <p >
                                <span>{d.name},</span>
                                <span>{d.age},</span>
                                <span>{d.address},</span>
                                <span>{d.department},</span>
                                <span>{d.salary}</span>
                                <button onClick={()=>handleDelete(d.id)}>Delete</button>
                            </p>
                    </div>
                )
            }
        </div>
    )
}
