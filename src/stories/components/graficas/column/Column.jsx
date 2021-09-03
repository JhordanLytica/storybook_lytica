import React from 'react';
import PropTypes from 'prop-types';
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
    data: [58, 92, 163, 217, 253, 326, 304, 282, 221, 175, 134, 88, 66, 54]
  },
];
const options = {
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function Hola(val,a) {
        return a.seriesIndex;
      }
    },
    custom: function({series, seriesIndex, dataPointIndex, w}) {
      const fecha = new Date();
      return( 
        '<div class="tooltipHead">' +
          '<div class="info">'+
            '<div>'+w.globals.seriesNames[seriesIndex]+' por hora del día</div>'+
          '</div>'+
          '<div class="info">'+
            '<div>Mes actual</div>'+
            '<div>'+
              meses[fecha.getMonth()]+' 01 - '+
              meses[fecha.getMonth()]+' '+fecha.getDate()+
            '</div>'+
          '</div>'+
          '<div class="info">'+
            '<div>'+w.globals.labels[dataPointIndex]+'</div>'+
            '<div>'+
            Math.abs(series[seriesIndex][dataPointIndex])+
            '</div>'+
            '<div>10%</div>'+
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
            '<div>'+w.globals.labels[dataPointIndex]+'</div>'+
            '<div>'+
              Math.abs(series[seriesIndex][dataPointIndex])+
            '</div>'+
            '<div>  </div>'+
          '</div>'+
        '</div>'
      );
    }
  },
  colors: ['#8c4380', '#ff9f2d', '#168fff'],
  plotOptions: {
    bar: {
      borderRadius: 8,
      distributed: true,
    },
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  xaxis: {
    categories: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00',
      '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
    ],
    labels: {
      style: {
        colors: '#969696',
        fontSize: '13px',
        fontFamily: 'Helvetica',
      }
    }
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
  fill: {
    opacity: 1
  },
  legend: {
    position: 'right',
    offsetX: 0,
    offsetY: 50
  },
}
export const Column = ({ data, options, width, height }) => {
  return(
    <Chart options={options} series={data} type="bar" width={width} height={height} />
  );
};

Column.propTypes = {
  data: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
}

Column.defaultProps = {
  data: dataSerie,
  options: options,
  width: 985,
  height: 357,
}