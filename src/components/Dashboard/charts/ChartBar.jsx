import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export const ChartBar = ({datas}) => {
  return <Bar data={datas} /> 
}
