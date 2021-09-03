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
    name: 'Mujeres',
    data: [-26, -48, -80, -227, -290, -85, -29]
  },
  {
    name: 'Hombres',
    data: [22, 43, 162, 319, 264, 77, 34]
  }
];

const options = {
  chart: {
    type: 'bar',
    height: 440,
    stacked: true,
    offsetY: 0
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
            '<div>Demográficos '+w.globals.seriesNames[seriesIndex]+'</div>'+
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
  colors: ['#ba59aa', '#003566'],
  fill: {
    colors: ['#ba59aa', '#003566'],
    opacity: 1,
    type: 'solid',
  },
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: '90%',
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return Math.abs(val);
    },
    style: {
      colors: ['#F7F7F7'],
      fontSize: '10px',
      fontFamily: 'Helvetica',
    },
  },
  stroke: {
    width: 3,
    colors: ["#fff"]
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },  
  },
  yaxis: {
    min: -320,
    max: 320,
    labels: {
      style: {
        colors: '#969696',
        fontSize: '13px',
        fontFamily: 'Helvetica',
      }
    }
  },
  xaxis: {
    categories: ['+65', '55-64', '45-54', '35-44', '25-34', '16-24', '-15'],
    labels: {
      formatter: function (val) {
        return ""
      },
      style: {
        colors: '#969696',
        fontSize: '13px',
        fontFamily: 'Helvetica',
      }
    },
  },
  legend: {
    show: false,
  },
};
export const Bar = ({ data, options, width, height }) => {
  return(
    <Chart options={options} series={data} type="bar" width={width} height={height} />
  );
};

Bar.propTypes = {
  data: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
}

Bar.defaultProps = {
  data: dataSerie,
  options: options,
  width: 985,
  height: 380,
}