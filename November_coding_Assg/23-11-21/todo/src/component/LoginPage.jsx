import { Form } from "./Form"
import axios from "axios";
import { loginSuccess } from "../redux/login/action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handlelogin = ({email,password}) => {
        axios.post("https://reqres.in/api/login", {
            email,
            password
        })
        .then(({data : {token}}) =>{
            dispatch(loginSuccess(token))
        })
        .catch(() => console.log("err"))
    }

    return (
        <div>
            <Form handlelogin={handlelogin} />
        </div>
    )
}
