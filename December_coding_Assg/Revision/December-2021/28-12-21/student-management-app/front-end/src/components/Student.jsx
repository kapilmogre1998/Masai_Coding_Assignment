import { useEffect, useState } from "react";
import axios from 'axios';
import './style/contest.css'
import { Navbar } from "./Navbar";
import { PopForm } from "./AddStudent";
import { Link } from "react-router-dom";
import { handleSort } from "./FilterStudent";

export const Student = () => {

    const [StudentData, setStudentData] = useState();
    const [updated, setUpdated] = useState();
    const [pagination, setPagination] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3002/student/")
            .then(({ data: { students } }) => setStudentData(students))
            .catch(err => console.log("Error while fetching student data"))
    }, [pagination])

    return (
        <>
            <div>
                <Navbar />
                <div className="table-container">
                    <Link to="/add-student"><button className="add-student" >Add Student</button></Link>
                    <table className="contest-container-table">
                        <thead>
                            <tr>
                                <th onClick={() => handleSort(setCount, count, "name", setUpdated)} style={{cursor:"pointer"}}>Name <i className="fas fa-arrows-alt-v"></i></th>
                                <th onClick={() => handleSort(setCount, count, "age", setUpdated)} style={{cursor:"pointer"}}>Age <i className="fas fa-arrows-alt-v"></i></th>
                                <th onClick={() => handleSort(setCount, count, "gender", setUpdated)} style={{cursor:"pointer"}}>Gender <i className="fas fa-arrows-alt-v"></i></th>
                                <th>Contact</th>
                                <th onClick={() => handleSort(setCount, count, "city", setUpdated)} style={{cursor:"pointer"}}>City <i className="fas fa-arrows-alt-v"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (updated === undefined ? StudentData : updated)?.map(({ name, age, gender, contact, city }, id) =>
                                    <tr key={id} >
                                        <td>{name}</td>
                                        <td> {age} </td>
                                        <td> {gender} </td>
                                        <td> {contact} </td>
                                        <td>{city}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="other-contest">
                            <button  className="arrow-btn"><i class="fas fa-angle-left"></i></button>
                        {
                            [1,2,3].map((num,id)=>
                            <button onClick={()=>setPagination(num)} key={id}>{num}</button>
                            )
                        }
                            <button className="arrow-btn"><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}
