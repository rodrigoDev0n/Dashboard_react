import React from 'react';
import { Charts } from './Charts';

export const DashboardMenu = () => {
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
                    {/* Ingresar opción estudiantes para listarlos */}
                </div>
            </section>
            <section>
                <Charts />
            </section>
        </div> 
    </>
  )
}
