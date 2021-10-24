import './stylesheet/payment.css'

export const Payment = ({date,title,gift,pay,desktop,icon,arrow})=>{
    return (
        <div>
           <h1 id="date">{date} <span>{icon}</span></h1>
           <p id="title">{title}</p>
           <h1>{gift}</h1>
           <h1>{pay}</h1>
           <p id="arrow">{desktop} <span>{arrow}</span></p>
        </div>
    )
}