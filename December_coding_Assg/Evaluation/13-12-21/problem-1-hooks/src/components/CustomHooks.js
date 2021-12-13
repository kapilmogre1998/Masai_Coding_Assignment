

export const UseNotification = ({firstName,lastName,dob,gender})=>{
    if(firstName === undefined || lastName === undefined || dob === undefined || gender === undefined) 
    return alert("Enter Correct Details");
    else{
       alert("Thank you for registering")
    }
}