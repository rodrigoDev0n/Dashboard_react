import { React, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const Login = () => {

  const [loading, setloading] = useState(false);
  const [text, setText] = useState('');
  const [message, setmessage] = useState('INICIAR SESIÓN');

  const inputTextValue = ({target: {value}}) => {
    setText(value)
  }

  const isvalidEmail = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = re.test(String(text).toLowerCase());
    re.test(String(text).toLowerCase()) ? setmessage('INICIAR SESIÓN') : setmessage('Email invalido');
    return validEmail;
  } 

  const handleClick = () => {

    if(!isvalidEmail()) {
        setmessage('Email invalido');
    } else {
        setloading(true);
    }
  };

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
                    <input type="text" onChange={inputTextValue} placeholder='Ingrese su correo electronico' value={text} />
                    <input type="password" placeholder='Contraseña' />
                </form>
                <button onClick={handleClick}>{message}</button>
            </div>
        </section>
    </>
  )
}
