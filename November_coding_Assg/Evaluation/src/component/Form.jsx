import './style/form.css'


export const Form = () => {
    return (
        <div>
            <form className="main-container">
            <h2>Login</h2>
                <input type="email" name="email" placeholder="Enter email" />
                <input type="password" name="password"  placeholder="Enter password"/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
