import React from 'react';

import { List } from './List';
import { RiDashboardFill } from 'react-icons/ri';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { MdSecurity, MdSettings } from 'react-icons/md';
import { BsLayoutTextWindow } from "react-icons/bs";

export default {
  title: 'molecules/Navigation/List',
  component: List,
};

const datas = [
  {
    title: 'MAIN MENU',
    data: [
      {itemList: 'Dashboard', func: ()=> alert('Dashboard'), icon: <RiDashboardFill />},
      {itemList: 'Locaciones', func: ()=> alert('Locaciones'), icon: <BsFillGrid3X3GapFill />},
      {itemList: 'Área', func: ()=> alert('Área'), icon: <MdSecurity />},
      {itemList: 'Mapas de calor', func: ()=> alert('Mapas de calor'), icon: <BsLayoutTextWindow />},
      {itemList: 'Comparador', func: ()=> alert('Dashboard'), icon: <BsLayoutTextWindow />},
    ],
  },
  {
    title: 'GENERAL',
    data: [
      {itemList: 'Configuración', func: ()=> alert('Configuración'), icon: <MdSettings />},
    ],
  }
];

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: datas,
};