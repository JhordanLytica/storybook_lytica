import React from 'react';

import { Pagination } from './Pagination';

export default {
  title: 'atoms/Navigation/Pagination',
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  length: 500,
};

export const Compact = Template.bind({});
Compact.args = {
	variant: 'compact'
};
