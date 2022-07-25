import { React, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const Login = () => {

  const [loading, setloading] = useState(false);
  
  const handleClick = () =>  setloading(true);

  const inputTextValue = ({target: {value}}) => {
    console.log(value);
  }

  return (
    <>
        {
            loading && (
                <Navigate to="/Dashboard" />
            )
        }
        <section>
            <div>
                <div>
                    <h1>Inicio de sesión</h1>
                </div>
                <form>
                    <input type="text" onChange={inputTextValue} placeholder='Ingrese su correo electronico' />
                    <input type="password" placeholder='Contraseña' />
                </form>
                <button onClick={handleClick}>INICIAR SESIÓN</button>
            </div>
        </section>
    </>
  )
}
