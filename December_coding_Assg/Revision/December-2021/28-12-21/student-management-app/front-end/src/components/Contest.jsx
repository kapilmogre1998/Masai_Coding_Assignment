import { useEffect, useState } from "react";
import axios from 'axios';
import './style/contest.css'
import { Navbar } from "./Navbar";
import { handleSort } from "./FilterContest";

export const Contest = () => {

    const [contestData, setContestData] = useState();
    const [updated, setUpdated] = useState()
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3002/contest/")
            .then(({ data: { contests } }) => setContestData(contests))
            .catch(err => console.log("Error while fetching contest data"))
    }, [])

    return (
        <div>
            <Navbar />
            <div className="table-container">
                <table className="contest-container-table">
                    <thead>
                        <tr>
                            <th onClick={() => handleSort(setCount, count, "type", setUpdated)} style={{ cursor: 'pointer' }} >TYPE <i className="fas fa-arrows-alt-v"></i> </th>
                            <th>TITLE</th>
                            <th onClick={() => handleSort(setCount, count, "deadline", setUpdated)} style={{ cursor: 'pointer' }}>DEADLINE <i className="fas fa-arrows-alt-v"></i></th>
                            <th>TIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (updated === undefined ? contestData : updated)?.map(({ title, type, deadline, time }, id) =>
                                <tr key={id} >
                                    <td>{type}</td>
                                    <td> {title} </td>
                                    <td> {deadline} </td>
                                    <td> {time} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="other-contest">
                        <button  className="arrow-btn"><i class="fas fa-angle-left"></i></button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button className="arrow-btn"><i class="fas fa-chevron-right"></i></button>
                    </div>
            </div>
        </div>
    )
}
