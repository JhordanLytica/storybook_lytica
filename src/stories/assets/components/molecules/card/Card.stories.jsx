import React from 'react';

import { Card } from './Card';

export default {
  title: 'molecules/Card',
  component: Card,
};

export const Default = (args) => 
  <Card title="PASANTES" text="198k" badge="10" {...args} />;
