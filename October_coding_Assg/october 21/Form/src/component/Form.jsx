import {useState,useRef} from 'react'

const formData = {
   "name" : "",
   "email" : "",
   "age" : "" , 
   "isMarried" : ""
}

export const Form = () => {
    const [ data,setData] = useState(formData);
    const elemRef = useRef();

    const handleChange = (e)=>{
        const {name,value,type,checked} = e.target
        setData({
            ...data,
            [name]:type==="checkbox" ?checked : value})
    }

    const {name,email,age} = data;

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data)
    }

    return (
        <>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
            <input value={name} autoComplete="off" onChange={handleChange} name="name"/>
            <br />
            <input value={email} onChange={handleChange} name="email"/>
            <br />
            <input value={age} onChange={handleChange} name="age"/>
            <br />
            <input type="checkbox" name="isMarried" onChange={handleChange} />
            <label htmlFor="">isMarried</label>
            <br />
            <select name="Country" value="Country" onChange={handleChange}>
                <option value="India" >India</option>
                <option value="USA" >USA</option>
            </select>
            <br />
            <input type="file" ref={elemRef} />
            <button>Click Me</button>
            </form>
        </>
        
    )
}
