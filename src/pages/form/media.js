import React from 'react';
import CreateForm from '@/components/jsonFormTemp';
import { mediaConfig as config } from '@sula/templates';

export default (props) => {
  return <CreateForm {...config} {...props} />;
};
