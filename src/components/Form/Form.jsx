import { useState } from "react";
import validation from "./Validation";


const Form = () => {

    const [userData, setUserData] = useState({
        username:'',
        password:'',
    })

    const [errors, setErrors] = useState({
        username:'',
        password:'',
    })

    const handleOnChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;

        setUserData({
            ...userData,
            [name] : value,
        })

        setErrors(validation({
            ...userData,
            [name] : value,
        }))

        console.log(errors)
    }


    return(
        <form>

            <div>
            <label>Username</label>
            <input type="text" value={userData.username} onChange={handleOnChange} name='username'/>
            <p>{errors.username}</p>
            </div>

            <div>
            <label>Contraseña</label>
            <input type="text" value={userData.password}onChange={handleOnChange} name='password' />
            </div>
                
            <button>LOGIN</button>
        </form>
    )
}


export default Form;