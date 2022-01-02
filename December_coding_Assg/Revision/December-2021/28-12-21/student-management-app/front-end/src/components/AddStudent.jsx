import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Navbar } from './Navbar'
import './style/addstudent.css'


export const AddStudent = () => {
    const history = useHistory();
    const [form,setForm] = useState({
        "name":"",
        "age":"",
        "gender":"",
        "city":"",
        "contact":""
    })

    const handleAddStudent = (e)=>{
        e.preventDefault();
        if(name.length !== 0 &&   gender.length !==0 && city.length !== 0){
            console.log(name,age,gender,city,contact)
            try{
                axios.post("http://localhost:3002/student",{
                     name:name,
                     age:age,
                     gender:gender,
                     city:city,
                     contact:contact
                })
            }catch(err){
                console.log("error in addstudent file")
            }
            alert("Student added successfully");
            history.push('/student')
        }
        else
        alert("Please fill all the details");
        console.log(name,age,gender,city,contact)
    }

    const handleChange = (e)=>{
        const {name,value} = e.target;
        console.log(name,value)
        setForm({
            ...form,
            [name] : value})
    }

    const {name,age,gender,city,contact} = form;
    return (
        <>
        <Navbar/>
            <div className="add-student-container" >
                <h3 className='title'>Student Details</h3>
                <form onSubmit={handleAddStudent}>
                    <div>
                        <p>Name</p>
                        <input name='name' value={name} type="text" onChange={handleChange} />
                    </div>
                    <div>
                        <p>Age</p>
                        <input name='age' type="number" value={age} onChange={handleChange} />
                    </div>
                    <div>
                        <p>Gender</p>
                        <input type="text"  name='gender' value={gender} onChange={handleChange}  />
                    </div>
                    <div>
                        <p>Contact</p>
                        <input type="Number"  name='contact' value={contact} onChange={handleChange}  />
                    </div>
                    <div>
                        <p>City</p>
                        <input type="text"  name='city' value={city} onChange={handleChange}  />
                    </div>
                    <div className='add-student-btn'>
                        <button>Add Student</button>
                        <button onClick={()=> history.push('/student')}>Back</button>
                    </div>
                </form>
            </div>
        </>
    )
}
