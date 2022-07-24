import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export const ChartPie = ({datas}) => {
  return <Pie data={datas} />
}
