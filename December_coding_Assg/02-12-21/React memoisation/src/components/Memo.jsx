import React, { useMemo } from "react"


export const Calender = ({date})=>{
    console.log("Rendering")
    return (
        <div>
            Date is : {date}
        </div>
    )
}

export const MemoisedCalender = React.memo(Calender)
