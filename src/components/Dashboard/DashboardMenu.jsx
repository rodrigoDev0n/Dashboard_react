import React from 'react'

export const DashboardMenu = () => {
  return (
    <section className="dashboard_menu-container" >
        <div className="dasshboard_menu_head-container">
            <div className="dashboard_menu_container-profile" >
                {/* Picture container */}
            </div>
            <h1 className="text_user_name" >Katarina Smith</h1>
            <div className="user_name_profession" >
                <p>Profesora</p>
            </div>
        </div>
        <hr/>
        <div className="dashboard_menu_container-options">
            {/* Opciones del menu */}
        </div>
    </section>
  )
}
