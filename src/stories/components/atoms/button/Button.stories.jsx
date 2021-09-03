import React from 'react';

import { Button } from './Button';
import { AiOutlineCloudDownload } from "react-icons/ai";

export default {
  title: 'atoms/Inputs/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Borderless = Template.bind({});
Borderless.args = {
  children: 'Borderless',
  variant: 'borderless',
};


export const Icon = Template.bind({});
Icon.args = {
  children: <AiOutlineCloudDownload />,
  variant: 'icon',
};

export const ButtonGroup = Template.bind({});
ButtonGroup.args = {
  variant: 'buttonGroup',
};
