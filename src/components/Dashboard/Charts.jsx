import { React, useState } from 'react';
import { ChartBar } from './charts/ChartBar';
import { ChartPie } from './charts/ChartPie';
import { DataExample } from '../../helpers/Data';

export const Charts = () => {

  const [userData, setuserData] = useState({
    labels: DataExample.map((data) => data.year),
    datasets: [
        {
            label: "User Gained",
            data: DataExample.map((data) => data.userGain),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
            ],
        },
    ]
  });

  return (
    <>
      <div className='charts-container'>
        <div className="first_section-container">
            <div className="chart_1-container">
                <div className="chart--1">
                    <p>Alumnos Cursando</p>
                    <h2>360</h2>
                    <p>12% Alumnos que se retiraron</p>
                </div>
            </div>
            <div className="chart_2-container">
                <div className="chart--2">
                    <p>Asignaturas mas Aprobadas</p>
                    <h2>Lenguas</h2>
                    <p>10% Alumnos que aprobaron</p>
                </div>
            </div>
            <div className="chart_3-container">
                <div className="chart--3">
                    <p>Porcentaje de alumnos con esa aprobación</p>
                    <h2>75.5%</h2>
                    <p>12% Alumnos que se retiraron</p>
                </div>
            </div>
        </div>
        {/* /////////////////////////// */}
        {/* Segunda sección de graficos */}
        {/* /////////////////////////// */}
        <div className="second_section-container">
            <div className="big_chart--container">
                {/* Debe contener el grafico mas grande */}
                <div className="big--chart">
                    <ChartBar datas={userData} />
                </div>
            </div>
            <div className="small_chart--container">
                {/* Debe contener el grafico circular */}
                <div className="small--chart">
                    <ChartPie datas={userData} />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
