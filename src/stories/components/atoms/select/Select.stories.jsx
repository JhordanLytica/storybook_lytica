import React from 'react';

import { Select } from './Select';

export default {
  title: 'atoms/Inputs/Select',
  component: Select,
};

const Template = (args) =><div style={{width: '300px', paddingLeft: '50px'}}><Select {...args} /></div>;
const handleChange = (event) => {
  console.log('----');
  console.log(event.target.value);
};
export const Default = Template.bind({});
Default.args = {
  data: ['Jhordan', 'Juan', 'Diana', 'Denis', 'Carlos', 'Jimena'],
  label: 'Person',
  onChange: handleChange
};

export const Multiple = Template.bind({});
Multiple.args = {
  data: [
    {
      title: 'Mujeres',
      values: ['Diana', 'Karla', 'Vero', 'Jess', 'Alma', 'Gaby'],
      subTitle: ['Diana', 'Karla', 'Vero', 'Jess', 'Alma', 'Gaby'],
    },
    {
      title: 'Hombres',
      values: ['Jhordan', 'Nestor', 'Paka', 'Mario', 'Carlos', 'Fausto'],
    },
  ],
  label: 'Persons',
  multiple: true,
  onChange: handleChange
};

