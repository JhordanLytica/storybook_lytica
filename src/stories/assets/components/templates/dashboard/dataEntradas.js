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
// CLIENTES 
export const dataClientes = [
  {
    name: 'Entradas',
    data: [59, 92, 163, 217, 253, 326, 304, 282, 221, 175, 134, 88, 66, 54]
  },
];
export const optionsClientes = {
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
  fill: {
    colors: ['#8c4380', '#ff9f2d', '#168fff'],
    opacity: 1,
    type: 'solid',
  },
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
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#F7F7F7'],
      fontSize: '10px',
      fontFamily: 'Helvetica',
    }
  },
}

// SEXO
export const dataSexo = [
  {
    name: 'Mujer',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 35, 41, 36, 26, 45]
  }, 
  {
    name: 'Hombre',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 48, 52, 53, 41, 26]
  }, 
];
export const optionsSexo = {
  chart: {
    type: 'bar',
    height: 350,
    stacked: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 6,
      endingShape: 'rounded',
      distributed: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
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
            '<div>Entradas por hora del día</div>'+
          '</div>'+
          '<p>Por sexo<p>'+
          '<div class="info">'+
            '<div>Mes actual</div>'+
            '<div>'+
              meses[fecha.getMonth()]+' 01 - '+
              meses[fecha.getMonth()]+' '+fecha.getDate()+
            '</div>'+
          '</div>'+
          '<div class="info">'+
            '<div style="display: flex;justify-content: center;align-items: center;margin-right: -15px;">'+
              '<div style="width: 12px;height: 12px;border-radius: 50%;background: #003566;margin-right: 5px;"></div>'+
              '<div>Hombre</div>'+
            '</div>'+
            '<div style="margin-top: 3px;">'+
              Math.abs(series[1][dataPointIndex])+
            '</div>'+
            '<div style="margin-top: 3px;">10%</div>'+
          '</div>'+
          '<div class="info">'+
            '<div style="display: flex;justify-content: center;align-items: center;">'+
              '<div style="width: 12px;height: 12px;border-radius: 50%;background: #ba59aa;margin-right: 5px;"></div>'+
              '<div>Mujer</div>'+
            '</div>'+
            '<div style="margin-top: 3px;">'+
              Math.abs(series[seriesIndex][dataPointIndex])+
            '</div>'+
            '<div style="margin-top: 3px;">10%</div>'+
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
}

// Edad
export const dataEdad = [
  {
    name: '-15',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 35, 41, 36, 26, 45]
  }, 
  {
    name: '16-24',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 48, 52, 53, 41, 26]
  },
  {
    name: '25-34',
    data: [15, 85, 67, 26, 81, 78, 33, 80, 16, 5, 61, 86, 26, 65]
  }, 
  {
    name: '35-44',
    data: [86, 65, 10, 58, 37, 15, 19, 14, 49, 64, 92, 35, 20, 62]
  },
  {
    name: '45-54',
    data: [54, 15, 65, 25, 75, 15, 75, 85, 93, 73, 92, 82, 30, 20]
  }, 
  {
    name: '55-64',
    data: [36, 45, 86, 15, 56, 65, 74, 58, 59, 14, 13, 85, 20, 28]
  },
  {
    name: '+65',
    data: [65, 85, 25, 27, 95, 52, 104, 16, 86, 65, 31, 86, 56, 15]
  }, 
];
export const optionsEdad = {
  chart: {
    type: 'bar',
    height: 350,
    stacked: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 2,
      endingShape: 'rounded',
      distributed: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: false,
  },
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
            '<div>Entradas por hora del día</div>'+
          '</div>'+
          '<p>Por edad<p>'+
          '<div class="info">'+
            '<div>Mes actual</div>'+
            '<div>'+
              meses[fecha.getMonth()]+' 01 - '+
              meses[fecha.getMonth()]+' '+fecha.getDate()+
            '</div>'+
          '</div>'+
          '<div class="info">'+
            '<div style="display: flex;justify-content: center;align-items: center;margin-right: 10px;">'+
              '<div style="width: 12px;height: 12px;border-radius: 50%;background: #168fff;margin-right: 5px;"></div>'+
              '<div>-15</div>'+
            '</div>'+ 
            '<div style="margin-top: 3px;">'+
              Math.abs(series[0][dataPointIndex])+
            '</div>'+
            '<div style="margin-top: 3px;">10%</div>'+
          '</div>'+
          '<div class="info">'+
            '<div style="display: flex;justify-content: center;align-items: center;">'+
              '<div style="width: 12px;height: 12px;border-radius: 50%;background: #17cb49;margin-right: 5px;"></div>'+
              '<div>16-24</div>'+
            '</div>'+
            '<div style="margin-top: 3px;">'+
              Math.abs(series[1][dataPointIndex])+
            '</div>'+
            '<div style="margin-top: 3px;">10%</div>'+
          '</div>'+
          '<div class="info">'+
            '<div style="display: flex;justify-content: center;align-items: center;">'+
              '<div style="width: 12px;height: 12px;border-radius: 50%;background: #ff9f2d;margin-right: 5px;"></div>'+
              '<div>25-34</div>'+
            '</div>'+
            '<div style="margin-top: 3px;">'+
              Math.abs(series[2][dataPointIndex])+
            '</div>'+
            '<div style="margin-top: 3px;">10%</div>'+
          '</div>'+
          '<div class="info">'+
            '<div style="display: flex;justify-content: center;align-items: center;">'+
              '<div style="width: 12px;height: 12px;border-radius: 50%;background: #f74141;margin-right: 5px;"></div>'+
              '<div>35-44</div>'+
            '</div>'+
            '<div style="margin-top: 3px;">'+
              Math.abs(series[3][dataPointIndex])+
            '</div>'+
            '<div style="margin-top: 3px;">10%</div>'+
          '</div>'+
          '<div class="info">'+
            '<div style="display: flex;justify-content: center;align-items: center;">'+
              '<div style="width: 12px;height: 12px;border-radius: 50%;background: #e96fd5;margin-right: 5px;"></div>'+
              '<div>45-54</div>'+
            '</div>'+
            '<div style="margin-top: 3px;">'+
              Math.abs(series[4][dataPointIndex])+
            '</div>'+
            '<div style="margin-top: 3px;">10%</div>'+
          '</div>'+
          '<div class="info">'+
            '<div style="display: flex;justify-content: center;align-items: center;">'+
              '<div style="width: 12px;height: 12px;border-radius: 50%;background: #9b51e0;margin-right: 5px;"></div>'+
              '<div>55-64</div>'+
            '</div>'+
            '<div style="margin-top: 3px;">'+
              Math.abs(series[5][dataPointIndex])+
            '</div>'+
            '<div style="margin-top: 3px;">10%</div>'+
          '</div>'+
          '<div class="info">'+
            '<div style="display: flex;justify-content: center;align-items: center;margin-right: 10px;">'+
              '<div style="width: 12px;height: 12px;border-radius: 50%;background: #969696;margin-right: 5px;"></div>'+
              '<div>+65</div>'+
            '</div>'+
            '<div style="margin-top: 3px;">'+
              Math.abs(series[6][dataPointIndex])+
            '</div>'+
            '<div style="margin-top: 3px;">10%</div>'+
          '</div>'+
        '</div>'
      );
    }
  },
  colors: ['#168fff', '#17cb49', '#ff9f2d', '#f74141', '#e96fd5', '#9b51e0', '#969696'],
  fill: {
    colors: ['#168fff', '#17cb49', '#ff9f2d', '#f74141', '#e96fd5', '#9b51e0', '#969696'],
    opacity: 1,
    type: 'solid',
  },
}