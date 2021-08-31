import React from 'react';
import PropTypes from 'prop-types';
import './heatmap.css';
import Chart from 'react-apexcharts';

const meses = [
  'Ene',
  'Feb',
  'Mar',
  'Aab',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
];

let dataSerie = [
  {
    name: 'Entradas',
    data: [455, 369, 214, 118, 95, 499, 109]
  },
  {
    name: 'Transacciones',
    data: [90, 74, 58, 72, 26, 56, 20]
  },
  {
    name: 'Tasa de conversión',
    data: [40.11, 30.02, 20.86, 10.95, 5.00, 21.21, 10.05]
  },
];
const options = {
  tooltip: {
    shared: true,
    intersect: false,
    custom: function({series, seriesIndex, dataPointIndex, w}) {
      const fecha = new Date();
      return( 
        '<div class="tooltipHead">' +
          '<div class="info">'+
            '<div>Mes actual</div>'+
            '<div>'+
              meses[fecha.getMonth()]+' 01 - '+
              meses[fecha.getMonth()]+' '+fecha.getDate()+
            '</div>'+
          '</div>'+
          '<div class="info">'+
            '<div>'+w.globals.seriesNames[seriesIndex]+'-'+w.globals.labels[dataPointIndex]+'</div>'+
            '<div>'+
              series[seriesIndex][dataPointIndex]+
            '</div>'+
          '</div>'+
          '<hr>'+
          '<div style="margin-top: 15px" class="info">'+
            '<div>Mes anterior</div>'+
            '<div>'+
              meses[fecha.getMonth()-1]+' 01 - '+
              meses[fecha.getMonth()-1]+' '+fecha.getDate()+
            '</div>'+
          '</div>'+
          '<div style="margin-bottom: 0px" class="info">'+
            '<div>'+w.globals.seriesNames[seriesIndex]+'-'+w.globals.labels[dataPointIndex]+'</div>'+
            '<div>'+
              series[seriesIndex][dataPointIndex]+
            '</div>'+
          '</div>'+
        '</div>'
      );
    }
  },
  chart: {
    height: 350,
    type: 'heatmap',
  },
  colors: ['#003566', '#0069CC', '#1986E8', '#339CFF', '#86BFF3'],
  fill: {
    opacity: 1,
    colors: ['#003566', '#0069CC', '#1986E8', '#339CFF', '#86BFF3'],
    type: 'solid',
  },
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.5,
      radius: 16,
      distributed: true,
      colorScale: {
        ranges: [
          {
            from: 400,
            to: 500,
            color: '#003566',
            name: 'Entradas',
          },
          {
            from: 300,
            to: 399,
            color: '#0069CC',
            name: 'Entradas',
          },
          {
            from: 200,
            to: 299,
            color: '#1986E8',
            name: 'Entradas',
          },
          {
            from: 100,
            to: 199,
            color: '#339CFF',
            name: 'Entradas',
          },
          {
            from: 80,
            to: 99,
            color: '#86BFF3',
            name: 'Entradas',
          },
          {
            from: 75,
            to: 90,
            color: '#003566',
            name: 'Transacciones',
          },
          {
            from: 59,
            to: 74,
            color: '#0069CC',
            name: 'Transacciones',
          },
          {
            from: 43,
            to: 58,
            color: '#1986E8',
            name: 'Transacciones',
          },
          {
            from: 27,
            to: 42,
            color: '#339CFF',
            name: 'Transacciones',
          },
          {
            from: 11,
            to: 26,
            color: '#86BFF3',
            name: 'Transacciones',
          },
          {
            from: 40,
            to: 50,
            color: '#003566',
            name: 'Tasa de conversion',
          },
          {
            from: 30,
            to: 39,
            color: '#0069CC',
            name: 'Tasa de conversion',
          },
          {
            from: 20,
            to: 29,
            color: '#1986E8',
            name: 'Tasa de conversion',
          },
          {
            from: 10,
            to: 19,
            color: '#339CFF',
            name: 'Tasa de conversion',
          },
          {
            from: 0,
            to: 9,
            color: '#86BFF3',
            name: 'Tasa de conversion',
          },
        ],
      }, 
    }
  },
  xaxis: {
    type: 'category',
    categories: ['L', 'Ma', 'Mi', 'J', 'V', 'S', 'D'],
    position: 'top',
    labels: {
      style: {
        colors: '#5d2c55',
        fontSize: '16px',
        fontWeight: 500,
        fontFamily: 'Helvetica',
      }
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#969696',
        fontSize: '13px',
        fontFamily: 'Helvetica',
      }
    }
  },
  stroke: {
    width: 13,
  },
  dataLabels: {
    enabled: true,
    textAnchor: 'middle',
    formatter: function(value, { seriesIndex, dataPointIndex, w }) {
      if (w.config.series[seriesIndex].name === 'Tasa de conversión') {
        return value+"%";
      }
      return value;
    },
    style: {
      colors: ['#fff'],
      fontSize: '16px',
      fontFamily: 'Helvetica',
    }
  },
  legend: {
    show: false,
  },
};

export const Heatmap = ({ data, options, width, height }) => {
  return(
    <Chart options={options} series={data} type="heatmap" width={width} height={height} />
  );
};

Heatmap.propTypes = {
  data: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
}

Heatmap.defaultProps = {
  data: dataSerie.reverse(),
  options: options,
  width: 1080,
  height: 200,
}