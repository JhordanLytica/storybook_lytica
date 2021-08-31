import React from 'react';

import { Input } from './Input';
import { FaUserAlt } from 'react-icons/fa';

export default {
  title: 'atoms/Inputs/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
	placeholder: 'Ingrese un texto'
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success',
	placeholder: 'Ingrese un texto',
	success: true,
	successText: 'success',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
	placeholder: 'Ingrese un texto',
	error: true,
	errorText: 'error',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  label: 'IconLeft',
	placeholder: 'Ingrese un texto',
	icon: true,
  iconPosition: 'iconLeft',
	children: <FaUserAlt />,
};

export const IconRight = Template.bind({});
IconRight.args = {
  label: 'Icon Right',
	placeholder: 'Ingrese un texto',
	icon: true,
  iconPosition: 'iconRight',
	children: <FaUserAlt />,
};