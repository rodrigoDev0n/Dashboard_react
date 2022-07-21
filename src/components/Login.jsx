import { React, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const Login = () => {

  const [loading, setloading] = useState(false);
  
  const handleClick = () =>  setloading(true);

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
                <input type="text" placeholder='Ingrese su correo electronico' />
                <input type="text" placeholder='Contraseña' />
                <button onClick={handleClick}>INICIAR SESIÓN</button>
                <div className="dont_have_account-container">
                    <p>No tienes cuenta? <a href='#'>Registrarse</a></p>
                </div>
            </div>
        </section>
    </>
  )
}
