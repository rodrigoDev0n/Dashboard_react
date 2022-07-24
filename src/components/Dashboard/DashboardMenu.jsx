import { React, useState } from 'react';
import { Charts } from './Charts';
import { Students } from '../students/Students';

export const DashboardMenu = () => {

  const [students, setstudents] = useState(false);

  /* Función que me devuelve la lista de los estudiantes: */

  const handleStudents = () => {
    setstudents(true);
  }

  const handleReturn = () => {
    setstudents(false);
  }

  return (
    <>
        <div className="dashboard-container">
            <section className="dashboard_menu-container" >
                <div className="dasshboard_menu_head-container">
                    <div className="dashboard_menu_container-profile" >
                        {/* Picture container */}
                    </div>
                    <div className="dashboard_user_container-info">
                        <h1 className="text_user_name" >Katarina Smith</h1>
                        <p>Profesora</p>
                    </div>
                </div>
                <hr/>
                <div className="dashboard_menu_container-options">
                    <button onClick={handleReturn}>Inicio</button>
                    <button onClick={handleStudents}>Estudiantes</button>
                </div>
            </section>
            <section>
                {
                    students 
                    ? <Students />
                    : <Charts />
                }
            </section>
        </div> 
    </>
  )
}
