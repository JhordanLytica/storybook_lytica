import React, {useState} from 'react';

//Componenetes
import { Dashboard } from './Dashboard';
import { Title } from '../../atoms/title/Title';
import { Grid } from '../../organisms/grid/Grid';
import { GridItems } from '../../molecules/gridItems/GridItems';
import { Card } from '../../molecules/card/Card';
import { Select } from '../../atoms/select/Select';
import { Button } from '../../atoms/button/Button';
import { Caps } from '../../atoms/caps/Caps';
import { Heatmap } from '../../graficas/heatmap/Heatmap';
import { Bar } from '../../graficas/bar/Bar';
import { Column } from '../../graficas/column/Column';
import { Paper } from '../../organisms/paper/Paper';
import { IoMdDownload } from "react-icons/io";
import { dataClientes, optionsClientes, dataSexo, optionsSexo, dataEdad, optionsEdad } from './dataEntradas';

export default {
  title: 'templates/Dashboard',
  component: Dashboard,
};

const categoria = [
  {
    title: 'Por zona',
    values: ['CDMX', 'Guadalajara', 'Monterrey'],
  },
  {
    title: 'Por tamaño',
    values: ['Grandes', 'Medianas', 'Pequeñas'],
  },
];

const locaciones = [
  {
    title: 'categoria 1',
    values: ['Tienda 1', 'Tienda 2', 'Tienda 3'],
  },
  {
    title: 'categoria 2',
    values: ['Tienda 1', 'Tienda 2', 'Tienda 3', 'Tienda 4', 'Tienda 5', 'Tienda 6', 'Tienda 7', 'Tienda 8', 'Tienda 9', 'Tienda 10'],
  },
];

const meses = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
];

const fecha = new Date();
const mesAnterios = fecha.getMonth()-1 !== -1 ? fecha.getMonth()-1 : 11;
const tiempo = [
  {
    title: 'Tiempo',
    values: ['Ayer', 'Semana actual', 'Semana anterior', 'Mes actual', 'Mes anterior', 'Q actual', 'Q anterior', 'Año actual', 'Año anterior'],
    subTitle: [
      //Ayer
      `${fecha.getDate()-1 !== 0 ? meses[fecha.getMonth()] : meses[mesAnterios]}
        ${fecha.getDate()-1 !== 0 ? fecha.getDate()-1 :
          mesAnterios === 1 && fecha.getFullYear()%4 !== 0 ? '28' :
          mesAnterios === 1 && fecha.getFullYear()%4 === 0 ? '29' :
          [0,2,4,6,7,9,11].indexOf(mesAnterios) !== -1 ? '31' : '30'  
        }
      `,
      //Semana actual
      `${fecha.getDate()-fecha.getDay()+1 > 0 ? meses[fecha.getMonth()] : meses[mesAnterios]}
        ${fecha.getDate()-fecha.getDay()+1 > 0 ? fecha.getDate()-fecha.getDay()+1 :
          mesAnterios === 1 && fecha.getFullYear()%4 !== 0 ? 28-fecha.getDay()+fecha.getDate()+1 :
          mesAnterios === 1 && fecha.getFullYear()%4 === 0 ? 29-fecha.getDay()+fecha.getDate()+1 :
          [0,2,4,6,7,9,11].indexOf(mesAnterios) !== -1  ? 31-fecha.getDay()+fecha.getDate()+1 : 
          30-fecha.getDay()+1} 
         - ${meses[fecha.getMonth()]} ${fecha.getDate()}`,
      //Semana anterior
      `${fecha.getDate()-fecha.getDay()-6 > 0 ? meses[fecha.getMonth()] : meses[mesAnterios]}
      ${fecha.getDate()-fecha.getDay()-6 > 0 ? fecha.getDate()-fecha.getDay()-6 :
        mesAnterios === 1 && fecha.getFullYear()%4 !== 0 ? 28-fecha.getDay()+fecha.getDate()-6 :
        mesAnterios === 1 && fecha.getFullYear()%4 === 0 ? 29-fecha.getDay()+fecha.getDate()-6 :
        [0,2,4,6,7,9,11].indexOf(mesAnterios) !== -1 ? 31-fecha.getDay()+fecha.getDate()-6 :
        30-fecha.getDay()+fecha.getDate()-6 
      }  
      - ${fecha.getDate()-fecha.getDay() > 0 ? meses[fecha.getMonth()] : meses[mesAnterios]} 
      ${fecha.getDate()-fecha.getDay()-1 > 0 ? fecha.getDate()-fecha.getDay() :
        mesAnterios === 1 && fecha.getFullYear()%4 !== 0 ? 28-fecha.getDay()+fecha.getDate() :
        mesAnterios === 1 && fecha.getFullYear()%4 === 0 ? 29-fecha.getDay()+fecha.getDate() :
        [0,2,4,6,7,9,11].indexOf(mesAnterios) !== -1 ? 31-fecha.getDay()+fecha.getDate() : 30-fecha.getDay()+fecha.getDate()
      }
      `,
      //Mes actual
      `${meses[fecha.getMonth()]} 01 - ${meses[fecha.getMonth()]} ${fecha.getDate()}`,
      //Mes anterior
      `${meses[mesAnterios]} 01 - ${meses[mesAnterios]} 
        ${mesAnterios === 1 && fecha.getFullYear()%4 !== 0 ? '28' :
        mesAnterios === 1 && fecha.getFullYear()%4 === 0 ? '29' :
        [0,2,4,6,7,9,11].indexOf(mesAnterios) !== -1 ? '31' : '30'
      }`,
      //Q actual
      `${
        fecha.getMonth() <= 2 ? meses[0] :
        fecha.getMonth() >= 3 && fecha.getMonth() <= 5 ? meses[3] :
        fecha.getMonth() >= 6 && fecha.getMonth() <= 8 ? meses[6] :
        fecha.getMonth() >= 9 && fecha.getMonth() <= 11 ? meses[9] : meses[0]
      } 01 - ${meses[fecha.getMonth()]} ${fecha.getDate()}`,
      //Q anterior
      `${
        fecha.getMonth() <= 2 ? meses[9] :
        fecha.getMonth() >= 3 && fecha.getMonth() <= 5 ? meses[0] :
        fecha.getMonth() >= 6 && fecha.getMonth() <= 8 ? meses[3] :
        fecha.getMonth() >= 9 && fecha.getMonth() <= 11 ? meses[6] : meses[6]
      }
       01 - ${
        fecha.getMonth() <= 2 ? meses[11] :
        fecha.getMonth() >= 3 && fecha.getMonth() <= 5 ? meses[2] :
        fecha.getMonth() >= 6 && fecha.getMonth() <= 8 ? meses[5] :
        fecha.getMonth() >= 9 && fecha.getMonth() <= 11 ? meses[8] : meses[0]
      } 
      ${
        fecha.getMonth() <= 2 ? '31' :
        fecha.getMonth() >= 3 && fecha.getMonth() <= 5 ? '31' :
        fecha.getMonth() >= 6 && fecha.getMonth() <= 8 ? '30' :
        fecha.getMonth() >= 9 && fecha.getMonth() <= 11 ? '30' : meses[0]
      }
      `,
      //Año actual
      `Ene 01 - ${meses[fecha.getMonth()]} ${fecha.getDate()}`,
      //Año anterior
      `Ene 01 ${fecha.getFullYear()-1} - Dic 31 ${fecha.getFullYear()-1}`,
    ],
  },
  {
    title: 'Custom',
    values: ['Dia exacto', 'Rango de fechas'],
  },
];

const comparador = [
  {
    title: 'comparador',
    values: ['Mes anterior', 'Mes año anterior', 'sin comparacion'],
    subTitle: [
      //Mes anterior
      `${meses[mesAnterios]} 01 - ${meses[mesAnterios]} 
        ${mesAnterios === 1 && fecha.getFullYear()%4 !== 0 ? '28' :
        mesAnterios === 1 && fecha.getFullYear()%4 === 0 ? '29' :
        [0,2,4,6,7,9,11].indexOf(mesAnterios) !== -1 ? '31' : '30'
      }`, 
      //Mes anterior
      `${meses[mesAnterios]} 01 ${fecha.getFullYear()-1} - ${meses[mesAnterios]} 
        ${mesAnterios === 1 && fecha.getFullYear()%4 !== 0 ? '28' :
        mesAnterios === 1 && fecha.getFullYear()%4 === 0 ? '29' :
        [0,2,4,6,7,9,11].indexOf(mesAnterios) !== -1 ? '31' : '30'
      } ${fecha.getFullYear()-1}`, ''],
  }
];


export const Template = (args) => {
  const [filterEntradas, setfilterEntradas] = useState(0);
  const group = [
    {
      label: 'Clientes',
      onclick: ()=> setfilterEntradas(0),
    },
    {
      label: 'Sexo',
      onclick: ()=> setfilterEntradas(1),
    },
    {
      label: 'Edad',
      onclick: ()=> setfilterEntradas(2),
    },
  ];

  const data = [dataClientes, dataSexo, dataEdad];
  const options = [optionsClientes, optionsSexo, optionsEdad];
  
  return (
    <Dashboard {...args}> 
      <Title variant="h2" color="DP60" align="left">Dashboard</Title>
      <br />
      <Grid columns="col4" spacing="s0" background="DP40" style={{ borderRadius: '8px', maxHeight: '96px', width: '1098px', paddingLeft: '32px', paddingTop: '16px' }}>
        <div style={{padding: '0px'}}>
          <Caps color="G500" size="large" style={{margin: '0px', color: "#fff"}} >FILTROS</Caps>
        </div>
        <div style={{padding: '0px'}}/><div style={{padding: '0px'}}/>
        <div style={{padding: '0px', marginBottom: '-12px'}}>
          <Button color="DP40" onClick={() => {}} variant="icon" classtyle="butonDowload">
            <IoMdDownload />
          </Button>
        </div>
        <div style={{padding: '0px'}}>
          <Select 
            border={false} 
            search 
            label="Categorias" 
            data={categoria} 
            color="G600" 
            multiple 
            style={{width: '260px'}} 
            colorSecondary="DP60" 
            button 
            textButton="Filtrar" 
            size="small"
            valueDefault="Todos"
          />
        </div>
        <div style={{padding: '0px'}}>
          <Select 
            border={false} 
            search label="Locaciones" 
            data={locaciones} 
            color="G600" 
            multiple 
            style={{width: '260px'}} 
            colorSecondary="DP60" 
            button 
            textButton="Filtrar" 
            size="small"
            valueDefault="Todos"
          />
        </div>
        <div style={{padding: '0px'}}>
          <Select
            border={false}
            label="Tiempo"
            data={tiempo}
            color="G600"
            style={{width: '260px'}}
            colorSecondary="DP60"
            size="small"
          />
        </div>
        <div style={{padding: '0px'}}>
          <Select
            border={false}
            label="Comparado con"
            data={comparador}
            color="G600"
            style={{width: '260px'}}
            colorSecondary="DP60"
            size="small"
          />
        </div>
      </Grid>
      <Paper title="Objetivos" color="DP40">
        <div style={{padding: '10px 20px 10px'}}>
          <Caps size="large" color="DP60" align="left">TIENDA</Caps>
        </div>
        <Grid columns="col3" spacing="s4" style={{width: '1059px', padding: '0px', paddingLeft: '21px'}}>
          <Card background="backgroundLightSecondary" title="ENTRADAS" text="2322" badge="3" incr/>
          <Card background="backgroundLightSecondary" title="TRANSACCIONES" text="276" badge="2"/>
          <Card background="backgroundLightSecondary" title="TASA DE CONVERSIÓN" text="11.89%" badge="1"/>
        </Grid>
        <Grid columns="col1" spacing="s4" style={{width: '1057px'}}>
          <GridItems shadow={false} background="backgroundLightPrimary">
            <Caps size="large" color="DP60" align="left">OBJETIVOS POR DIA DE LA SEMANA</Caps>
          </GridItems>
        </Grid>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Heatmap />
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <GridItems shadow={false} background="backgroundLightPrimary">
            <Caps size="large" color="DP60" align="left">ENTRADAS POR HORA DEL DÍA</Caps>
          </GridItems>
          <div style={{width: '300px'}}>
            <Button
              color="DP60"
              variant="buttonGroup"
              size="small"
              group={group}
            />
          </div>
        </div>
        <br /><br />
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
          <Column data={data[filterEntradas]} options={options[filterEntradas]} />
        </div>
        <br /><br />
      </Paper>
      <Paper title="Demográficos" color="DP40">
        <br /><br />
        <Grid columns="col3" spacing="s4" style={{width: '1059px', padding: '0px', paddingLeft: '21px'}}>
          <Card background="backgroundLightSecondary" title="MUJERES" text="1011" badge="2"/>
          <Card background="backgroundLightSecondary" title="HOMBRES" text="1188" badge="2"/>
          <Card background="backgroundLightSecondary" title="TOTAL" text="2199" badge="1"/>
        </Grid>
        <br /><br />
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
          <div className="center" style={{width: '926px'}}>
            <Title variant="h5" color="DP20" align="center">Mujeres</Title>
            &nbsp;&nbsp;
            <Title variant="h5" color="DB40" align="center">Hombres</Title>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
          <Bar />
        </div>
      </Paper>
    </Dashboard>
  );
};
