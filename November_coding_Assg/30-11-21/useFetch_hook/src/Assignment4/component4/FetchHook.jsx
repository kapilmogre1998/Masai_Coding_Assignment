import { useFetch } from "../utils4/useFetch"


export const FetchHook = () => {
    const { error, loading, response } = useFetch("https://reqres.in/api/users");

    return loading ? "...loading" : error ? "Please try again after sometime" : (
        <div>
            <h3>User Name</h3>
            {
                response?.data.map(({ first_name }, id) =>
                    <div key={id}>{first_name} </div>
                )
            }
        </div>
    )
}